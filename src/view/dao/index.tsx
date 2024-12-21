import React, { useEffect, useState } from 'react'
import { Typography, Modal, Button } from 'antd'
import { useTranslation } from 'react-i18next'
import { QuestionCircleOutlined, FileProtectOutlined } from '@ant-design/icons'
import { MemberList } from '@/components/domain/sections/MemberList'
import { TableCard } from '@/components/domain/common/TableCard'
import { getList } from '@/api'
const { Title } = Typography

// 治理规则说明内容组件
const GovernanceContent: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      {/* 治理机制 */}
      <div>
        <div className="text-base font-medium mb-2">
          {t('dao.governanceMechanism')}：
        </div>
        <div className="grid gap-2 text-base opacity-80">
          <div>• {t('dao.governanceRule1')}</div>
          <div>• {t('dao.governanceRule2')}</div>
          <div>• {t('dao.governanceRule3')}</div>
          <div>• {t('dao.governanceRule4')}</div>
        </div>
      </div>

      {/* 提案规则 */}
      <div>
        <div className="text-base font-medium mb-2">
          {t('dao.proposalRules')}：
        </div>
        <div className="grid gap-2 text-base opacity-80">
          <div>• {t('dao.proposalRule1')}</div>
          <div>• {t('dao.proposalRule2')}</div>
          <div>• {t('dao.proposalRule3')}</div>
          <div>• {t('dao.proposalRule4')}</div>
        </div>
      </div>
    </div>
  )
}

// 将规则说明内容抽离为独立组件
const RulesContent: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      {/* 重要提醒 */}
      <div className="text-[#FFC10B] text-sm sm:text-base font-medium p-3 bg-[#FFC10B]/10 rounded-lg border border-[#FFC10B]/20">
        {t('dao.importantNotice')}
      </div>

      {/* NFT空投规则 */}
      <div>
        <div className="text-base font-medium mb-1">
          {t('dao.nftAirdropRules')}：
        </div>
        <div className="grid gap-2 text-base opacity-80">
          <div className="grid grid-cols-[1fr,auto] gap-4 items-center">
            <div>{t('dao.nftAirdropRule1')}</div>
            <div className="text-[#FFC10B] font-medium whitespace-nowrap">
              【{t('dao.recommended')}】
            </div>
          </div>
          <div className="grid grid-cols-[1fr,auto] gap-4 items-center">
            <div>{t('dao.nftAirdropRule2')}</div>
            <div className="w-[52px]"></div>
          </div>
          <div className="grid grid-cols-[1fr,auto] gap-4 items-center">
            <div>{t('dao.nftAirdropRule3')}</div>
            <div className="w-[52px]"></div>
          </div>
        </div>
      </div>

      {/* 投票权规则 */}
      <div>
        <div className="text-base font-medium mb-1">
          {t('dao.votingRightsRules')}：
        </div>
        <div className="grid gap-2 text-base opacity-80">
          <div>• {t('dao.votingRightsRule1')}</div>
          <div>• {t('dao.votingRightsRule2')}</div>
          <div>• {t('dao.votingRightsRule3')}</div>
        </div>
      </div>

      {/* 投票权示例 */}
      <div>
        <div className="text-base font-medium mb-1">
          {t('dao.votingRightsExamples')}：
        </div>
        <div className="grid gap-2 text-sm opacity-80">
          <div>• {t('dao.votingExample1')}</div>
          <div>• {t('dao.votingExample2')}</div>
          <div>• {t('dao.votingExample3')}</div>
        </div>
      </div>

      {/* 参与流程 */}
      <div>
        <div className="text-base font-medium mb-2">
          {t('dao.participationProcess')}：
        </div>
        <div className="grid gap-2 text-base opacity-80">
          <div className="grid grid-cols-[auto,1fr] gap-2">
            <div>1.</div>
            <div>{t('dao.processStep1')}</div>
          </div>
          <div className="grid grid-cols-[auto,1fr] gap-2">
            <div>2.</div>
            <div>
              {t('dao.processStep2')}{' '}
              <span className="font-mono bg-white/5 px-2 py-0.5 rounded">
                xxxxx
              </span>
            </div>
          </div>
          <div className="grid grid-cols-[auto,1fr] gap-2">
            <div>3.</div>
            <div>{t('dao.processStep3')}</div>
          </div>
          <div className="grid grid-cols-[auto,1fr] gap-2">
            <div>4.</div>
            <div>
              {t('dao.processStep4')} (<span className="font-mono">@xxxx</span>){' '}
              {t('dao.processStep4Extra')}
            </div>
          </div>
        </div>
      </div>

      {/* 注意事项 */}
      <div>
        <div className="text-base font-medium mb-2">{t('dao.notes')}：</div>
        <div className="grid gap-2 text-base opacity-80">
          <div>• {t('dao.note1')}</div>
          <div>• {t('dao.note2')}</div>
          <div>• {t('dao.note3')}</div>
          <div>• {t('dao.note4')}</div>
        </div>
      </div>
    </div>
  )
}

const DaoPage: React.FC = () => {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isGovernanceModalOpen, setIsGovernanceModalOpen] = useState(false)

  return (
    <div className="container mx-auto sm:px-4 py-4 sm:py-8 space-y-4 sm:space-y-8">
      <div className="flex justify-center mb-4 sm:mb-12">
        <h1 className="flex items-baseline justify-center gap-3 text-xl sm:text-2xl md:text-3xl text-[#FFAC03]">
          <span className="font-['Striker']">{t('dao.daoTitle')}</span>
          <span className="text-[1.25em] font-['Striker']">
            {t('dao.governanceTitle')}
          </span>
        </h1>
      </div>

      <div className="grid sm:flex gap-2 sm:flex-wrap items-center justify-items-center sm:justify-between">
        <Title level={4} className="!mb-0 !text-white">
          {t('dao.title')}
        </Title>
        <div className="flex gap-6 sm:gap-8 text-[#FFAC03] hover:text-[#FFC10B] ">
          <a
            onClick={() => setIsModalOpen(true)}
            className="flex gap-1 underline decoration-dotted underline-offset-4"
          >
            <QuestionCircleOutlined className="-mb-1" />
            {t('dao.rulesButton')}
          </a>
          <a
            onClick={() => setIsGovernanceModalOpen(true)}
            className="flex gap-1 underline decoration-dotted underline-offset-4"
          >
            <FileProtectOutlined className="-mb-1" />
            {t('dao.governanceButton')}
          </a>
        </div>
      </div>

      <TableCard>
        <MemberList />
      </TableCard>

      <Modal
        title={
          <div className="text-lg sm:text-2xl xl:text-3xl font-medium text-center  text-[#FFAC03]">
            {t('dao.rulesTitle')}
          </div>
        }
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={600}
        className="dao-modal"
        centered
      >
        <RulesContent />
      </Modal>

      <Modal
        title={
          <div className="text-lg sm:text-2xl xl:text-3xl font-medium text-center  text-[#FFAC03]">
            {t('dao.modalGovernanceTitle')}
          </div>
        }
        open={isGovernanceModalOpen}
        onCancel={() => setIsGovernanceModalOpen(false)}
        footer={null}
        width={600}
        className="dao-modal"
        centered
      >
        <GovernanceContent />
      </Modal>
    </div>
  )
}

export default DaoPage
