import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Section } from '@/components/domain'
import { Card as IconCard } from '@/components/domain/common/Icon.tsx'
import { images } from '@/assets/images'
import { locale } from '@/config'
import { Avatar, Dropdown } from 'antd'
import { memesTextColor, memesHover } from '@/components/domain/styles'
import { Link } from 'react-router-dom'
import { NAV } from '@/config/resources'
import MusicPlayer from '@/components/MusicPlayer'
import { useLocation } from 'react-router'
import { LoginModal } from '@/components/minidoge/user/login'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { clearUser } from '@/store/user'
import { useClerk } from '@clerk/clerk-react'
import { UserOutlined } from '@ant-design/icons'
import { Ellipsis } from 'antd-mobile'

const Header: React.FC = () => {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const location = useLocation()
  const user = useSelector((state: RootState) => state.user.user)
  const dispatch = useDispatch()
  const { signOut } = useClerk()

  const handleLogout = async () => {
    await signOut({ redirectUrl: '/memes' })
    dispatch(clearUser())
  }

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const userMenuItems = [
    {
      key: 'username',
      label: <Ellipsis content={user?.profile.username || user?.userId || user?.profile.email || ''} direction="middle" className='max-w-[140px]'/>,
      disabled: true,
    },
    {
      key: 'profile',
      label: (
        <div className="flex items-center gap-2">
          <UserOutlined />
          <span>{t('login.profile')}</span>
        </div>
      ),
      onClick: () => navigate(`/memes/${user?.userId}`),
    },
    {
      key: 'divider',
      type: 'divider' as const,
    },
    {
      key: 'logout',
      label: t('login.logout'),
      onClick: handleLogout,
    },
  ]

  return (
    <>
      <LoginModal open={open} onClose={() => setOpen(false)} />
      <header
        className={`fixed top-0 left-0 w-full z-50 ${
          isScrolled ? 'bg-black/10 backdrop-blur-sm' : ''
        }`}
      >
        <div className="p-3 sm:p-8 md:pt-8 md:px-4 flex gap-1 sm:gap-4 items-center w-full max-w-screen-xl mx-auto">
          <Section type="left" className={`${memesHover}`}>
            <Link
              to="/"
              className="grid grid-cols-[48px,auto] sm:grid-cols-[56px,auto] md:grid-cols-[64px,auto] items-center gap-3"
            >
              <picture>
                <source srcSet={images.logo} type="image/webp" />
                <img
                  src={images.logo}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full"
                  loading="eager"
                  alt="logo"
                />
              </picture>
              <span
                className={`${memesTextColor} sm:text-3xl md:text-4xl font-bold hidden lg:block orbitron`}
              >
                MINIDOGE
              </span>
            </Link>
          </Section>
          <div className="flex-1" />
          <div className="flex items-center gap-1 sm:gap-4">
            {!location.pathname.includes('/memes') && (
              <div className={memesHover}>
                <MusicPlayer />
              </div>
            )}

            {NAV.TWITTER && (
              <a href={NAV.TWITTER} target="_blank" className={memesHover}>
                <IconCard className="text-white" name="twitter" />
              </a>
            )}
            {NAV.TELEGRAM && (
              <a href={NAV.TELEGRAM} target="_blank" className={memesHover}>
                <IconCard className="text-white" name="telegram" />
              </a>
            )}
            {NAV.TIKTOK && (
              <a href={NAV.TIKTOK} target="_blank" className={memesHover}>
                <IconCard className="text-white" name="tiktok" />
              </a>
            )}
            <Dropdown
              placement="bottomRight"
              menu={{
                items: Object.entries(locale).map(([key, value]: any) => ({
                  key,
                  label: value.translation.language,
                  onClick: () => {
                    i18n.changeLanguage(key)
                  },
                })),
              }}
            >
              <a className="bg-white/10 border font-bold border-white/10 px-4 sm:px-5 rounded flex items-center justify-center min-w-[36px] min-h-[36px] sm:min-w-[48px] sm:min-h-[48px] text-current">
                <span>{t('lang')}</span>
              </a>
            </Dropdown>
            {location.pathname.includes('/memes') && (
              <>
                {user ? (
                  <Dropdown
                    menu={{ items: userMenuItems }}
                    placement="bottomRight"
                  >
                    <Avatar
                      size="large"
                      src={user.profile.avatar || '/logo.png'}
                      style={{
                        cursor: 'pointer',
                        minWidth: '48px',
                        minHeight: '48px',
                      }}
                    />
                  </Dropdown>
                ) : (
                  <Button
                    className="sm:!h-12 sm:!min-h-12"
                    onClick={() => setOpen(true)}
                  >
                    {t('login.login')}
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
