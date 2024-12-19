import React from 'react';
import { Table, Tooltip } from 'antd';
import useFoundationMembers from '@/hooks/useFoundationMembers';

interface DonationAmount {
  USDT: number;
  USDC: number;
  SOL: number;
  MINIDOGE: number;
}

interface MemberData {
  address: string;
  totalDonation: DonationAmount;
  lastDonation: string;
  donationCount: number;
  totalNftRights: number;
  votingRights: number;
}

const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const getTokenColor = (type: string) => {
  switch (type) {
    case 'MINIDOGE':
      return '#FFAC03';
    case 'USDT':
      return '#26A17B';
    case 'USDC':
      return '#2775CA';
    case 'SOL':
      return '#9945FF';
    default:
      return '#FFAC03';
  }
};

// 添加统计组件
const StatsDisplay: React.FC<{ members: MemberData[] }> = ({ members }) => {
  // 计算统计数据
  const stats = members.reduce((acc, member) => {
    return {
      totalNftRights: acc.totalNftRights + member.totalNftRights,
      totalVotingRights: acc.totalVotingRights + member.votingRights,
    };
  }, { totalNftRights: 0, totalVotingRights: 0 });

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-white/5 rounded-xl p-4 text-center">
        <div className="text-[#FFAC03] text-2xl font-bold mb-2">{members.length}</div>
        <div className="text-white/80 text-sm">总人数</div>
      </div>
      <div className="bg-white/5 rounded-xl p-4 text-center">
        <div className="text-[#FFAC03] text-2xl font-bold mb-2">{stats.totalNftRights}</div>
        <div className="text-white/80 text-sm">NFT空投总数</div>
      </div>
      <div className="bg-white/5 rounded-xl p-4 text-center">
        <div className="text-[#FFAC03] text-2xl font-bold mb-2">{stats.totalVotingRights}</div>
        <div className="text-white/80 text-sm">投票总数</div>
      </div>
    </div>
  );
};

export const MemberList: React.FC = () => {
  // 使用 hook 获取成员数据
  const { members, loading, error } = useFoundationMembers();

  // 添加分页状态
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 50;

  // 计算当前页的数据
  const startIndex = (currentPage - 1) * pageSize;
  const currentPageData = members.slice(startIndex, startIndex + pageSize);

  const memberColumns = [
    {
      title: '编号',
      key: 'index',
      width: 60,
      align: 'center' as const,
      render: (_: any, __: any, index: number) => (
        <span className="text-[#FFAC03] text-lg font-bold">{index + 1}</span>
      ),
    },
    {
      title: 'NFT权益',
      dataIndex: 'totalNftRights',
      key: 'totalNftRights',
      width: 80,
      align: 'center' as const,
      render: (rights: number) => (
        <span className="text-white font-medium">{rights}</span>
      ),
    },
    {
      title: '投票权',
      dataIndex: 'votingRights',
      key: 'votingRights',
      width: 80,
      align: 'center' as const,
      render: (rights: number) => (
        <span className="text-white font-medium">{rights}</span>
      ),
    },
    {
      title: '钱包地址',
      dataIndex: 'address',
      key: 'address',
      align: 'center' as const,
      width: 360,
      render: (address: string) => (
        <a 
          href={`https://solscan.io/account/${address}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-white/80 font-medium"
        >
          {address}
        </a>
      ),
    },
    {
      title: '最后捐赠',
      dataIndex: 'lastDonation',
      key: 'lastDonation',
      width: 140,
      align: 'center' as const,
      render: (dateStr: string) => {
        if (!dateStr) return <span className="text-white/80">-</span>;
        
        // 解析 ISO 格式的时间字符串
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) {
          return <span className="text-white/80">Invalid Date</span>;
        }
        
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        
        return (
          <span className="text-white/80">
            {`${year}-${month}-${day} ${hours}:${minutes}`}
          </span>
        );
      },
    },
    {
      title: '总捐赠额',
      dataIndex: 'totalDonation',
      key: 'totalDonation',
      width: 180,
      align: 'center' as const,
      render: (donations: DonationAmount) => {
        // 计算显示的捐赠项
        const donationItems = [];
        if (donations.USDT > 0) donationItems.push({ type: 'USDT', amount: donations.USDT });
        if (donations.USDC > 0) donationItems.push({ type: 'USDC', amount: donations.USDC });
        if (donations.SOL > 0) donationItems.push({ type: 'SOL', amount: donations.SOL });
        if (donations.MINIDOGE > 0) donationItems.push({ type: 'MINIDOGE', amount: donations.MINIDOGE });

        return (
          <Tooltip 
            title={
              <div className="space-y-2 py-1">
                {donationItems.map(item => (
                  <div key={item.type} className="flex items-center gap-3">
                    <span className="text-white font-medium text-right min-w-[120px]">{item.type === 'SOL' 
                      ? item.amount.toFixed(3)
                      : item.type === 'MINIDOGE'
                      ? formatNumber(item.amount)
                      : item.amount.toLocaleString()
                    }</span>
                    <span style={{ color: getTokenColor(item.type) }}>{item.type}</span>
                  </div>
                ))}
              </div>
            }
          >
            <div className="flex flex-col gap-1.5">
              {donationItems.map(item => (
                <div key={item.type} className="flex items-center justify-end gap-2">
                  <span className="text-white font-medium">
                    {item.type === 'SOL' 
                      ? item.amount.toFixed(3)
                      : item.type === 'MINIDOGE'
                      ? formatNumber(item.amount)
                      : item.amount.toLocaleString()
                    }
                  </span>
                  <span 
                    className="text-sm min-w-[70px]"
                    style={{ color: getTokenColor(item.type) }}
                  >
                    {item.type}
                  </span>
                </div>
              ))}
            </div>
          </Tooltip>
        );
      },
    },
  ];

  const paginationConfig = {
    current: currentPage,
    pageSize: pageSize,
    total: members.length,
    showSizeChanger: false,
    className: "!text-white",
    size: 'small' as "default" | "small",
    onChange: (page: number) => setCurrentPage(page),
  };

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        加载失败: {error}
      </div>
    );
  }

  return (
    <div className="relative">
      <StatsDisplay members={members} />
      {/* 上方分页器 */}
      <div className="flex justify-center mb-4">
        <Table
          columns={[]}
          dataSource={[]}
          pagination={paginationConfig}
          className="pagination-only"
        />
      </div>
      {/* 表格内容 - 添加固定高度容器 */}
      <div className="h-[calc(100vh-300px)] min-h-[400px] overflow-hidden">
        <div className="h-full overflow-x-auto overflow-y-auto">
          <Table
            columns={memberColumns}
            dataSource={currentPageData}
            loading={loading}
            rowKey="address"
            pagination={false}
            className="custom-table no-hover-effect min-w-[900px]"
            rowClassName={() => "bg-transparent"}
            style={{ 
              background: 'transparent',
            }}
            scroll={{ x: 'max-content' }}
            tableLayout="fixed"
          />
        </div>
      </div>
      {/* 下方分页器 */}
      <div className="flex justify-center mt-4">
        <Table
          columns={[]}
          dataSource={[]}
          pagination={paginationConfig}
          className="pagination-only"
        />
      </div>
    </div>
  );
}; 