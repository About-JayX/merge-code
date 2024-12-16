import { Ellipsis } from 'antd-mobile'
import { motion, useInView } from 'motion/react'
import Icon from '../icon'
import { Fragment, useRef } from 'react'
import { copy } from '@/util'

export const memesSize =
  'min-w-9 min-h-9 sm:min-w-12 sm:min-h-12 xl:min-w-14 xl:min-h-14'

export const memesTitleSize = 'text-2xl sm:text-4xl xl:text-6xl font-bold'
export const memesSubTitleSize = ' text-2xl sm:text-3 xl:text-4xl font-normal'
export const memesTextSize =
  ' text-sm sm:text-sm xl:text-base font-normal opacity-60'
export const memesTextColor =
  'bg-gradient-to-b from-[#FFAC03] to-[#FFC10B] bg-clip-text text-transparent'

export const Section = ({
  children,
  type = 'top',
  className = '',
}: {
  type?: 'top' | 'left' | 'right' | 'bottom'
  children?: React.ReactNode
  className?: string
}) => {
  const ref = useRef(null)

  const isInView = useInView(ref)

  const variants = {
    top: { opacity: 0, y: -50 },
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
    bottom: { opacity: 0, y: 50 },
    visible: { opacity: 1, x: 0, y: 0 },
  }

  return (
    <motion.div
      className={className}
      ref={ref}
      initial={type}
      animate={isInView ? 'visible' : type}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export const MemesIcon = ({
  className = '',
  style = {},
  name = '',
}: {
  className?: string
  style?: React.CSSProperties
  name?: string
}) => {
  return (
    <div
      className={`${memesSize} bg-white/10 border border-white/10 rounded-full flex items-center justify-center ${className}`}
      style={style}
    >
      <Icon name={name} className="text-lg sm:text-xl" />
    </div>
  )
}

export const MemesBtn = ({
  children,
  className = '',
  type = 'primary',
  style = {},
  onClick,
  ...props
}: {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  type?: 'default' | 'primary'
  [key: string]: any
  onClick?: () => void
}) => {
  const bntStyle = {
    ...style,
    background: type === 'primary' ? props.button?.background : '',
    color: type === 'primary' ? props.button?.text : props.button?.background,
    border: `1px solid ${props.button?.background}`,
  }
  return (
    <button
      style={{ ...bntStyle }}
      className={`${memesSize} rounded 
      px-3 font-bold text-xs sm:text-sm xl:text-xl sm:min-w-40 xl:min-w-48 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export const MemesCard = ({
  className = '',
  children,
  ...props
}: {
  className?: string
  children?: React.ReactNode
  [key: string]: any
}) => {
  return (
    <div
      className={` rounded-2xl p-6 ${className}`}
      style={{ background: props.card?.background }}
    >
      {children}
    </div>
  )
}

export const MemesHome = ({ ...props }) => {
  return (
    <div className="grid  md:grid-cols-[1fr,260px] xl:grid-cols-[1fr,384px] gap-12 sm:gap-16 md:gap-12 xl:gap-28 items-center justify-items-center sm:justify-between">
      <div className="flex flex-col w-full">
        {props.name && (
          <Section type="left">
            <p className="text-4xl sm:text-6xl md:text-4xl xl:text-7xl font-bold whitespace-pre-wrap break-all">
              {String(props.name).toUpperCase()}
            </p>
          </Section>
        )}
        {props.description && (
          <Section type="left">
            <p className="text-base sm:text-lg md:text-base xl:text-xl mt-4 text-[#a3a3a5]">
              {props.description}
            </p>
          </Section>
        )}

        <Section type="bottom">
          <div className="grid grid-cols-[auto,1fr] gap-4 sm:gap-8 md:gap-4 xl:gap-5 items-center mt-4 sm:mt-8 md:mt-8 xl:mt-16">
            {props.contract_address && (
              <a
                href={`https://raydium.io/swap/?inputMint=sol&outputMint=${props.contract_address}`}
                target="_blank"
              >
                <MemesBtn {...props}>
                  BUY&nbsp;${String(props.ticker).toUpperCase()}
                </MemesBtn>
              </a>
            )}
            <a
              className="grid grid-cols-[auto,1fr] gap-4 items-center w-full"
              onClick={async () => await copy(props.contract_address)}
            >
              <div className="p-[6px] relative rounded-full">
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-full -z-10 opacity-15"
                  style={{
                    background: props.button?.background,
                  }}
                />
                <MemesIcon
                  name="copy"
                  className=" shadow-[0px_0px_8px_4px_rgba(0,0,0,0.25)_inset]  min-w-[calc(56px-6px)] min-h-[calc(56px-6px)]"
                  style={{
                    background: props.button?.background,
                    color: props.button?.text,
                  }}
                />
              </div>
              <div className="flex flex-col break-all">
                <Ellipsis
                  className="text-base md:text-2xl font-normal text-white"
                  direction="middle"
                  content={props.contract_address}
                />
                <span className="text-xs md:text-base font-normal opacity-50 text-white">
                  CA
                </span>
              </div>
            </a>
          </div>
        </Section>
      </div>
      {props.banner_url && (
        <Section type="right">
          <div className="sm:w-[22rem] sm:h-[22rem] xl:w-[26rem] xl:h-[26rem] md:w-full md:h-full">
            <img
              src={props.banner_url}
              alt="Token Image"
              className="object-cover aspect-square sm:w-[22rem] sm:h-[22rem] xl:w-[26rem] xl:h-[26rem]  z-10"
            />
          </div>
        </Section>
      )}
    </div>
  )
}

export const Section1 = ({ ...props }) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="text-center flex flex-col gap-4 xl:gap-5">
        <Section type="top">
          <span className={`${memesTitleSize}`}>{props?.section1?.title}</span>
        </Section>
        <Section type="top">
          <span className={`${memesTextSize}`}>{props?.section1?.text}</span>
        </Section>
      </div>
      <Section type="top">
        <MemesCard {...props}>
          <div className="grid  sm:grid-cols-[1fr,1fr] xl:grid-cols-[527px,1fr] gap-4 sm:gap-8 xl:gap-12">
            <Section type="left">
              <img
                src={props?.section1?.box.left.image}
                className="w-full xl:w-[527px] h-[90vw] sm:h-[60vw] xl:h-[695px] rounded-xl object-cover"
              />
            </Section>

            <Section type="right">
              <div className="flex flex-col">
                <span className={`${memesSubTitleSize}`}>
                  {props?.section1?.box.right.title}
                </span>
                <span className={`${memesTextSize} mt-4 sm:mt-4 xl:mt-8`}>
                  {props?.section1?.box.right.text}
                </span>
                {props?.section1?.box.right.image && (
                  <img
                    src={props?.section1?.box.right.image}
                    className="w-full h-[40vw] sm:h-[22vw] xl:h-[262px] mt-4 sm:mt-4 xl:mt-11 rounded-xl object-cover"
                  />
                )}
                {props?.section1?.box.right.bntText && (
                  <a href={props?.section1?.box.right.bntUrl} target="_blank">
                    <MemesBtn
                      className=" mt-4 sm:mt-4 xl:mt-14"
                      type="default"
                      {...props}
                    >
                      {props?.section1?.box.right.bntText}
                    </MemesBtn>
                  </a>
                )}
              </div>
            </Section>
          </div>
        </MemesCard>
      </Section>
    </div>
  )
}

export const Section2 = ({ ...props }) => {
  return (
    <div className="grid sm:grid-cols-[1fr,1fr] xl:grid-cols-[1fr,493px] items-center gap-6 sm:gap-6 xl:gap-16">
      <Section type="left">
        <div className="flex flex-col">
          <span className={`${memesTitleSize} max-w-md`}>
            {props?.section2?.title}
          </span>
          <span className={`${memesTextSize} mt-4 sm:mt-4 xl:mt-8 max-w-xl`}>
            {props?.section2?.text}
          </span>
          {props?.section2?.bntText && (
            <a
              href={props?.section2?.bntUtl}
              target="_blank"
              className="mt-4 sm:mt-4 xl:mt-16"
            >
              <MemesBtn {...props}>{props?.section2?.bntText}</MemesBtn>
            </a>
          )}
        </div>
      </Section>
      <Section type="right">
        <div
          className="aspect-square xl:w-[493px] xl:h-[493px] rounded-xl p-6"
          style={{
            border: `1px solid ${props?.button?.background}`,
          }}
        >
          <img
            src={props?.section2?.image}
            className="aspect-square  rounded-xl object-cover"
          />
        </div>
      </Section>
    </div>
  )
}

export const Section3 = ({ ...props }) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-4 md:gap-8 xl:gap-16 items-center">
      <Section type="top">
        <p className={`${memesTitleSize}`}>
          <span className={`${memesTextColor}`}>Professional</span> team
        </p>
      </Section>
      <Section type="top">
        <div className="w-full flex flex-col">
          {props.section3 && (
            <Fragment>
              {/* 第一排：最多显示3个 */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 justify-center">
                {props.section3.slice(0, 3).map((item: any, index: number) => (
                  <img
                    key={index}
                    src={item}
                    alt={item}
                    className="h-full w-full object-cover aspect-square rounded-xl"
                  />
                ))}
              </div>

              {/* 第二排：从第4个开始，显示最多4个 */}
              {props.section3.length > 3 && (
                <div className="grid grid-cols-4 gap-3 sm:gap-4 justify-items-center mt-4">
                  {props.section3.slice(3).map((item: any, index: number) => (
                    <img
                      key={index}
                      src={item}
                      alt={item}
                      className="h-full w-full object-cover aspect-square rounded-xl"
                    />
                  ))}
                </div>
              )}
            </Fragment>
          )}
        </div>
      </Section>
    </div>
  )
}

export const HowToBuy = ({ ...props }) => {
  const MemesCardItem = ({
    text = '',
    index = 0,
  }: {
    title?: string
    text?: string
    index?: number
  }) => {
    return (
      <MemesCard {...props}>
        <div className="flex flex-col gap-4 sm:gap-6 xl:gap-7">
          <div className="grid grid-cols-[70px,1fr] xl:grid-cols-[83px,1fr] gap-4 sm:gap-6 xl:gap-8 items-center">
            <div className="aspect-square p-[6px] bg-white/20 rounded-2xl">
              <Icon
                name={`howToBuy/${index + 1}`}
                className="aspect-square rounded-xl w-full h-full object-cover"
              />
            </div>
            <span
              className={`text-2xl xl:text-3xl font-normal ${memesTextColor}`}
            >{`Step ${index + 1}`}</span>
          </div>
          <span
            className={`${memesTextSize} !text-base xl:!text-2xl font-normal`}
          >
            {text}
          </span>
        </div>
      </MemesCard>
    )
  }
  return (
    <div className="flex flex-col items-center gap-14">
      <Section type="top">
        <span className={`${memesTitleSize}`}>How to buy?</span>
      </Section>
      {props?.roadmap?.length && (
        <Section type="top" className="w-full">
          <div className="grid gap-5 w-full">
            {props.roadmap.map((item: any, index: number) => (
              <MemesCardItem
                key={index}
                title={item.title}
                text={item.text}
                index={index}
              />
            ))}
          </div>
        </Section>
      )}
    </div>
  )
}

export const About = ({ ...props }) => {
  return (
    <MemesCard className="bg-gradient-to-r from-[#FFAF03] to-[#FF5900] shadow-[0px_0px_71px_2px_rgba(255,255,255,0.5)_inset] flex flex-col items-center text-center mt-24 xl:mt-28 text-white">
      <div className="w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-gradient-to-l from-[#FFAE04]/15 to-[#FFC30C]/15 -mt-[calc(96px+32px)] sm:-mt-[calc(114px+48px)] p-6 flex justify-center items-center">
        <img
          src={props.logo_url}
          className="aspect-square rounded-full object-cover w-full h-full"
        />
      </div>
      <span
        className={`${memesTitleSize} text-3xl sm:text-3xl md:text-3xl xl:text-4xl mt-4 sm:mt-5`}
      >
        {props?.about?.title}
      </span>
      <span className={`${memesTextSize} mt-3 sm:mt-6 sm:max-w-96`}>
        {props?.about?.text}
      </span>
      {props?.about?.bntText && (
        <a href={props?.about?.bntUrl}>
          <MemesBtn className="mt-6 xl:mt-12 !bg-white from-transparent to-transparent !border-transparent !text-black">
            {props?.about?.bntText}
          </MemesBtn>
        </a>
      )}
    </MemesCard>
  )
}
export default function Domain({ ...props }) {
  if (Object.keys(props).length === 0) return
  return (
    <div
      className={`min-h-screen w-full flex flex-col pb-12 gap-8 sm:gap-8 xl:gap-24  items-center transition-all ease-in-out duration-300 overflow-hidden relative ${props.background?.pattern}`}
      style={{ color: props.text?.color }}
    >
      <div className="w-full h-screen fixed top-0 left-0 ">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${props.background?.custom})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: props.background?.color,
        }}
      />
      <Section className="w-full flex justify-center z-10">
        <header className="p-3 sm:p-8 md:pt-8 md:px-16 flex gap-1 sm:gap-4 items-center w-full max-w-screen-xl">
          {props.logo_url && (
            <img
              src={props.logo_url}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full"
            />
          )}

          <div className="flex-1" />
          {props.twitter_url && (
            <a href={props.twitter_url} target="_blank">
              <MemesIcon className="text-white" name="twitter" />
            </a>
          )}
          {props.telegram_url && (
            <a href={props.telegram_url} target="_blank">
              <MemesIcon className="text-white" name="telegram" />
            </a>
          )}
          {props.dexscreener_url && (
            <a href={props.dexscreener_url} target="_blank">
              <MemesIcon name="dexscreener" />
            </a>
          )}
          {props.pump_url && (
            <a href={props.pump_url} target="_blank">
              <MemesIcon name="pump" />
            </a>
          )}
          {props.contract_address && (
            <a
              href={`https://raydium.io/swap/?inputMint=sol&outputMint=${props.contract_address}`}
              target="_blank"
            >
              <MemesBtn {...props}>
                BUY&nbsp;${String(props.ticker).toUpperCase()}
              </MemesBtn>
            </a>
          )}
        </header>
      </Section>
      <main className="px-3 sm:p-8 md:px-16 w-full max-w-screen-xl flex flex-col gap-12 sm:gap-24 md:gap-28 xl:gap-48 z-10">
        <MemesHome {...props} />
        <Section1 {...props} />
        <Section2 {...props} />
        <Section3 {...props} />
        <HowToBuy {...props} />
        <Section type="bottom">
          <About {...props} />
        </Section>
      </main>
    </div>
  )
}
