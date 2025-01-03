import { memesTextSize, memesTitleSize } from '@/components/domain/styles'
import Icon from '@/components/icon'
import { Upload } from '@/components/upload'
import { Avatar, Button, Input, Modal } from 'antd'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import VerifyBindWallet from './verifyBindWallet'
import { useAppDispatch, useAppSelector } from '@/store'
import { bindWalletAPI, updateUserProfileAPI } from '@/api'
import { message } from 'antd'
import { useSession } from '@clerk/clerk-react'
import { setUser } from '@/store/user'
export const UserUpload = ({
  value,
  onChange,
  files,
  setFiles,
}: {
  value: string
  onChange: (value: string) => void
  files: File[]
  setFiles: (files: File[]) => void
}) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-2 w-full">
      <span className={`${memesTitleSize} !text-base !font-bold`}>
        {t('memes.avatar')}
      </span>
      <div className="w-full border border-white/10 border-dotted rounded-md p-4">
        <div className="grid grid-cols-[auto_1fr] items-center gap-2 sm:gap-4">
          <Upload onSuccess={urls => onChange(urls[0])}>
            <div className="w-24 h-24 sm:w-32 sm:h-32 cursor-pointer bg-white/10 aspect-square rounded-full flex items-center justify-center">
              {value ? (
                <Avatar
                  src={value}
                  className="w-full h-full aspect-square rounded-full"
                />
              ) : (
                <Icon
                  name="add"
                  className="text-2xl sm:text-3xl text-white/30"
                />
              )}
            </div>
          </Upload>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <span
                className={`${memesTextSize} !text-xs sm:!text-sm opacity-50`}
              >
                {t('memes.limitText.image')}
              </span>
              <span
                className={`${memesTextSize} !text-xs sm:!text-sm opacity-50`}
              >
                {t('memes.limitText.gif')}
              </span>
            </div>
            <Upload
              onSuccess={urls => onChange(urls[0])}
              setFiles={setFiles}
              files={files}
            >
              <Button
                type="default"
                className="!min-h-8 !max-w-28 !min-w-28 !text-xs sm:!text-sm"
              >
                {t('memes.selectFile')}
              </Button>
            </Upload>
          </div>
        </div>
      </div>
    </div>
  )
}

const ItemBox = ({
  children,
  title,
  text,
  className,
}: {
  children?: React.ReactNode
  title: string
  text: string
  className?: string
}) => {
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      <span className={`${memesTitleSize} !text-sm sm:!text-base !font-bold`}>
        {title}
      </span>
      {children}
      <span
        className={`${memesTextSize} !text-xs sm:!text-sm opacity-50 -mt-1`}
      >
        {text}
      </span>
    </div>
  )
}

export default function UserEdit({
  open = false,
  onClose,
}: {
  open?: boolean
  onClose: (value: boolean) => void
}) {
  const { t } = useTranslation()
  const [verify, setVerify] = useState(false)
  const [loading, setLoading] = useState(false)
  const [bindWalletOpen, setBindWalletOpen] = useState(false)
  const { user } = useAppSelector(state => state.user)
  const [wallAddress, setWallAddress] = useState<string>('')
  const [telegram, setTelegram] = useState<string>('')
  const [x, setX] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [avatar, setAvatar] = useState<string>('')
  const [files, setFiles] = useState<File[]>([])
  const { session } = useSession()
  const dispatch = useAppDispatch()

  const bindWallet = async () => {
    try {
      setVerify(false)
      setLoading(true)
      const token = (await session?.getToken()) || ''
      const result = await bindWalletAPI({ publicKey: wallAddress }, token)
      if (!result.success) {
        throw new Error('绑定钱包失败')
      }
      dispatch(
        setUser({
          ...user,
          profile: { ...user?.profile, sol_wallet_address: wallAddress },
        })
      )
      message.success('绑定钱包成功')
    } catch (error) {
      message.error('绑定钱包失败')
    }
    setVerify(true)
    setLoading(false)
  }

  const updateUserProfile = async () => {
    const token = (await session?.getToken()) || ''
    const result = await updateUserProfileAPI(
      { telegram, x, username, file: files[0] },
      token
    )
    if (result.success) {
      dispatch(
        setUser({ ...user, profile: { ...user?.profile, ...result.result } })
      )
      onClose(false)
      message.success('更新用户信息成功')
    } else {
      message.error('更新用户信息失败')
    }
  }

  useEffect(() => {
    setWallAddress(user?.profile.sol_wallet_address || '')
    setTelegram(user?.profile.telegram || '')
    setX(user?.profile.x || '')
    setUsername(user?.profile.username || '')
    setAvatar(user?.profile.avatar || '')
  }, [user])

  return (
    <>
      <VerifyBindWallet
        open={bindWalletOpen}
        address={wallAddress}
        loading={loading}
        onClose={setBindWalletOpen}
        onChange={bindWallet}
      />
      <Modal
        open={open}
        onCancel={() => onClose && onClose(!open)}
        footer={null}
        maskClosable={false}
        centered
      >
        <div className="flex flex-col items-center py-4 gap-3 sm:gap-5 mt-4">
          <UserUpload
            value={avatar}
            onChange={setAvatar}
            files={files}
            setFiles={setFiles}
          />
          <ItemBox title={t('memes.userName')} text={t('memes.userNameTip')}>
            <Input
              placeholder={t('memes.userNamePlaceholder')}
              value={username}
              onChange={e => setUsername(e.target.value)}
              size="large"
            />
          </ItemBox>
          <ItemBox title={t('memes.SOLWalletAddress')} text="">
            <div className="flex items-center gap-1">
              <Input
                readOnly={!!wallAddress}
                value={wallAddress}
                onChange={e => setWallAddress(e.target.value)}
                placeholder={t('memes.SOLWalletAddressPlaceholder')}
                size="large"
              />
              &nbsp;
              <Button
                type="primary"
                size="large"
                loading={loading}
                disabled={!!wallAddress}
                className="aspect-square"
                onClick={() => {
                  setBindWalletOpen(true)
                }}
              >
                {loading ? '' : t('memes.verify')}
              </Button>
            </div>
          </ItemBox>
          <ItemBox title={t('memes.addLink')} text="">
            <div className="flex flex-col items-center gap-2">
              <Input
                value={telegram}
                onChange={e => setTelegram(e.target.value)}
                addonBefore={<Icon name="telegram" />}
                placeholder={t('memes.telegramPlaceholder')}
                size="large"
              />
              <Input
                value={x}
                onChange={e => setX(e.target.value)}
                addonBefore={<Icon name="twitter" />}
                placeholder={t('memes.twitterPlaceholder')}
                size="large"
              />
            </div>
          </ItemBox>
          <Button
            type="primary"
            size="large"
            className="w-full"
            onClick={updateUserProfile}
          >
            {t('memes.submit')}
          </Button>
        </div>
      </Modal>
    </>
  )
}
