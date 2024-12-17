import { Ellipsis } from "antd-mobile";
import { motion, useInView } from "motion/react";
import Icon from "../icon";
import { Fragment, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { copy } from "@/util";
import nav from "@/config/nav";
import contractAddress from "@/config/contractAddress";
import { Modal } from "antd";
import Tgs from "../tgs";
import { Tweet } from "react-tweet";
export const memesSize =
  "min-w-9 min-h-9 sm:min-w-12 sm:min-h-12 xl:min-w-14 xl:min-h-14";

export const memesTitleSize =
  "text-2xl sm:text-4xl xl:text-6xl font-bold orbitron";
export const memesSubTitleSize =
  "text-2xl sm:text-3xl xl:text-4xl font-normal orbitron";
export const memesTextSize =
  " text-sm sm:text-sm xl:text-base font-normal opacity-100";
export const memesBntColor =
  "bg-gradient-to-b from-[#FFAC03] to-[#FFC10B] text-black";
export const memesTextColor =
  "bg-gradient-to-b from-[#FFAC03] to-[#FFC10B] bg-clip-text text-transparent";
export const memesHover =
  "transition-all ease-in-out duration-300 hover:opacity-80 hover:scale-105 hover:shadow-lg";

export const Section = ({
  children,
  type = "top",
  className = "",
}: {
  type?: "top" | "left" | "right" | "bottom";
  children?: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref);

  const variants = {
    top: { opacity: 0, y: -50 },
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
    bottom: { opacity: 0, y: 50 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      className={className}
      ref={ref}
      initial={type}
      animate={isInView ? "visible" : type}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export const MemesIcon = ({
  className = "",
  style = {},
  name = "",
}: {
  className?: string;
  style?: React.CSSProperties;
  name?: string;
}) => {
  return (
    <div
      className={`${memesSize} bg-white/10 border border-white/10 rounded-full flex items-center justify-center ${className}`}
      style={style}
    >
      <Icon name={name} className="text-lg sm:text-xl" />
    </div>
  );
};

export const MemesBtn = ({
  children,
  className = "",
  type = "primary",
  style = {},
  onClick,
  ...props
}: {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  type?: "default" | "primary";
  [key: string]: any;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`${memesSize} rounded 
      px-3 font-bold text-xs sm:text-sm xl:text-xl sm:min-w-40 xl:min-w-48 ${
        type === "primary"
          ? memesBntColor
          : "border border-[#FFB004] text-[#FFB004]"
      } ${memesHover} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export const MemesCard = ({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <div className={` rounded-2xl bg-[#0F0F0F] p-6 ${memesHover} ${className}`}>
      {children}
    </div>
  );
};

export const MemesHome = ({ ...props }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const home: any = t("home", { returnObjects: true });
  const publics: any = t("public", { returnObjects: true });
  return (
    <Fragment>
      <Modal open={isModalOpen} centered footer closable={false}>
        <div className="flex flex-col items-center">
          {isModalOpen && (
            <Tgs
              name="success"
              className="text-[180px]"
              onChange={(value) => isModalOpen && setIsModalOpen(!value)}
            />
          )}

          <span className="text-2xl font-bold">
            {t("message.copy.success")}
          </span>
        </div>
      </Modal>
      <div className="grid  md:grid-cols-[1fr,250px] lg:grid-cols-[1fr,380px]  gap-12 sm:gap-16 md:gap-6 xl:gap-12 items-center justify-items-center sm:justify-between">
        <div className="flex flex-col w-full">
          {home.title.length >= 0 && (
            <Section type="left">
              <p
                className={`${memesTitleSize} text-4xl sm:text-6xl md:text-4xl xl:text-7xl font-bold whitespace-pre-wrap break-all`}
              >
                {home.title.map((text: any, index: number) => (
                  <span
                    key={index}
                    className={text.status ? `${memesTextColor}` : ""}
                  >
                    {text.content}
                  </span>
                ))}
              </p>
            </Section>
          )}
          {home.text && (
            <Section type="left">
              <p className="text-base sm:text-lg md:text-base xl:text-xl mt-4 text-[#a3a3a5]">
                {home.text}
              </p>
            </Section>
          )}

          <Section type="bottom">
            <div className="grid grid-cols-[auto,1fr] gap-4 sm:gap-8 md:gap-4 xl:gap-5 items-center mt-4 sm:mt-8 md:mt-8 xl:mt-16">
              {contractAddress && (
                <a href={home.buyUrl} target="_blank">
                  <MemesBtn>
                    {publics.buy}&nbsp;${String(props.ticker).toUpperCase()}
                  </MemesBtn>
                </a>
              )}
              <a
                className={`grid grid-cols-[auto,1fr] gap-4 items-center w-full ${memesHover}`}
                onClick={async () =>
                  await copy(contractAddress, () => setIsModalOpen(true))
                }
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
                    content={contractAddress}
                  />
                  <span className="text-xs md:text-base font-normal opacity-50 text-white">
                    {t("home.contractAddressText")}
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
                className="object-contain aspect-square w-full h-full z-10"
              />
            </div>
          </Section>
        )}
      </div>
    </Fragment>
  );
};

export const Section1 = ({ ...props }) => {
  const { t } = useTranslation();
  const section1: any = t("section1", { returnObjects: true });
  const Tweets = ({ id,className="",imageUrl="" }: { id: string,className?:string,imageUrl:string }) => {
    const [errorStatus, setErrorStatus] = useState<boolean>(false);
    return errorStatus ? (
      <img
        src={imageUrl}
        className={className}
      />
    ) : (
      <div data-theme="light" className={`light ${className}`}>
        <Tweet id={id} onError={() => setErrorStatus(true)}/>
      </div>
    );
  };
  return (
    <Fragment>
      <div className="flex flex-col gap-10">
        <div className="text-center flex flex-col gap-4 xl:gap-5">
          <Section type="top">
            <span className={`${memesTitleSize}`}>{section1?.title}</span>
          </Section>
          <Section type="top">
            <span className="text-base sm:text-xl xl:text-2xl font-bold opacity-60 leading-relaxed">
              {section1?.text}
            </span>
          </Section>
        </div>
        <Section type="top">
          <MemesCard {...props} className={`${memesHover}`}>
            <div className="grid  sm:grid-cols-[1fr,1fr] xl:grid-cols-[527px,1fr] gap-4 sm:gap-8 xl:gap-12">
              <Section type="left">
                <Tweets id="1865304483070169440" imageUrl={section1?.box.left.image} className="w-full xl:w-[527px]  xl:h-[695px] rounded-xl object-cover"/>
              </Section>

              <Section type="right">
                <div className="flex flex-col">
                  <span className={`${memesSubTitleSize}`}>
                    {section1?.box.right.title}
                  </span>
                  <span className={`${memesTextSize} mt-4 sm:mt-4 xl:mt-8`}>
                    {section1?.box.right.text}
                  </span>
                  {section1?.box.right.image && (
                    <Tweets id="1865305060307009884" imageUrl={section1?.box.right.image} className="w-full  mt-4 sm:mt-4 xl:mt-11 rounded-xl object-cover"/>
                  )}
                  {section1?.box.right.bntText && (
                    <a href={section1?.box.right.bntUrl} target="_blank">
                      <MemesBtn
                        className=" mt-4 sm:mt-4 xl:mt-14"
                        type="default"
                        {...props}
                      >
                        {section1?.box.right.bntText}
                      </MemesBtn>
                    </a>
                  )}
                </div>
              </Section>
            </div>
          </MemesCard>
        </Section>
      </div>
    </Fragment>
  );
};

export const Section2 = ({ ...props }) => {
  const { t } = useTranslation();
  const section2: any = t("section2", { returnObjects: true });
  return (
    <div className="grid sm:grid-cols-[1fr,1fr] xl:grid-cols-[1fr,493px] items-center gap-6 sm:gap-6 xl:gap-16">
      <Section type="left">
        <div className="flex flex-col">
          <span className={`${memesTitleSize} max-w-md`}>
            {section2?.title}
          </span>
          <span className={`${memesTextSize} mt-4 sm:mt-4 xl:mt-8 max-w-xl`}>
            {section2?.text}
          </span>
          {section2.bntText && (
            <a
              href={section2?.bntUtl}
              target="_blank"
              className={`mt-4 sm:mt-4 xl:mt-16 ${memesHover}`}
            >
              <MemesBtn {...props}>{section2?.bntText}</MemesBtn>
            </a>
          )}
        </div>
      </Section>
      <Section type="right">
        <div
          className={`aspect-square xl:w-[493px] xl:h-[493px] rounded-xl p-6 ${memesHover}`}
          style={{
            border: `1px solid ${props?.button?.background}`,
          }}
        >
          <img
            src={section2?.image}
            className="aspect-square  rounded-xl object-cover"
          />
        </div>
      </Section>
    </div>
  );
};

export const Section3 = () => {
  const { t } = useTranslation();
  const section3: any = t("section3", { returnObjects: true });
  return (
    <div className="flex flex-col gap-4 sm:gap-4 md:gap-8 xl:gap-16 items-center">
      <Section type="top">
        <div className={`${memesTitleSize}`}>
          {section3.title.length >= 0 && (
            <Section type="left">
              <div className="text-4xl sm:text-6xl md:text-4xl xl:text-7xl font-bold whitespace-pre-wrap break-all">
                {section3.title.map((text: any, index: number) => (
                  <span
                    key={index}
                    className={text.status ? `${memesTextColor}` : ""}
                  >
                    {text.content}
                  </span>
                ))}
              </div>
            </Section>
          )}
        </div>
      </Section>
      <Section type="top">
        <div className="w-full flex flex-col">
          {section3.data && (
            <Fragment>
              {/* 第一排：最多显示3个 */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 justify-center">
                {section3.data.slice(0, 3).map((item: any, index: number) => (
                  <div key={index} className={`aspect-square ${memesHover}`}>
                    <img
                      src={item}
                      alt={item}
                      className="h-full w-full object-cover aspect-square rounded-xl"
                    />
                  </div>
                ))}
              </div>

              {/* 第二排：从第4个开始，显示最多4个 */}
              {section3.data.length > 3 && (
                <div className="grid grid-cols-4 gap-3 sm:gap-4 justify-items-center mt-4">
                  {section3.data.slice(3).map((item: any, index: number) => (
                    <div key={index} className={`aspect-square ${memesHover}`}>
                      <img
                        src={item}
                        alt={item}
                        className="h-full w-full object-cover aspect-square rounded-xl"
                      />
                    </div>
                  ))}
                </div>
              )}
            </Fragment>
          )}
        </div>
      </Section>
    </div>
  );
};

export const HowToBuy = ({ ...props }) => {
  const { t } = useTranslation();
  const howToBuy: any = t("howToBuy", { returnObjects: true });
  const MemesCardItem = ({
    text = "",
    index = 0,
  }: {
    title?: string;
    text?: string;
    index?: number;
  }) => {
    return (
      <MemesCard {...props} className={`${memesHover}`}>
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
    );
  };
  return (
    <div className="flex flex-col items-center gap-14">
      <Section type="top">
        <span className={`${memesTitleSize}`}>{howToBuy.title}</span>
      </Section>
      {howToBuy.data?.length && (
        <Section type="top" className="w-full">
          <div className="grid gap-5 w-full">
            {howToBuy.data.map((item: any, index: number) => (
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
  );
};

export const About = () => {
  const { t } = useTranslation();
  const about: any = t("about", { returnObjects: true });
  return (
    <MemesCard
      className={`bg-gradient-to-r from-[#FFAF03] to-[#FF5900] shadow-[0px_0px_71px_2px_rgba(255,255,255,0.5)_inset] flex flex-col items-center text-center mt-24 xl:mt-28 text-white ${memesHover}`}
    >
      <div className="w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-gradient-to-l from-[#FFAE04]/15 to-[#FFC30C]/15 -mt-[calc(96px+32px)] sm:-mt-[calc(114px+48px)] p-6 flex justify-center items-center">
        <img
          src={"/logo.png"}
          className="aspect-square rounded-full object-cover w-full h-full"
        />
      </div>
      <span
        className={`${memesTitleSize} text-3xl sm:text-3xl md:text-3xl xl:text-4xl mt-4 sm:mt-5`}
      >
        {about?.title}
      </span>
      <span className={`${memesTextSize} mt-3 sm:mt-6`}>{about?.text}</span>
      {about?.bntText && (
        <a href={about?.bntUrl} className={memesHover} target="_blank">
          <MemesBtn className="mt-6 xl:mt-12 !bg-white from-transparent to-transparent !border-transparent !text-black">
            {about?.bntText}
          </MemesBtn>
        </a>
      )}
    </MemesCard>
  );
};

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6">
      <span className={`${memesTextSize} text-center w-full`}>
        {t("footer")}
      </span>
    </div>
  );
};
export default function Domain({ ...props }) {
  if (Object.keys(props).length === 0) return;
  return (
    <div
      className={`min-h-screen w-full flex flex-col pb-12 gap-8 sm:gap-8 xl:gap-0 items-center overflow-hidden relative text-content ${props.background?.pattern}`}
      style={{ color: props.text?.color }}
    >
      <div className="w-full h-screen fixed top-0 left-0 ">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${props.background?.custom})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
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
          <div className="grid grid-cols-[48px,auto] sm:grid-cols-[56px,auto] md:grid-cols-[64px,auto] items-center gap-3">
            <img
              src="/logo.png"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full"
            />
            <span
              className={`${memesTextColor} sm:text-3xl md:text-4xl font-bold hidden sm:block orbitron`}
            >
              MINIDOGE
            </span>
          </div>

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
          {nav.youtube_url && (
            <a href={nav.youtube_url} target="_blank" className={memesHover}>
              <MemesIcon className="text-white" name="youtube" />
            </a>
          )}
          {nav.instagram_url && (
            <a href={nav.instagram_url} target="_blank" className={memesHover}>
              <MemesIcon className="text-white" name="instagram" />
            </a>
          )}
        </header>
      </Section>
      <main className="px-3 sm:p-8 md:px-16 w-full max-w-screen-xl flex flex-col gap-12 sm:gap-24 md:gap-28 xl:gap-28 z-10">
        <MemesHome {...props} />
        <Section1 {...props} />
        <Section2 {...props} />
        <Section3 {...props} />
        <HowToBuy {...props} />
        <Section type="top">
          <About {...props} />
        </Section>
        <Section type="bottom">
          <Footer {...props} />
        </Section>
      </main>
    </div>
  );
}
