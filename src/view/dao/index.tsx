import React, { useState } from 'react'
import { Typography, Modal, App } from 'antd'
import { useTranslation } from 'react-i18next'
import { QuestionCircleOutlined, FileProtectOutlined } from '@ant-design/icons'
import { MemberList } from '@/components/domain/sections/MemberList'
import { TableCard } from '@/components/domain/common/TableCard'
import { FOUNDATION_CONFIG } from '@/config/foundation'
import { copy } from '@/util'
import Tgs from '@/components/tgs'
const { Title } = Typography

// 治理规则说明内容组件
const GovernanceContent: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      {/* 治理机制 */}
      <div>
        <div
          className="text-base font-medium mb-2"
          dangerouslySetInnerHTML={{ __html: t('dao.governanceMechanism') }}
        />
        <div className="grid gap-2 text-base opacity-80">
          <div dangerouslySetInnerHTML={{ __html: t('dao.governanceRule1') }} />
          <div dangerouslySetInnerHTML={{ __html: t('dao.governanceRule2') }} />
          <div dangerouslySetInnerHTML={{ __html: t('dao.governanceRule3') }} />
          <div dangerouslySetInnerHTML={{ __html: t('dao.governanceRule4') }} />
        </div>
      </div>

      {/* 提案规则 */}
      <div>
        <div
          className="text-base font-medium mb-2"
          dangerouslySetInnerHTML={{ __html: t('dao.proposalRules') }}
        />
        <div className="grid gap-2 text-base opacity-80">
          <div dangerouslySetInnerHTML={{ __html: t('dao.proposalRule1') }} />
          <div dangerouslySetInnerHTML={{ __html: t('dao.proposalRule2') }} />
          <div dangerouslySetInnerHTML={{ __html: t('dao.proposalRule3') }} />
          <div dangerouslySetInnerHTML={{ __html: t('dao.proposalRule4') }} />
        </div>
      </div>
    </div>
  )
}

// 将规则说明内容抽离为独立组件
const RulesContent: React.FC = () => {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { message } = App.useApp()

  const handleCopy = async () => {
    await copy(FOUNDATION_CONFIG.address, () => {
      setIsModalOpen(true)
    })
  }

  return (
    <>
      <Modal
        open={isModalOpen}
        centered
        footer={null}
        closable={false}
        width="auto"
      >
        <div className="flex flex-col items-center px-8 py-4">
          {isModalOpen && (
            <Tgs
              name="success"
              className="!w-24 !h-24 sm:!w-32 sm:!h-32 md:!w-40 md:!h-40"
              onChange={value => isModalOpen && setIsModalOpen(!value)}
            />
          )}
          <span className="text-lg sm:text-xl md:text-2xl font-bold mt-2">
            {t('message.copy.success')}
          </span>
        </div>
      </Modal>

      <div className="space-y-6">
        {/* 重要提醒 */}
        <div
          className="text-[#FFC10B] text-sm sm:text-base font-medium p-3 bg-[#FFC10B]/10 rounded-lg border border-[#FFC10B]/20"
          dangerouslySetInnerHTML={{ __html: t('dao.importantNotice') }}
        />

        {/* NFT空投规则 */}
        <div>
          <div
            className="text-base font-medium mb-1"
            dangerouslySetInnerHTML={{ __html: t('dao.nftAirdropRules') }}
          />
          <div className="grid gap-2 text-base opacity-80">
            <div dangerouslySetInnerHTML={{ __html: t('dao.nftAirdropRule1') }} />
            <div dangerouslySetInnerHTML={{ __html: t('dao.nftAirdropRule2') }} />
            <div dangerouslySetInnerHTML={{ __html: t('dao.nftAirdropRule3') }} />
          </div>
        </div>

        {/* 投票权规则 */}
        <div>
          <div
            className="text-base font-medium mb-1"
            dangerouslySetInnerHTML={{ __html: t('dao.votingRightsRules') }}
          />
          <div className="grid gap-2 text-base opacity-80">
            <div
              dangerouslySetInnerHTML={{ __html: t('dao.votingRightsRule1') }}
            />
            <div
              dangerouslySetInnerHTML={{ __html: t('dao.votingRightsRule2') }}
            />
            <div
              dangerouslySetInnerHTML={{ __html: t('dao.votingRightsRule3') }}
            />
          </div>
        </div>

        {/* 投票权示例 */}
        <div>
          <div
            className="text-base font-medium mb-1"
            dangerouslySetInnerHTML={{ __html: t('dao.votingRightsExamples') }}
          />
          <div className="grid gap-2 text-sm opacity-80">
            <div dangerouslySetInnerHTML={{ __html: t('dao.votingExample1') }} />
            <div dangerouslySetInnerHTML={{ __html: t('dao.votingExample2') }} />
            <div dangerouslySetInnerHTML={{ __html: t('dao.votingExample3') }} />
          </div>
        </div>

        {/* 参与流程 */}
        <div>
          <div
            className="text-base font-medium mb-2"
            dangerouslySetInnerHTML={{ __html: t('dao.participationProcess') }}
          />
          <div className="grid gap-2 text-base opacity-80">
            <div dangerouslySetInnerHTML={{ __html: t('dao.processStep1') }} />
            <div className="flex flex-col gap-2">
              <div dangerouslySetInnerHTML={{ __html: t('dao.processStep2') }} />
              <div className="flex justify-center">
                <span 
                  className="font-mono text-sm bg-white/5 px-4 py-1.5 rounded cursor-pointer hover:bg-white/10 transition-colors break-all text-center max-w-full"
                  onClick={handleCopy}
                >
                  {FOUNDATION_CONFIG.address}
                </span>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: t('dao.processStep3') }} />
            <div dangerouslySetInnerHTML={{ 
              __html: t('dao.processStep4', { 
                telegramAdminLinks: FOUNDATION_CONFIG.telegramAdmin.map(admin => 
                  `<a href="https://t.me/${admin.slice(1)}" target="_blank" class="text-[#FFAC03] hover:text-[#FFC10B] font-medium">${admin}</a>`
                ).join('; ')
              }) 
            }} />
          </div>
        </div>

        {/* 注意事项 */}
        <div>
          <div
            className="text-base font-medium mb-2"
            dangerouslySetInnerHTML={{ __html: t('dao.notes') }}
          />
          <div className="grid gap-2 text-base opacity-80">
            <div dangerouslySetInnerHTML={{ __html: t('dao.note1') }} />
            <div dangerouslySetInnerHTML={{ __html: t('dao.note2') }} />
            <div dangerouslySetInnerHTML={{ __html: t('dao.note3') }} />
            <div dangerouslySetInnerHTML={{ __html: t('dao.note4') }} />
          </div>
        </div>
      </div>
    </>
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
