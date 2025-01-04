import { ParsedTransactionWithMeta, PartiallyDecodedInstruction, TransactionResponse, PublicKey } from '@solana/web3.js';
import { FOUNDATION_CONFIG } from '@/config/foundation';

interface ParsedTransfer {
  from: string;
  amount: number;
  tokenMint?: string;
  isNative?: boolean;
}

export const parseTransaction = (
  transaction: TransactionResponse
): ParsedTransfer | null => {
  try {
    if (!transaction?.meta || !transaction?.transaction?.message) {
      return null;
    }

    const message = transaction.transaction.message;
    
    // 确保 accountKeys 存在且是数组
    if (!Array.isArray(message.accountKeys)) {
      return null;
    }

    const instructions = Array.isArray(message.instructions) ? message.instructions : [];
    const preBalances = transaction.meta.preBalances || [];
    const postBalances = transaction.meta.postBalances || [];
    const accountKeys = message.accountKeys.map(key => 
      typeof key === 'string' ? key : key?.toString() || ''
    ).filter(Boolean);

    if (!accountKeys.length) {
      return null;
    }

    // 检查是否有预编译的指令
    if (transaction.meta.innerInstructions?.length > 0) {
      for (const innerInstructions of transaction.meta.innerInstructions) {
        for (const instruction of innerInstructions.instructions) {
          // 检查 SPL Token 转账
          if (instruction.programId?.toString() === TOKEN_PROGRAM_ID.toString()) {
            const parsed = instruction as PartiallyDecodedInstruction;
            if (parsed.data) {
              try {
                const dataStr = Buffer.from(parsed.data, 'base64').toString('hex');
                if (dataStr.startsWith('02')) { // Transfer instruction
                  const amount = parseInt(dataStr.slice(8), 16);
                  const accounts = Array.isArray(parsed.accounts) ? parsed.accounts : [];
                  if (accounts.length >= 3) {
                    const tokenMint = accounts[1]?.toString();
                    const fromAccount = accounts[0]?.toString();
                    if (tokenMint && fromAccount) {
                      return {
                        from: fromAccount,
                        amount,
                        tokenMint,
                        isNative: false
                      };
                    }
                  }
                }
              } catch (err) {
                console.error('Error parsing inner SPL token transfer:', err);
              }
            }
          }
        }
      }
    }

    // 遍历所有主指令
    for (const instruction of instructions) {
      if (!instruction?.programId) continue;

      const programId = instruction.programId.toString();

      // 解析 SPL Token 转账
      if (programId === TOKEN_PROGRAM_ID.toString()) {
        const parsed = instruction as PartiallyDecodedInstruction;
        if (parsed.data) {
          try {
            const dataStr = Buffer.from(parsed.data, 'base64').toString('hex');
            // 检查是否是 transfer 指令 (0x02) 或 transferChecked 指令 (0x12)
            if (dataStr.startsWith('02') || dataStr.startsWith('12')) {
              const amount = parseInt(dataStr.slice(8), 16);
              const accounts = Array.isArray(parsed.accounts) ? parsed.accounts : [];
              if (accounts.length >= 3) {
                const tokenMint = accounts[1]?.toString();
                const fromAccount = accounts[0]?.toString();
                if (tokenMint && fromAccount) {
                  return {
                    from: fromAccount,
                    amount,
                    tokenMint,
                    isNative: false
                  };
                }
              }
            }
          } catch (err) {
            console.error('Error parsing SPL token transfer:', err);
          }
        }
      }
      // 解析原生 SOL 转账
      else if (programId === '11111111111111111111111111111111') {
        const foundationAddress = FOUNDATION_CONFIG.address;
        
        // 检查所有账户的余额变化
        accountKeys.forEach((key, index) => {
          if (key !== foundationAddress && index < preBalances.length && index < postBalances.length) {
            const balanceChange = preBalances[index] - postBalances[index];
            if (balanceChange > 0) {
              // 确保这是一个转入基金会地址的交易
              const recipientIndex = accountKeys.findIndex(k => k === foundationAddress);
              if (recipientIndex !== -1 && postBalances[recipientIndex] > preBalances[recipientIndex]) {
                return {
                  from: key,
                  amount: balanceChange,
                  isNative: true
                };
              }
            }
          }
        });
      }
    }

    // 如果没有找到明确的转账指令，检查整体余额变化
    const foundationIndex = accountKeys.findIndex(key => key === FOUNDATION_CONFIG.address);
    if (foundationIndex !== -1) {
      const foundationBalanceChange = postBalances[foundationIndex] - preBalances[foundationIndex];
      if (foundationBalanceChange > 0) {
        // 找出转出方
        for (let i = 0; i < accountKeys.length; i++) {
          if (i !== foundationIndex && preBalances[i] - postBalances[i] >= foundationBalanceChange) {
            return {
              from: accountKeys[i],
              amount: foundationBalanceChange,
              isNative: true
            };
          }
        }
      }
    }
  } catch (error) {
    console.error('Error parsing transaction:', error);
  }
  return null;
};

// 根据代币铸币地址获取代币类型
export const getTokenType = (mint: string): 'USDT' | 'USDC' | 'MINIDOGE' | null => {
  if (!mint) return null;
  
  const tokenEntries = Object.entries(FOUNDATION_CONFIG.tokens);
  for (const [token, address] of tokenEntries) {
    if (address === mint) {
      return token as 'USDT' | 'USDC' | 'MINIDOGE';
    }
  }
  return null;
}; 