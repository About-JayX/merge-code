import { Button, Section } from '@/components/domain'
import { memesTextSize, memesTitleSize } from '@/components/domain/styles'
import Icon from '@/components/icon'
import MiniDogeCard from '@/components/minidoge/miniDogeCard'
import UserEdit from '@/components/minidoge/user/edit'
import { Publish } from '@/components/minidoge/user/publish'
import Segmented from '@/components/Segmented'
import { useSelector } from 'react-redux'
import { getUserProfileAPI, LoginResponse } from '@/api'

import {
  Alert,
  Avatar,
  Divider,
  Empty,
  Pagination,
  Select,
  Typography,
} from 'antd'
import { Ellipsis } from 'antd-mobile'
import { useState, useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
const { Paragraph } = Typography

interface UserContextProps {
  user: LoginResponse | null
  isCurrentUser: boolean
  hasWallet: boolean
}

// 用户信息
export const UserInfo = ({
  editOpens,
  onEdit,
  userContext,
}: {
  editOpens: boolean
  onEdit: (value: boolean) => void
  userContext: UserContextProps
}) => {
  const { t } = useTranslation()
  const [editOpen, setEditOpen] = useState(false)
  const [publishOpen, setPublishOpen] = useState(false)
  const { user, isCurrentUser, hasWallet } = userContext
  const params = useParams()
  const handleEdit = (value: boolean) => {
    setEditOpen(value)
    onEdit && onEdit(value)
  }
  const init = async () => {
    if (params.id) {
      const { id } = params
      const res = await getUserProfileAPI(id)
      console.log(res, 'res')
    }
  }
  useEffect(() => {
    init()
  }, [params])
  return (
    <>
      <UserEdit open={editOpens || editOpen} onClose={handleEdit} />
      <Publish open={publishOpen} onClose={setPublishOpen} />
      <Section className="grid grid-cols-[1fr_auto] flex-wrap items-center justify-between gap-4">
        <div className="grid grid-cols-[56px_1fr] sm:grid-cols-[96px_1fr] items-center gap-2 sm:gap-4 w-auto">
          <Avatar
            src="/logo.png"
            className="w-14 h-14 sm:w-24 sm:h-24 bg-white aspect-square"
          />
          <div className="flex flex-col gap-1">
            <span
              className={`${memesTitleSize} !text-xl sm:!text-2xl !font-bold uppercase flex items-center w-full`}
            >
              <Ellipsis content={t('memes.ownedBy')} />
              &nbsp;
              <Icon name="authenticate" className="text-xl sm:text-2xl" />
              &nbsp;
              <a>
                <Icon
                  name="twitter"
                  className="text-white text-sm sm:text-base"
                />
              </a>
              &nbsp;
              <a>
                <Icon
                  name="telegram"
                  className="text-white text-sm sm:text-base"
                />
              </a>
              {user && isCurrentUser && (
                <>
                  &nbsp;
                  <Icon
                    name="edit"
                    className="text-lg sm:text-xl ml-2"
                    onClick={() => setEditOpen(true)}
                  />
                </>
              )}
            </span>
            <span
              className={`${memesTextSize} !text-sm sm:!text-lg opacity-50`}
            >
              {hasWallet ? (
                <Paragraph
                  copyable={{
                    text: user!.profile.sol_wallet_address || '',
                  }}
                  className="grid grid-cols-[1fr_auto] items-center"
                >
                  <Ellipsis
                    content={user!.profile.sol_wallet_address || ''}
                    direction="middle"
                    className="w-full h-[24px] flex-1"
                  />
                </Paragraph>
              ) : user && isCurrentUser ? (
                '请绑定solana钱包'
              ) : (
                '--'
              )}
            </span>
          </div>
        </div>
        {/* 发布按钮 - 仅当前用户且已绑定钱包时显示 */}
        {isCurrentUser && hasWallet && (
          <Button
            onClick={() => setPublishOpen(true)}
            type="default"
            disabled={!hasWallet}
            size="small"
            className="rounded-full items-center flex justify-center xl:!max-w-36 sm:!w-auto !h-auto sm:!min-h-11  sm:!text-base"
          >
            <Icon name="publish" className="text-2xl sm:text-3xl" />
            &nbsp;{t('memes.publish')}
          </Button>
        )}
      </Section>
    </>
  )
}

// 访问浏览点赞量
export const ViewInfo = () => {
  const { t } = useTranslation()
  const InfoItem = ({
    iconName,
    label,
    value,
  }: {
    iconName: string
    label: string
    value: string
  }) => {
    return (
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 sm:mt-0">
        {iconName === 'view' ? (
          <img
            src="/logo.png"
            className="w-8 h-8 sm:w-12 sm:h-12 aspect-square"
          />
        ) : (
          <Icon
            name={iconName}
            className={`${
              iconName === 'praise'
                ? 'text-2xl sm:text-3xl opacity-50'
                : 'text-3xl sm:text-4xl'
            }`}
          />
        )}
        <div className="flex flex-col">
          <span
            className={`${memesTitleSize} text-xs sm:!text-sm !font-normal opacity-50`}
          >
            {label}
          </span>
          <span
            className={`${memesTitleSize} !text-base sm:!text-3xl -mt-[2px] sm:-mt-1`}
          >
            {value}
          </span>
        </div>
      </div>
    )
  }

  return (
    <Section className="flex flex-wrap gap-x-8 gap-y-4 sm:gap-16 -mt-4 sm:-mt-0">
      <InfoItem
        iconName="view"
        label={t('memes.income')}
        value={false ? '5.22 K' : '--'}
      />
      <InfoItem
        iconName="praise"
        label={t('memes.like')}
        value={false ? '5.22 K' : '--'}
      />
      <InfoItem
        iconName="views"
        label={t('memes.check')}
        value={false ? '5.22 K' : '--'}
      />
    </Section>
  )
}

// 列表
export const List = () => {
  const { t } = useTranslation()
  const memes: any = t('memes', { returnObjects: true })
  return (
    <div className="flex flex-col gap-4 sm:gap-4 md:gap-8 xl:gap-8 items-center -mt-0">
      {/* 操作区域 */}
      <Section
        type="top"
        className="flex gap-2 sm:gap-4 sm:flex-row justify-between w-full items-center"
      >
        <Segmented
          options={[
            { value: 'Hot', label: memes.hot },
            { value: 'New', label: memes.new },
          ]}
        />
        <div className="antd-rounded">
          <Select
            options={[
              {
                value: 'Hot',
                label: 'Hot',
              },
            ]}
            placeholder="Default sort"
            size="large"
            className="w-auto"
          />
        </div>
      </Section>
      {/* 列表 */}

      {false ? (
        <>
          <Section
            type="top"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full"
          >
            <MiniDogeCard
              type="mp3"
              audioSrc="/SoundHelix-Song-1.mp3"
              address="3M6uE2dMFzLTPgKZ1bpVgQTfgmYTQ6hMWojk4KMHMWtq"
              footerType={true ? 'delete' : 'download'}
            />
            <MiniDogeCard
              type="mp4"
              address="3M6uE2dMFzLTPgKZ1bpVgQTfgmYTQ6hMWojk4KMHMWtq"
              footerType={true ? 'delete' : 'download'}
            />
            <MiniDogeCard
              type="image"
              address="3M6uE2dMFzLTPgKZ1bpVgQTfgmYTQ6hMWojk4KMHMWtq"
              footerType={true ? 'delete' : 'download'}
            />
            <MiniDogeCard
              type="mp3"
              audioSrc=""
              address="3M6uE2dMFzLTPgKZ1bpVgQTfgmYTQ6hMWojk4KMHMWtq"
              footerType={true ? 'delete' : 'download'}
            />
          </Section>
          <Section type="top">
            <Pagination
              defaultCurrent={1}
              pageSize={20}
              total={100}
              showSizeChanger={false}
            />
          </Section>
        </>
      ) : (
        <Section type="top">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="" />
        </Section>
      )}
    </div>
  )
}

export default function MemesPage() {
  const { id } = useParams()
  const { t } = useTranslation()
  const [editOpen, setEditOpen] = useState(false)
  const user = useSelector((state: any) => state.user.user)

  // 用户上下文数据
  const userContext = useMemo<UserContextProps>(() => {
    const isCurrentUser =
      user && id ? id === (user.profile.username || user.userId) : false
    const hasWallet = Boolean(user?.profile.sol_wallet_address)

    return {
      user,
      isCurrentUser,
      hasWallet,
    }
  }, [user, id])

  // 判断是否需要显示绑定钱包提醒
  const showBindWalletAlert = useMemo(() => {
    return userContext.isCurrentUser && !userContext.hasWallet
  }, [userContext])

  return (
    <>
      <div className="flex flex-col gap-8 sm:gap-12 sm:mt-4">
        {showBindWalletAlert && (
          <Alert
            message={
              <div className="text-center text-base sm:text-lg p-2">
                <span className="">{t('memes.bindingWarningText')}</span>
                &nbsp;
                <a
                  className="text-current !text-[#FFAC03] !underline underline-offset-4"
                  onClick={() => setEditOpen(true)}
                >
                  {t('memes.bindingWarningText2')}
                </a>
              </div>
            }
            type="warning"
          />
        )}

        <UserInfo
          editOpens={editOpen}
          onEdit={setEditOpen}
          userContext={userContext}
        />
        <ViewInfo />
        <Section type="top">
          <Divider className="!my-0" />
        </Section>
        <List />
      </div>
    </>
  )
}
