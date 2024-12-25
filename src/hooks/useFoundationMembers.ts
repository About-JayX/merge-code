import { useState, useEffect } from 'react'
import { getList } from '@/api'
import { calc_VOTE_NFT } from '@/util'
import { isSpecialAddress, getAddressNftAirdrop, getAddressVotingRights } from '@/config/specialAddresses'

interface TokenAmounts {
  USDT: number | string
  USDC: number | string
  SOL: number | string
  MINIDOGE: number | string
  [key: string]: number | string
}

interface DonationItem {
  from: string
  tokenAmounts: TokenAmounts
  firstDonationTime: number
  lastDonationTime: number
  lastSignature: string
  donationCount: number
}

interface Member {
  address: string
  tokenAmounts: TokenAmounts
  firstDonationTime: number
  lastDonationTime: number
  lastSignature: string
  donationCount: number
  nftCount: number
  votes: number
  timeBasedRank?: number  // 基于时间的排名
}

const ITEMS_PER_PAGE = 30
const API_PAGE_SIZE = 10

export default function useFoundationMembers() {
  const [members, setMembers] = useState<Member[]>([])
  const [allMembers, setAllMembers] = useState<Member[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [total, setTotal] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  // 计算总 NFT 数量（包括额外奖励）
  const calculateTotalNft = (member: Member, rank: number) => {
    // 如果是特殊地址，直接返回0
    if (isSpecialAddress(member.address)) {
      return 0
    }
    const baseNft = Number(member.nftCount)
    // 如果基础NFT为0，说明是预期奖励，不计算额外奖励
    if (baseNft === 0) {
      return 0
    }
    // 只有当基础NFT数量大于0时，才计算额外奖励
    const extraNft = rank <= 100 ? 2 : rank <= 500 ? 1 : 0
    return baseNft + extraNft
  }

  // 加载所有数据
  const loadAllData = async () => {
    try {
      setLoading(true)
      setError(null)

      // 先获取第一页来得到总数
      const firstPage = await getList({ page: 1, pageSize: API_PAGE_SIZE })
      if (!firstPage || !firstPage.success) {
        throw new Error('Failed to load data')
      }

      const totalItems = firstPage.total
      const totalApiPages = Math.ceil(totalItems / API_PAGE_SIZE)
      console.log(`Total items: ${totalItems}, Total pages: ${totalApiPages}`)
      
      // 加载剩余页面（从第2页开始）
      const remainingPagePromises = Array.from({ length: totalApiPages - 1 }, (_, i) => 
        getList({ page: i + 2, pageSize: API_PAGE_SIZE })
          .then(result => {
            console.log(`Loaded page ${i + 2}/${totalApiPages}`)
            return result
          })
          .catch(err => {
            console.error(`Failed to load page ${i + 2}:`, err)
            throw err
          })
      )
      
      const remainingResults = await Promise.all(remainingPagePromises)
      console.log('All pages loaded')
      
      // 合并第一页和剩余页面的数据
      const allResults = [firstPage, ...remainingResults]
      
      // 使用 Map 来去重
      const uniqueMembers = new Map<string, DonationItem>()
      
      // 合并所有数据并去重
      allResults.forEach(result => {
        if (!result || !result.success || !Array.isArray(result.donations)) {
          console.warn('Invalid API response:', result)
          return
        }
        result.donations.forEach((item: DonationItem) => {
          if (item && item.from) {
            // 如果已存在该地址的记录，保留最早的捐赠时间
            const existingMember = uniqueMembers.get(item.from)
            if (existingMember) {
              item.firstDonationTime = Math.min(item.firstDonationTime, existingMember.firstDonationTime)
            }
            uniqueMembers.set(item.from, item)
          }
        })
      })
      
      // 处理去重后的数据
      const processedMembers = Array.from(uniqueMembers.values()).map((item: DonationItem) => {
        if (!item || !item.from || !item.tokenAmounts) {
          console.warn('Invalid donation item:', item)
          return null
        }

        // 确保所有代币数量都存在
        const tokenAmounts: TokenAmounts = {
          USDT: item.tokenAmounts.USDT || '0',
          USDC: item.tokenAmounts.USDC || '0',
          SOL: item.tokenAmounts.SOL || '0',
          MINIDOGE: item.tokenAmounts.MINIDOGE || '0'
        }

        // 检查是否为特殊地址
        if (isSpecialAddress(item.from)) {
          return {
            address: item.from,
            tokenAmounts,
            firstDonationTime: item.firstDonationTime,
            lastDonationTime: item.lastDonationTime,
            lastSignature: item.lastSignature,
            donationCount: item.donationCount,
            nftCount: getAddressNftAirdrop(item.from),
            votes: getAddressVotingRights(item.from)
          }
        }

        const { nftCount, votes } = calc_VOTE_NFT(tokenAmounts)
        
        return {
          address: item.from,
          tokenAmounts,
          firstDonationTime: item.firstDonationTime,
          lastDonationTime: item.lastDonationTime,
          lastSignature: item.lastSignature,
          donationCount: item.donationCount,
          nftCount,
          votes
        }
      }).filter(Boolean) as Member[]

      // 先按照最早捐赠时间排序，计算基于时间的排名
      const timeBasedMembers = [...processedMembers]
      timeBasedMembers.sort((a, b) => a.firstDonationTime - b.firstDonationTime)
      timeBasedMembers.forEach((member, index) => {
        member.timeBasedRank = index + 1
      })
      
      // 再按照 NFT 数量排序（包括额外奖励）
      processedMembers.sort((a, b) => {
        const rankA = a.timeBasedRank || 0
        const rankB = b.timeBasedRank || 0
        const totalNftA = calculateTotalNft(a, rankA)
        const totalNftB = calculateTotalNft(b, rankB)
        return totalNftB - totalNftA  // 降序排序
      })
      
      console.log(`Processed ${processedMembers.length} unique members`)
      
      // 更新状态
      setAllMembers(processedMembers)
      setTotal(processedMembers.length)
      setTotalPages(Math.ceil(processedMembers.length / ITEMS_PER_PAGE))
      
      // 更新当前页显示的数据
      const start = (currentPage - 1) * ITEMS_PER_PAGE
      const end = start + ITEMS_PER_PAGE
      setMembers(processedMembers.slice(start, end))
      
    } catch (err: any) {
      console.error('Error loading data:', err)
      setError(err.message || 'Failed to load data')
    } finally {
      setLoading(false)
    }
  }

  // 页面切换时更新显示的数据
  const updateDisplayedMembers = () => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    const end = start + ITEMS_PER_PAGE
    setMembers(allMembers.slice(start, end))
  }

  // 初始加载
  useEffect(() => {
    loadAllData()
  }, [])

  // 页面变化时更新显示的数据
  useEffect(() => {
    if (allMembers.length > 0) {
      updateDisplayedMembers()
    }
  }, [currentPage, allMembers])

  return {
    members,
    allMembers,
    loading,
    error,
    total,
    currentPage,
    pageSize: ITEMS_PER_PAGE,
    totalPages,
    setCurrentPage
  }
}
