import React, { useState, useEffect } from 'react';
import { Typography, Table, Modal, Button, Card, Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import { MemesCard } from '@/components/domain';
import { QuestionCircleOutlined, FileProtectOutlined } from '@ant-design/icons';
import { FOUNDATION_CONFIG } from '@/config/foundation';
import { Connection, PublicKey } from '@solana/web3.js';
import { formatDistance } from 'date-fns';
import { zhCN } from 'date-fns/locale';

const { Title } = Typography;

interface DonationData {
  signature: string;
  timestamp: Date | null;
  sender: string;
  donations: {
    type: 'USDT' | 'USDC' | 'SOL' | 'MINIDOGE';
    amount: number;
  }[];
  totalNftRights: number;
  votingRights: number;
  status: string;
}

interface MemberData {
  address: string;
  totalDonation: number;
  lastDonation: Date | null;
  donationCount: number;
  totalNftRights: number;
  votingRights: number;
}

// 治理规则说明内容组件
const GovernanceContent: React.FC = () => (
  <div className="space-y-6">
    {/* 治理机制 */}
    <div>
      <div className="text-base font-medium mb-2">治理机制：</div>
      <div className="grid gap-2 text-base opacity-80">
        <div>• 提案投票需总投票人数30%以上参与方为有效</div>
        <div>• 重大决策需总投票人数50%以上参与</div>
        <div>• 提案需获得2/3以上赞成票通过</div>
        <div>• 基金会核心团队占20%治理权重，社区投票占80%权重</div>
      </div>
    </div>

    {/* 提案规则 */}
    <div>
      <div className="text-base font-medium mb-2">提案规则：</div>
      <div className="grid gap-2 text-base opacity-80">
        <div>• 持有4个投票权可发起提案</div>
        <div>• 提案需3个不同投票权持有者联名</div>
        <div>• 每周最多进行2个提案投票</div>
        <div>• 常规投票为72小时</div>
      </div>
    </div>
  </div>
);

// 将规则说明内容抽离为独立组件
const RulesContent: React.FC = () => (
  <div className="space-y-6">
    {/* 重要提醒 */}
    <div className="text-[#FFC10B] text-base font-medium p-4 bg-[#FFC10B]/10 rounded-lg border border-[#FFC10B]/20">
      重要��醒：请务必使用个人钱包地址参与捐赠，不要使用交易所地址。NFT空投与钱包地址绑定，后期无法更改。
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
        <div>• 单个钱包地��最高可获得4票（1个基础 + 3个额外）</div>
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

    {/* 参与流程 */}
    <div>
      <div className="text-base font-medium mb-2">参与流程：</div>
      <div className="grid gap-2 text-base opacity-80">
        <div className="grid grid-cols-[auto,1fr] gap-2">
          <div>1.</div>
          <div>选择任意一种代币进行捐赠</div>
        </div>
        <div className="grid grid-cols-[auto,1fr] gap-2">
          <div>2.</div>
          <div>转账至基金会SOL钱包地址：<span className="font-mono bg-white/5 px-2 py-0.5 rounded">xxxxx</span></div>
        </div>
        <div className="grid grid-cols-[auto,1fr] gap-2">
          <div>3.</div>
          <div>保存转账记录截图</div>
        </div>
        <div className="grid grid-cols-[auto,1fr] gap-2">
          <div>4.</div>
          <div>联系电报管理员(<span className="font-mono">@xxxx</span>)提交转账凭证，验证后即可加入基金会群组</div>
        </div>
      </div>
    </div>

    {/* 注意事项 */}
    <div>
      <div className="text-base font-medium mb-2">注意事项：</div>
      <div className="grid gap-2 text-base opacity-80">
        <div>• 捐赠数量不设上限，但投票权有上限</div>
        <div>• 捐赠后将自动获得未来NFT空投资格</div>
        <div>• 具体空投时间将另行通知</div>
        <div>• 基金会保留对活动的最终解释权</div>
      </div>
    </div>
  </div>
);

const DaoPage: React.FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGovernanceModalOpen, setIsGovernanceModalOpen] = useState(false);
  const [donations, setDonations] = useState<DonationData[]>([]);
  const [members, setMembers] = useState<MemberData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDonationRecords();
  }, []);

  const fetchDonationRecords = async () => {
    setLoading(true);
    try {
      const connection = new Connection(process.env.REACT_APP_RPC_ENDPOINT || "https://api.mainnet-beta.solana.com");
      
      // 获取 SOL 转账记录
      const signatures = await connection.getSignaturesForAddress(
        new PublicKey(FOUNDATION_CONFIG.address),
        { limit: 100 }
      );

      const donationData = await Promise.all(
        signatures.map(async (sig) => {
          const tx = await connection.getTransaction(sig.signature);
          if (!tx?.meta) return null;
          
          // 计算 NFT 权益和投票权
          const solAmount = (tx.meta.postBalances[0] - tx.meta.preBalances[0]) / 1e9;
          const nftRights = Math.floor(solAmount / 0.1); // 0.1 SOL = 1 NFT
          const votingRights = Math.min(1 + Math.floor(nftRights / 5), 4); // 基础1票 + 每5个NFT额度1票，上限4票

          return {
            signature: sig.signature,
            timestamp: sig.blockTime ? new Date(sig.blockTime * 1000) : null,
            sender: tx.transaction.message.accountKeys[0].toString(),
            donations: [{
              type: 'SOL',
              amount: solAmount
            }],
            totalNftRights: nftRights,
            votingRights: votingRights,
            status: '已确认'
          };
        })
      );

      const validDonations = donationData.filter((d): d is DonationData => d !== null);

      // 更新成员统计
      const memberMap = new Map<string, MemberData>();
      validDonations.forEach((donation) => {
        if (!memberMap.has(donation.sender)) {
          memberMap.set(donation.sender, {
            address: donation.sender,
            totalDonation: 0,
            lastDonation: donation.timestamp,
            donationCount: 0,
            totalNftRights: 0,
            votingRights: 0
          });
        }
        const member = memberMap.get(donation.sender)!;
        member.totalDonation += donation.donations[0].amount;
        member.donationCount += 1;
        member.totalNftRights += donation.totalNftRights;
        member.votingRights = Math.max(member.votingRights, donation.votingRights);
        if (donation.timestamp && (!member.lastDonation || donation.timestamp > member.lastDonation)) {
          member.lastDonation = donation.timestamp;
        }
      });

      setDonations(validDonations);
      setMembers(Array.from(memberMap.values()));
    } catch (error) {
      console.error('Failed to fetch donation records:', error);
    }
    setLoading(false);
  };

  const donationColumns = [
    {
      title: '捐赠时间',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: (timestamp: Date) => timestamp ? 
        formatDistance(timestamp, new Date(), { addSuffix: true, locale: zhCN }) : 'Unknown',
    },
    {
      title: '钱包地址',
      dataIndex: 'sender',
      key: 'sender',
      render: (address: string) => (
        <a href={`https://solscan.io/account/${address}`} target="_blank" rel="noopener noreferrer">
          {`${address.slice(0, 4)}...${address.slice(-4)}`}
        </a>
      ),
    },
    {
      title: '捐赠详情',
      dataIndex: 'donations',
      key: 'donations',
      render: (donations: DonationData['donations']) => (
        <div className="flex flex-col gap-1">
          {donations.map((donation, index) => (
            <div key={index} className="text-sm">
              {donation.amount.toFixed(donation.type === 'SOL' ? 4 : 2)} {donation.type}
            </div>
          ))}
        </div>
      )
    },
    {
      title: 'NFT 空投',
      dataIndex: 'totalNftRights',
      key: 'totalNftRights',
      render: (rights: number) => `${rights} 个`,
    },
    {
      title: '投票权',
      dataIndex: 'votingRights',
      key: 'votingRights',
      render: (rights: number) => `${rights} 票`,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  const memberColumns = [
    {
      title: '成员地址',
      dataIndex: 'address',
      key: 'address',
      render: (address: string) => (
        <a href={`https://solscan.io/account/${address}`} target="_blank" rel="noopener noreferrer">
          {`${address.slice(0, 4)}...${address.slice(-4)}`}
        </a>
      ),
    },
    {
      title: '总捐赠额 (SOL)',
      dataIndex: 'totalDonation',
      key: 'totalDonation',
      render: (amount: number) => amount.toFixed(4),
      sorter: (a: any, b: any) => a.totalDonation - b.totalDonation,
    },
    {
      title: '捐赠次数',
      dataIndex: 'donationCount',
      key: 'donationCount',
      sorter: (a: any, b: any) => a.donationCount - b.donationCount,
    },
    {
      title: 'NFT 空投',
      dataIndex: 'totalNftRights',
      key: 'totalNftRights',
      render: (rights: number) => `${rights} 个`,
      sorter: (a: any, b: any) => a.totalNftRights - b.totalNftRights,
    },
    {
      title: '投票权',
      dataIndex: 'votingRights',
      key: 'votingRights',
      render: (rights: number) => `${rights} 票`,
      sorter: (a: any, b: any) => a.votingRights - b.votingRights,
    },
    {
      title: '最后捐赠',
      dataIndex: 'lastDonation',
      key: 'lastDonation',
      render: (timestamp: Date) => timestamp ? 
        formatDistance(timestamp, new Date(), { addSuffix: true, locale: zhCN }) : 'Unknown',
    },
  ];

  return (
    <div className="p-3 sm:p-8 md:px-16 flex flex-col gap-6">
      {/* 基金会标题和按钮 */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
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
        <Button
          type="text"
          icon={<FileProtectOutlined className="text-[#FFC10B]" />}
          onClick={() => setIsGovernanceModalOpen(true)}
          className="flex items-center gap-2 hover:!bg-[#FFC10B]/10"
        >
          <span className="text-[#FFC10B]">治理规则</span>
        </Button>
      </div>

      {/* 表格内容 */}
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="捐赠记录" key="1">
          <MemesCard>
            <Table 
              dataSource={donations} 
              columns={donationColumns} 
              loading={loading}
              rowKey="signature"
              pagination={{ 
                pageSize: 10,
                showSizeChanger: true,
                showTotal: (total) => `共 ${total} 条记录`,
              }}
              scroll={{ x: 'max-content' }}
            />
          </MemesCard>
        </Tabs.TabPane>
        
        <Tabs.TabPane tab="基金会成员" key="2">
          <MemesCard>
            <Table 
              dataSource={members} 
              columns={memberColumns} 
              loading={loading}
              rowKey="address"
              pagination={{ 
                pageSize: 10,
                showSizeChanger: true,
                showTotal: (total) => `共 ${total} 条记录`,
              }}
              scroll={{ x: 'max-content' }}
            />
          </MemesCard>
        </Tabs.TabPane>
      </Tabs>

      {/* Modals */}
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

      <Modal
        title="治理规则说明"
        open={isGovernanceModalOpen}
        onCancel={() => setIsGovernanceModalOpen(false)}
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
        <GovernanceContent />
      </Modal>
    </div>
  );
};

export default DaoPage; 