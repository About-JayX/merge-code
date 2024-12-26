interface AddressTag {
  name: string;
  type: 'exchange' | 'contract' | 'other';
  color: string;
  nftAirdrop?: number;  // NFT空投数量
  votingRights?: number;  // 投票权数量
  allowExplorer?: boolean; // 是否允许查看区块链浏览器
}

// 特殊地址配置
export const specialAddresses: Record<string, AddressTag> = {
  // 交易所地址
  '5VCwKtCXgCJ6kit5FybXjvriW3xELsFDhYrPSqtJNmcD': {
    name: 'Exchange',
    type: 'exchange',
    color: '#F0B90B',  // Binance 黄色
    nftAirdrop: 0,
    votingRights: 0,
    allowExplorer: false
  },
  'u6PJ8DtQuPFnfmwHbGFULQ4u4EgjDiyYKjVEsynXq2w': {
    name: 'Exchange',
    type: 'exchange',
    color: '#121212',  // OKX 黑色
    nftAirdrop: 0,
    votingRights: 0,
    allowExplorer: false
  }
}

// 获取地址标记
export const getAddressTag = (address: string): AddressTag | undefined => {
  return specialAddresses[address]
}

// 检查是否为特殊地址
export const isSpecialAddress = (address: string): boolean => {
  return address in specialAddresses
}

// 获取地址的NFT空投数量
export const getAddressNftAirdrop = (address: string): number => {
  const tag = specialAddresses[address]
  return tag?.nftAirdrop ?? 0
}

// 获取地址的投票权数量
export const getAddressVotingRights = (address: string): number => {
  const tag = specialAddresses[address]
  return tag?.votingRights ?? 0
} 