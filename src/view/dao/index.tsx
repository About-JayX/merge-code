import React, { useState } from 'react';
import { Typography, Table, Modal, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { MemesCard } from '@/components/domain';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;

interface DonationRecord {
  key: string;
  date: string;
  wallet: string;
  donations: {
    type: 'USDT' | 'USDC' | 'SOL' | 'MINIDOGE';
    amount: number;
  }[];
  totalNftRights: number;
  votingRights: number;
  status: string;
}

// 将规则说明内容抽离为独立组件
const RulesContent: React.FC = () => (
  <div className="space-y-6">
    {/* 重要提醒 */}
    <div className="text-[#FFC10B] text-base font-medium p-4 bg-[#FFC10B]/10 rounded-lg border border-[#FFC10B]/20">
      重要提醒：请务必使用个人钱包地址参与捐赠，不要使用交易所地址。NFT空投与钱包地址绑定，后期无法更改。
    </div>

    {/* NFT空投规则 */}
    <div>
      <div className="text-base font-medium mb-2">NFT空投规则：</div>
      <div className="grid gap-2 text-base opacity-80">
        <div className="grid grid-cols-[auto,1fr] gap-4 items-center">
          <div className="text-[#FFC10B] font-medium">【推荐】</div>
          <div>捐赠 20 USDT/USDC = 1 个 NFT 空投</div>
        </div>
        <div className="grid grid-cols-[auto,1fr] gap-4 items-center">
          <div className="w-[52px]"></div>
          <div>捐赠 0.1 SOL = 1 个 NFT 空投</div>
        </div>
        <div className="grid grid-cols-[auto,1fr] gap-4 items-center">
          <div className="w-[52px]"></div>
          <div>捐赠 10,000 MINIDOGE = 1 个 NFT 空投</div>
        </div>
      </div>
    </div>

    {/* 投票权规则 */}
    <div>
      <div className="text-base font-medium mb-2">投票权规则：</div>
      <div className="grid gap-2 text-base opacity-80">
        <div>• 基础投票权：完成任意数量捐赠即获得1个基础投票权</div>
        <div>• 额外投票权：每捐赠5个NFT额度可获得1个额外投票权</div>
        <div>• 单个钱包地址最高可获得4票（1个基础 + 3个额外）</div>
      </div>
    </div>

    {/* 投票权示例 */}
    <div>
      <div className="text-base font-medium mb-2">投票权示例：</div>
      <div className="grid gap-2 text-sm opacity-80">
        <div>• 捐赠2个NFT额度 = 1票（基础票）</div>
        <div>• 捐赠6个NFT额度 = 2票（1基础 + 1额外）</div>
        <div>• 捐赠16个NFT额度 = 4票（1基础 + 3额外，已达上限）</div>
      </div>
    </div>
  </div>
);

const DaoPage: React.FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 示例数据，实际应该从API获取
  const donationRecords: DonationRecord[] = [
    {
      key: '1',
      date: '2024-01-19 14:30',
      wallet: '8J6C...Mo2hu',
      donations: [
        { type: 'USDT', amount: 100 },
        { type: 'SOL', amount: 0.2 }
      ],
      totalNftRights: 7,
      votingRights: 2,
      status: '已确认'
    },
    {
      key: '2',
      date: '2024-01-19 15:45',
      wallet: '7K5D...Np3hv',
      donations: [
        { type: 'MINIDOGE', amount: 20000 },
        { type: 'USDC', amount: 40 }
      ],
      totalNftRights: 4,
      votingRights: 1,
      status: '已确认'
    }
  ];

  const columns = [
    {
      title: '时间',
      dataIndex: 'date',
      key: 'date',
      width: 160,
    },
    {
      title: '钱包地址',
      dataIndex: 'wallet',
      key: 'wallet',
      width: 120,
    },
    {
      title: '捐赠详情',
      dataIndex: 'donations',
      key: 'donations',
      width: 200,
      render: (donations: DonationRecord['donations']) => (
        <div className="flex flex-col gap-1">
          {donations.map((donation, index) => (
            <div key={index} className="text-sm">
              {donation.amount} {donation.type}
            </div>
          ))}
        </div>
      )
    },
    {
      title: 'NFT 空投',
      dataIndex: 'totalNftRights',
      key: 'totalNftRights',
      width: 120,
    },
    {
      title: '投票权',
      dataIndex: 'votingRights',
      key: 'votingRights',
      width: 80,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
    }
  ];

  return (
    <div className="p-3 sm:p-8 md:px-16 flex flex-col gap-6">
      {/* 基金会 - NFT 空投 / 投票权表格 */}
      <MemesCard>
        <div className="flex items-center gap-2 mb-4">
          <Title level={4} className="!text-lg sm:!text-xl !mb-0">
            基金会 - NFT 空投 / 投票权
          </Title>
          <Button
            type="text"
            icon={<QuestionCircleOutlined className="text-[#FFC10B]" />}
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center !w-8 !h-8 !p-0 hover:!bg-[#FFC10B]/10"
          />
        </div>
        <div className="overflow-x-auto">
          <Table
            dataSource={donationRecords}
            columns={columns}
            pagination={{
              defaultPageSize: 10,
              showSizeChanger: true,
              showTotal: (total) => `共 ${total} 条记录`,
            }}
            scroll={{ x: 'max-content' }}
            size="middle"
          />
        </div>
      </MemesCard>

      {/* 规则说明弹窗 */}
      <Modal
        title="捐赠与治理规则说明"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={600}
        centered
        className="!bg-[#0F0F0F]"
        styles={{
          content: {
            background: '#0F0F0F',
          },
          header: {
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            paddingBottom: 16,
          },
          body: {
            padding: '24px',
          },
          mask: {
            backdropFilter: 'blur(4px)',
            background: 'rgba(0, 0, 0, 0.6)',
          },
        }}
      >
        <RulesContent />
      </Modal>
    </div>
  );
};

export default DaoPage; 