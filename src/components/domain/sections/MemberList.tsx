import React from 'react';
import { Table, Tooltip } from 'antd';
import { format } from 'date-fns';

interface DonationAmount {
  USDT: number;
  USDC: number;
  SOL: number;
  MINIDOGE: number;
}

interface MemberData {
  address: string;
  totalDonation: DonationAmount;
  lastDonation: Date | string;
  donationCount: number;
  totalNftRights: number;
  votingRights: number;
}

interface MemberListProps {
  members: MemberData[];
  loading?: boolean;
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

const generateTestData = (count: number): MemberData[] => {
  const data: MemberData[] = [];
  const now = new Date();
  
  for (let i = 0; i < count; i++) {
    // 生成随机钱包地址
    const address = Array.from({ length: 44 }, () => 
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'[
        Math.floor(Math.random() * 62)
      ]
    ).join('');
    
    // 生成随机捐赠金额
    const totalDonation: DonationAmount = {
      USDT: Math.random() < 0.7 ? Math.floor(Math.random() * 100000) : 0,
      USDC: Math.random() < 0.6 ? Math.floor(Math.random() * 80000) : 0,
      SOL: Math.random() < 0.5 ? Math.floor(Math.random() * 1000) / 100 : 0,
      MINIDOGE: Math.random() < 0.8 ? Math.floor(Math.random() * 10000000) : 0,
    };
    
    // 生成随机时间（过去90天内）
    const lastDonation = new Date(now.getTime() - Math.random() * 90 * 24 * 60 * 60 * 1000);
    
    // 生成随机权益
    const totalNftRights = Math.floor(Math.random() * 10);
    const votingRights = Math.floor(Math.random() * 100);
    
    data.push({
      address,
      totalDonation,
      lastDonation: lastDonation.toISOString(),
      donationCount: Math.floor(Math.random() * 20) + 1,
      totalNftRights,
      votingRights,
    });
  }
  
  // 按最后捐赠时间排序
  return data.sort((a, b) => new Date(b.lastDonation).getTime() - new Date(a.lastDonation).getTime());
};

export const MemberList: React.FC<MemberListProps> = ({ members = generateTestData(500), loading = false }) => {
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

  return (
    <div className="overflow-hidden">
      <Table
        columns={memberColumns}
        dataSource={members}
        loading={loading}
        rowKey="address"
        pagination={{
          pageSize: 50,
          showSizeChanger: false,
        }}
        className="custom-table no-hover-effect"
        rowClassName={() => "bg-transparent"}
        style={{ 
          background: 'transparent',
        }}
        scroll={{ x: false, y: false }}
        tableLayout="fixed"
      />
    </div>
  );
}; 