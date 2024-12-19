import React, { useState } from 'react';
import { Typography, Modal, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { QuestionCircleOutlined, FileProtectOutlined } from '@ant-design/icons';
import { MemberList } from '@/components/domain/sections/MemberList';
import { TableCard } from '@/components/domain/common/TableCard';
import mockData from '@/config/mockData/donations.json';

const { Title } = Typography;

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
      <div className="text-base font-medium mb-2">提案规则���</div>
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
      重要醒：请务必使用个人钱包地址参与捐赠，不要使用交易所地址。NFT空投与钱包地址绑定，后期无法更改。
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

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="flex justify-center mb-12">
        <h1 className="flex items-baseline justify-center gap-3">
          <span className="text-xl sm:text-2xl md:text-3xl text-[#FFAC03] font-['Striker']">
            DAO
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl text-[#FFAC03] font-['Striker']">
            治���
          </span>
        </h1>
      </div>
      
      <div className="flex items-center justify-between">
        <Title level={4} className="!mb-0 !text-white">
          {t("dao.title")}
        </Title>
        <div className="flex gap-4">
          <Button
            type="text"
            icon={<QuestionCircleOutlined />}
            onClick={() => setIsModalOpen(true)}
            className="text-[#FFAC03] hover:text-[#FFC10B]"
          >
            规则说明
          </Button>
          <Button
            type="text"
            icon={<FileProtectOutlined />}
            onClick={() => setIsGovernanceModalOpen(true)}
            className="text-[#FFAC03] hover:text-[#FFC10B]"
          >
            治理机制
          </Button>
        </div>
      </div>

      <TableCard>
        <MemberList members={mockData.members} />
      </TableCard>

      <Modal
        title="规则说明"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={600}
      >
        <RulesContent />
      </Modal>

      <Modal
        title="治理机制"
        open={isGovernanceModalOpen}
        onCancel={() => setIsGovernanceModalOpen(false)}
        footer={null}
        width={600}
      >
        <GovernanceContent />
      </Modal>
    </div>
  );
};

export default DaoPage; 