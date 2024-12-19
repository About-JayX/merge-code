import React from 'react';
import { useTranslation } from 'react-i18next';
import { StarrySky, MemesIcon, Section } from '@/components/domain';
import { images } from '@/assets/images';
import { locale } from '@/config';
import { Dropdown } from 'antd';
import { memesTextColor, memesHover } from '@/components/domain/styles';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  data: any;
}

const Layout: React.FC<LayoutProps> = ({ children, data }) => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nav = {
    twitter_url: 'https://twitter.com/MiniDOGEtoken',
    telegram_url: 'https://t.me/OfficialMiniDOGE',
    tiktok_url: 'https://www.tiktok.com/@minidoge_official'
  };

  return (
    <>
      <StarrySky />
      <header className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${isScrolled ? 'bg-black/10 backdrop-blur-sm' : ''}`}>
        <div className="p-3 sm:p-8 md:pt-8 md:px-16 flex gap-1 sm:gap-4 items-center w-full max-w-screen-xl mx-auto">
          <Section type="left" className={`${memesHover}`}>
            <Link to="/" className="grid grid-cols-[48px,auto] sm:grid-cols-[56px,auto] md:grid-cols-[64px,auto] items-center gap-3">
              <picture>
                <source srcSet={images.logo} type="image/webp" />
                <img
                  src={images.logo}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full"
                  loading="eager"
                  alt="logo"
                />
              </picture>
              <span className={`${memesTextColor} sm:text-3xl md:text-4xl font-bold hidden sm:block orbitron`}>
                MINIDOGE
              </span>
            </Link>
          </Section>
          <div className="flex-1" />
          {nav.twitter_url && (
            <a href={nav.twitter_url} target="_blank" className={memesHover}>
              <MemesIcon className="text-white" name="twitter" />
            </a>
          )}
          {nav.telegram_url && (
            <a href={nav.telegram_url} target="_blank" className={memesHover}>
              <MemesIcon className="text-white" name="telegram" />
            </a>
          )}
          {nav.tiktok_url && (
            <a href={nav.tiktok_url} target="_blank" className={memesHover}>
              <MemesIcon className="text-white" name="tiktok" />
            </a>
          )}
          <Dropdown
            placement="bottomRight"
            menu={{
              items: Object.entries(locale).map(([key, value]: any) => ({
                key,
                label: value.translation.language,
                onClick: () => {
                  i18n.changeLanguage(key);
                },
              })),
            }}
          >
            <a className="bg-white/10 border font-bold border-white/10 px-4 sm:px-5 rounded flex items-center justify-center min-w-[36px] min-h-[36px] sm:min-w-[48px] sm:min-h-[48px] text-current">
              <span>{t('lang')}</span>
            </a>
          </Dropdown>
        </div>
      </header>
      <div className="w-full h-[120px] sm:h-[160px] md:h-[180px]" />
      <main className="px-3 sm:p-8 md:px-16 w-full max-w-screen-xl mx-auto z-10">
        {children}
      </main>
    </>
  );
};

export default Layout; 