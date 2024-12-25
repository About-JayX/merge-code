import React from 'react'
import { Table, Tooltip, Tag, ConfigProvider } from 'antd'
import type { SortOrder } from 'antd/es/table/interface'
import useFoundationMembers from '@/hooks/useFoundationMembers'
import { useTranslation } from 'react-i18next'
import { SolanaCircleColorful } from '@ant-design/web3-icons'
import Icon from '@/components/icon'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { getAddressTag, isSpecialAddress } from '@/config/specialAddresses'

// 配置 dayjs 使用 UTC 插件
dayjs.extend(utc)

interface DonationAmount {
  USDT: number
  USDC: number
  SOL: number
  MINIDOGE: number
}

interface MemberData {
  address: string
  totalDonation: DonationAmount
  lastDonation: string
  donationCount: number
  totalNftRights: number
  votingRights: number
}

const formatNumber = (num: number, type: string) => {
  const formattedNum = Number(num).toFixed(3)
  const [integerPart, decimalPart] = formattedNum.split('.')
  
  if (type === 'SOL') {
    return formattedNum
  }
  
  const formattedInteger = type === 'MINIDOGE' 
    ? Math.floor(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : integerPart
    
  return type === 'MINIDOGE' 
    ? formattedInteger
    : (
      <>
        {formattedInteger}
        <span className="opacity-50">.{decimalPart}</span>
      </>
    )
}

const getTokenColor = (type: string) => {
  switch (type) {
    case 'MINIDOGE':
      return '#FFAC03'
    case 'USDT':
      return '#26A17B'
    case 'USDC':
      return '#2775CA'
    case 'SOL':
      return '#9945FF'
    default:
      return '#FFAC03'
  }
}

// 计算额外 NFT 数量的函数
const calculateExtraNft = (rank: number, baseNft: number) => {
  if (rank <= 100) {
    return 2  // 前100名额外2个NFT
  } else if (rank <= 500) {
    return 1  // 前500名额外1个NFT
  }
  return 0
}

// 添加统计组件
const StatsDisplay: React.FC<{ members: any[]; allMembers: any[]; total: number }> = ({ 
  members, 
  allMembers,
  total
}) => {
  const { t } = useTranslation()

  // 计算统计数据
  const stats = allMembers.reduce(
    (acc: any, member: any) => {
      // 如果是特殊地址，跳过统计
      if (isSpecialAddress(member.address)) {
        return acc
      }

      const rank = member.timeBasedRank || 0
      const baseNft = Number(member.nftCount || 0)
      // 只有当基础NFT大于0时，才计算额外NFT
      const extraNft = baseNft > 0 ? calculateExtraNft(rank, baseNft) : 0
      const totalNft = baseNft + extraNft
      const votes = Number(member.votes || 0)

      return {
        totalNftRights: (acc.totalNftRights || 0) + totalNft,
        totalVotingRights: (acc.totalVotingRights || 0) + votes,
      }
    },
    { totalNftRights: 0, totalVotingRights: 0 }
  )

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-0 sm:mb-6">
      <div className="bg-white/10 rounded-xl p-3 px-2 sm:p-4 text-center">
        <div className="text-[#FFAC03] text-2xl font-bold mb-1">
          {allMembers.filter(member => !isSpecialAddress(member.address)).length || 0}
        </div>
        <div className="text-white/80 text-sm">{t('dao.totalMembers')}</div>
      </div>
      <div className="bg-white/10 rounded-xl p-3 px-2 sm:p-4 text-center">
        <div className="text-[#FFAC03] text-2xl font-bold mb-1">
          {stats.totalNftRights || 0}
        </div>
        <div className="text-white/80 text-sm">{t('dao.totalNftAirdrops')}</div>
      </div>
      <div className="bg-white/10 rounded-xl p-3 px-2 sm:p-4 text-center col-span-2 sm:col-span-1">
        <div className="text-[#FFAC03] text-2xl font-bold mb-1">
          {stats.totalVotingRights || 0}
        </div>
        <div className="text-white/80 text-sm">{t('dao.totalVotes')}</div>
      </div>
    </div>
  )
}

export const MemberList: React.FC = () => {
  const { t } = useTranslation()
  const { 
    members, 
    allMembers,  // 使用完整数据进行排序
    loading, 
    error, 
    total, 
    currentPage, 
    pageSize, 
    totalPages, 
    setCurrentPage 
  } = useFoundationMembers()

  const memberColumns = [
    {
      title: t('dao.numberHeader'),
      key: 'index',
      width: 60,
      align: 'center' as const,
      render: (_: any, record: any) => {
        return (
          <span className="text-[#FFAC03] text-lg font-bold">
            {record.timeBasedRank}
          </span>
        )
      },
    },
    {
      title: t('dao.nftRightsHeader'),
      dataIndex: 'nftCount',
      key: 'totalNftRights',
      width: 120,
      align: 'center' as const,
      render: (rights: number, record: any) => {
        const rank = record.timeBasedRank || 0
        const extraNft = rights > 0 ? calculateExtraNft(rank, rights) : 0

        return (
          <span className="text-lg">
            <span className="text-white font-bold">{rights}</span>
            {rights > 0 && extraNft > 0 && (
              <span className="text-[#FFAC03]"> (+{extraNft})</span>
            )}
          </span>
        )
      },
    },
    {
      title: t('dao.votingRightsHeader'),
      dataIndex: 'votes',
      key: 'votingRights',
      width: 80,
      align: 'center' as const,
      render: (rights: number) => (
        <span className="text-white text-lg font-bold">{rights}</span>
      ),
    },
    {
      title: t('dao.walletAddressHeader'),
      dataIndex: 'address',
      key: 'address',
      align: 'center' as const,
      width: 360,
      render: (address: string) => {
        const tag = getAddressTag(address)
        
        return (
          <div className="flex items-center justify-center gap-2">
            <a
              href={`https://solscan.io/account/${address}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-medium ${
                tag 
                  ? 'text-white/30 hover:text-white/40 line-through decoration-2' 
                  : 'text-white/75 hover:text-white/80'
              }`}
            >
              {address}
            </a>
            {tag && (
              <span
                className="px-2 py-0.5 rounded text-xs font-medium bg-white/10 text-white/50"
              >
                {tag.name}
              </span>
            )}
          </div>
        )
      },
    },
    {
      title: t('dao.lastDonationHeader'),
      dataIndex: 'lastDonationTime',
      key: 'lastDonation',
      width: 160,
      align: 'center' as const,
      render: (dateStr: number, record: any) => {
        let dataTime = dateStr * 1000

        return (
          <a
            href={`https://solscan.io/tx/${record.lastSignature}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/75 hover:text-white/80 font-medium"
          >
            <div className="flex flex-col">
              <span>{dayjs(dataTime).utc().format('YYYY-MM-DD')}</span>
              <span>{dayjs(dataTime).utc().format('HH:mm')} (UTC)</span>
            </div>
          </a>
        )
      },
    },
    {
      title: t('dao.totalDonationHeader'),
      dataIndex: 'tokenAmounts',
      key: 'totalDonation',
      width: 180,
      align: 'center' as const,
      render: (tokenAmounts: Record<string, number>) => {
        // 计算显示的捐赠项
        const donationItems = Object.entries(tokenAmounts)
          .filter(([_, amount]) => amount > 0)  // 只显示有数量的代币
          .map(([type, amount]) => ({
            type,
            amount
          }))

        const TokemBox = () => (
          <div className="flex flex-col gap-2">
            {donationItems.map((item, index) => (
              <div
                key={`${item.type}-${index}`}
                className="grid grid-cols-[auto,1fr] items-center justify-start gap-1 text-left"
              >
                <span
                  className="text-sm flex items-center"
                  style={{ color: getTokenColor(item.type) }}
                >
                  {item.type === 'USDT' && <Icon name="usdt" />}
                  {item.type === 'USDC' && <Icon name="usdc" />}
                  {item.type === 'SOL' && <SolanaCircleColorful />}
                  {item.type === 'MINIDOGE' && (
                    <span className="anticon">
                      <img src="/logo.png" className="w-[1em] h-[1em]" alt="MINIDOGE" />
                    </span>
                  )}
                </span>
                <div className="text-white font-medium break-all">
                  {formatNumber(item.amount, item.type)}
                </div>
              </div>
            ))}
          </div>
        )

        return (
          <Tooltip title={<TokemBox />} key={tokenAmounts.toString()}>
            <TokemBox />
          </Tooltip>
        )
      },
    },
  ]

  const totalWidth = memberColumns.reduce(
    (acc, column) => acc + column.width,
    0
  )

  const paginationConfig = {
    current: currentPage,
    pageSize: pageSize,
    total: total,
    showSizeChanger: false,
    className: '!text-white',
    size: 'small' as 'default' | 'small',
    onChange: (page: number) => setCurrentPage(page),
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        {t('dao.loadError')}:{' '}
        {error.includes('Invalid public key input')
          ? t('dao.invalidPublicKey')
          : error}
      </div>
    )
  }

  return (
    <ConfigProvider theme={{ components: { Table: { filterDropdownBg: 'transparent' } } }}>
      <div className="relative">
        <StatsDisplay 
          members={members} 
          allMembers={allMembers}
          total={total}
        />
        {/* 上方分页器 */}
        <div className="flex justify-center mb-0">
          <Table
            key="top-pagination"
            columns={[]}
            dataSource={[]}
            pagination={paginationConfig}
            className="pagination-only"
          />
        </div>
        {/* 表格内容 */}
        <div className="h-auto overflow-hidden mt-3 sm:mt-0 rounded-xl">
          <div className="h-full overflow-x-auto overflow-y-auto">
            <Table
              key="main-table"
              columns={memberColumns}
              dataSource={members}
              loading={loading}
              rowKey="address"
              pagination={false}
              className="custom-table no-hover-effect"
              rowClassName={() => 'bg-transparent'}
              style={{
                background: 'transparent',
                minWidth: totalWidth,
              }}
              scroll={{ x: 'auto' }}
              tableLayout="fixed"
            />
          </div>
        </div>
        {/* 下方分页器 */}
        <div className="flex justify-center mt-0">
          <Table
            key="bottom-pagination"
            columns={[]}
            dataSource={[]}
            pagination={paginationConfig}
            className="pagination-only"
          />
        </div>
      </div>
    </ConfigProvider>
  )
}
