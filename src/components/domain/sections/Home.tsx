import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FOUNDATION_CONFIG } from '@/config/foundation.ts'
import { IMAGES } from '@/config/resources.ts'
import { Section } from '../common/Section.tsx'
import { Button } from '../common/Button.tsx'
import { Link } from '../common/Link.tsx'
import { AddressCard } from '../common/AddressCard.tsx'
import { memesTextColor, memesTitleSize } from '../styles.ts'
import { CopyModal } from '@/components/minidoge/copyModal/index.tsx'

export const Home = ({ }) => {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const home: any = t('home', { returnObjects: true })
  const publics: any = t('public', { returnObjects: true })

  return (
    <>
      <CopyModal open={isModalOpen} onClose={setIsModalOpen} />
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr),auto] gap-12 sm:gap-16 md:gap-6 xl:gap-12 items-center justify-items-center">
        <div className="flex flex-col w-full">
          <Section type="left">
            <p
              className={`${memesTitleSize} text-4xl sm:text-6xl md:text-4xl xl:text-7xl font-bold whitespace-pre-wrap break-all !leading-none`}
            >
              {home.title.map((text: any, index: number) => (
                <span
                  key={index}
                  className={
                    text.status
                      ? `${memesTextColor} ${
                          text.status ? 'text-[0.5em] opacity-80' : ''
                        }`
                      : ''
                  }
                >
                  {text.content}
                </span>
              ))}
            </p>
          </Section>
          <Section type="left">
            <p className="text-base sm:text-lg md:text-base xl:text-xl mt-4 sm:mt-4 xl:mt-8">
              {home.text.map((text: any, index: number) => (
                <span
                  key={index}
                  className={`${
                    text.highlight
                      ? memesTextColor + ' font-bold'
                      : text.special
                      ? 'text-[#FFC10B] font-semibold'
                      : ''
                  }`}
                >
                  {text.content}
                </span>
              ))}
            </p>
          </Section>

          <Section type="bottom">
            <div className="grid grid-cols-[auto,minmax(0,1fr)] gap-3 items-center mt-4 sm:mt-8 md:mt-8 xl:mt-16">
              <a href={home.buyUrl} target="_blank">
                <Button>{publics.buy}</Button>
              </a>
              <AddressCard
                address={FOUNDATION_CONFIG.tokens.MINIDOGE}
                onCopySuccess={() => setIsModalOpen(true)}
              />
            </div>
          </Section>
        </div>
         <Section type="right">
            <div className="md:w-[17rem] md:h-[17rem] lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] transition-transform duration-300 hover:scale-105">
              <Link>
                <img
                  src={IMAGES.SECTIONS.BANNER}
                  alt="Token Image"
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
          </Section>
      </div>
    </>
  )
}
