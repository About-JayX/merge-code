import { useState, useEffect } from 'react'
import { Connection, PublicKey } from '@solana/web3.js'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import {
  FOUNDATION_ADDRESS,
  RPC_ENDPOINT,
  FOUNDATION_CONFIG,
} from '@/config/foundation'
import { parseTransaction, getTokenType } from '@/utils/transactionParser'
import { getList } from '@/api'
import { calc_VOTE_NFT } from '@/util'

export interface TokenBalance {
  mint: string
  amount: number
  decimals: number
}

export interface TransactionInfo {
  signature: string
  timestamp: number
  amount: number
  tokenMint: string
}

const ADDRESS_TOKEN: any = {
  Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: 'USDT',
  EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: 'USDC',
  SOL: 'SOL',
}
interface MemberData {
  address: string
  totalDonation: {
    USDT: number
    USDC: number
    SOL: number
    MINIDOGE: number
  }
  lastDonation: string
  donationCount: number
  totalNftRights: number
  votingRights: number
}

interface UseFoundationMembersResult {
  members: MemberData[]
  loading: boolean
  error: string | null
}

const DECIMALS = {
  USDT: 6,
  USDC: 6,
  SOL: 9,
  MINIDOGE: 9,
}

// 添加延迟函数
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// 添加重试函数
// const withRetry = async <T>(
//   fn: () => Promise<T>,
//   retries = 3,
//   delayMs = 100,
//   operationName = 'operation'
// ): Promise<T> => {
//   try {
//     console.log(`[${operationName}] Attempting...`)
//     return await fn()
//   } catch (error) {
//     if (retries === 0) {
//       console.error(`[${operationName}] All retries failed:`, error)
//       throw error
//     }
//     if (error instanceof Error && error.message.includes('429')) {
//       console.warn(
//         `[${operationName}] Rate limit hit, retrying in ${delayMs}ms. Retries left: ${retries}`
//       )
//       await delay(delayMs)
//       return withRetry(fn, retries - 1, delayMs * 2, operationName)
//     }
//     throw error
//   }
// }

// 批处理函数
// const processBatch = async <T, R>(
//   items: T[],
//   batchSize: number,
//   processItem: (item: T) => Promise<R>,
//   delayMs: number = 500
// ): Promise<R[]> => {
//   const results: R[] = []
//   const totalBatches = Math.ceil(items.length / batchSize)

//   console.log(
//     `Starting batch processing: ${items.length} items in ${totalBatches} batches`
//   )

//   for (let i = 0; i < items.length; i += batchSize) {
//     const batchNumber = Math.floor(i / batchSize) + 1
//     const batch = items.slice(i, i + batchSize)
//     console.log(
//       `Processing batch ${batchNumber}/${totalBatches} (${batch.length} items)`
//     )

//     const batchResults = await Promise.all(
//       batch.map((item, index) =>
//         withRetry(
//           () => processItem(item),
//           3,
//           1000,
//           `Batch ${batchNumber} Item ${index + 1}`
//         )
//       )
//     )

//     const successfulResults = batchResults.filter(r => r !== null).length
//     console.log(
//       `Batch ${batchNumber} completed: ${successfulResults}/${batch.length} successful`
//     )

//     results.push(...batchResults)

//     if (i + batchSize < items.length) {
//       console.log(`Waiting ${delayMs}ms before next batch...`)
//       await delay(delayMs)
//     }
//   }

//   console.log(
//     `Batch processing completed: ${results.filter(r => r !== null).length}/${
//       items.length
//     } total successful`
//   )
//   return results
// }

const useFoundationMembers = (): UseFoundationMembersResult => {
  const [members, setMembers] = useState<MemberData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const init = async () => {
    try {
      const result = await getList()
      const { users } = result
      if (!users.success) throw new Error('return data fail')
      const results: Array<any> = users.results
      const memberList = results.map((item: any) => {
        if (item.donationSummary) {
          const o = JSON.parse(item.donationSummary)
          let data: any = {}
          for (const k in o) {
            const key = ADDRESS_TOKEN[k] ? ADDRESS_TOKEN[k] : 'MINIDOGE'
            data[key] = o[k]
          }
          const { votes, nftCount } = calc_VOTE_NFT(data)

          item.donationSummary = data
          item.votes = votes
          item.nftCount = nftCount
        }

        console.log(item, 'item')

        return item
      })
      setMembers(memberList)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Unknown error')
    }

    setLoading(false)
  }
  useEffect(() => {
    init()
    // const fetchMembers = async () => {
    //   console.log('Starting to fetch foundation members...')
    //   try {
    //     const connection = new Connection(RPC_ENDPOINT, {
    //       commitment: 'confirmed',
    //       disableRetryOnRateLimit: true,
    //     })
    //     const foundationPubkey = new PublicKey(FOUNDATION_ADDRESS)

    //     console.log('Fetching signatures...')
    //     const signatures = await withRetry(
    //       () =>
    //         connection.getSignaturesForAddress(foundationPubkey, {
    //           limit: 1000,
    //         }),
    //       3,
    //       1000,
    //       'Fetch Signatures'
    //     )

    //     console.log(`Found ${signatures.length} signatures`)

    //     if (!signatures.length) {
    //       console.log('No signatures found')
    //       if (isMounted) {
    //         setMembers([])
    //         setLoading(false)
    //       }
    //       return
    //     }

    //     // 使用批处理获取交易详情
    //     const processTransaction = async (sig: { signature: string }) => {
    //       try {
    //         console.log(`Fetching transaction ${sig.signature.slice(0, 8)}...`)
    //         const tx = await connection.getTransaction(sig.signature, {
    //           maxSupportedTransactionVersion: 0,
    //         })

    //         if (!tx) {
    //           console.log(`Transaction ${sig.signature.slice(0, 8)} not found`)
    //           return null
    //         }

    //         const parsedTransfer = parseTransaction(tx)
    //         if (!parsedTransfer) {
    //           console.log(
    //             `No valid transfer found in transaction ${sig.signature.slice(
    //               0,
    //               8
    //             )}`
    //           )
    //           return null
    //         }

    //         console.log(
    //           `Successfully parsed transaction ${sig.signature.slice(0, 8)}:`,
    //           {
    //             from: parsedTransfer.from.slice(0, 8),
    //             amount: parsedTransfer.amount,
    //             isNative: parsedTransfer.isNative,
    //             tokenMint: parsedTransfer.tokenMint
    //               ? parsedTransfer.tokenMint.slice(0, 8)
    //               : 'none',
    //           }
    //         )

    //         return {
    //           signature: sig.signature,
    //           timestamp: tx.blockTime ? tx.blockTime * 1000 : Date.now(),
    //           from: parsedTransfer.from,
    //           amount: parsedTransfer.amount,
    //           tokenMint: parsedTransfer.tokenMint,
    //           isNative: parsedTransfer.isNative,
    //         }
    //       } catch (err) {
    //         console.error(`Error fetching transaction ${sig.signature}:`, err)
    //         return null
    //       }
    //     }

    //     console.log('Starting transaction processing...')
    //     const transactions = await processBatch(
    //       signatures,
    //       3,
    //       processTransaction,
    //       500
    //     )
    //     console.log(
    //       `Processed ${
    //         transactions.filter(t => t !== null).length
    //       } valid transactions`
    //     )

    //     // 处理数据，生成成员列表
    //     console.log('Processing member data...')
    //     const memberMap = new Map<string, MemberData>()

    //     // 处理交易数据
    //     transactions.forEach(tx => {
    //       if (!tx?.from || !tx?.amount) return

    //       const { from, amount, tokenMint, isNative, timestamp } = tx

    //       // 获取或创建成员数据
    //       let memberData = memberMap.get(from) || {
    //         address: from,
    //         totalDonation: {
    //           USDT: 0,
    //           USDC: 0,
    //           SOL: 0,
    //           MINIDOGE: 0,
    //         },
    //         lastDonation: new Date(timestamp).toISOString(),
    //         donationCount: 0,
    //         totalNftRights: 0,
    //         votingRights: 0,
    //       }

    //       try {
    //         // 更新捐赠数据
    //         if (isNative) {
    //           const solAmount = amount / Math.pow(10, DECIMALS.SOL)
    //           console.log(
    //             `Adding SOL donation: ${solAmount} from ${from.slice(0, 8)}`
    //           )
    //           memberData.totalDonation.SOL += solAmount
    //         } else if (tokenMint) {
    //           const tokenType = getTokenType(tokenMint)
    //           if (tokenType && DECIMALS[tokenType]) {
    //             const tokenAmount = amount / Math.pow(10, DECIMALS[tokenType])
    //             console.log(
    //               `Adding ${tokenType} donation: ${tokenAmount} from ${from.slice(
    //                 0,
    //                 8
    //               )}`
    //             )
    //             memberData.totalDonation[tokenType] += tokenAmount
    //           }
    //         }

    //         // 更新其他数据
    //         memberData.donationCount += 1
    //         memberData.lastDonation = new Date(timestamp).toISOString()

    //         // 计算 NFT 权益
    //         memberData.totalNftRights = Math.floor(
    //           memberData.totalDonation.USDT / 20 +
    //             memberData.totalDonation.USDC / 20 +
    //             memberData.totalDonation.SOL / 0.1 +
    //             memberData.totalDonation.MINIDOGE / 10000
    //         )

    //         // 计算投票权
    //         memberData.votingRights = 1 // 基础投票权
    //         const additionalRights = Math.floor(memberData.totalNftRights / 5)
    //         memberData.votingRights += Math.min(additionalRights, 3) // 最多3个额外投票权

    //         memberMap.set(from, memberData)
    //       } catch (err) {
    //         console.error(`Error processing member data for ${from}:`, err)
    //       }
    //     })

    //     console.log(`Processed ${memberMap.size} unique members`)

    //     // 转换为数组格式并按最后捐赠时间排序
    //     const memberList = Array.from(memberMap.values()).sort(
    //       (a, b) =>
    //         new Date(b.lastDonation).getTime() -
    //         new Date(a.lastDonation).getTime()
    //     )

    //     console.log('Data processing completed')

    //     if (isMounted) {
    //       setMembers(memberList)
    //       setLoading(false)
    //     }
    //   } catch (err) {
    //     console.error('Error fetching foundation members:', err)
    //     if (isMounted) {
    //       // setError(err instanceof Error ? err.message : 'Unknown error')
    //       setError(null)
    //       setLoading(false)
    //     }
    //   }
    // }

    // fetchMembers()
  }, [])

  return { members, loading, error }
}

export default useFoundationMembers
