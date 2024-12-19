import { Ellipsis } from "antd-mobile";
import { motion, useInView } from "motion/react";
import Icon from "../icon";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FOUNDATION_CONFIG } from "@/config/foundation";
import { Modal } from "antd";
import Tgs from "../tgs";
import { copy } from "@/util";
import FoundationBalance, {
  MinidogeAddress,
  MinidogeCopy,
} from "./FoundationBalance";
import { IMAGES } from "@/config/resources";
import {
  memesSize,
  memesTitleSize,
  memesTextSize,
  memesBntColor,
  memesTextColor,
  memesHover,
} from "./styles";
import { pageSwitch } from "@/config/pageSwitch";
import Exchange from "./exchange";

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
  ...props
}: {
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={`${memesSize} bg-white/10 border border-white/10 rounded-full flex items-center justify-center ${className}`}
      style={style}
      {...props}
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

export const ImageLink = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <a
    href="https://t.me/MINIDOGE_MEMES_RAIDS"
    target="_blank"
    rel="noopener noreferrer"
    className={`cursor-pointer ${className}`}
  >
    {children}
  </a>
);

export const MemesHome = ({ ...props }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const home: any = t("home", { returnObjects: true });
  const publics: any = t("public", { returnObjects: true });

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
              onChange={(value) => isModalOpen && setIsModalOpen(!value)}
            />
          )}
          <span className="text-lg sm:text-xl md:text-2xl font-bold mt-2">
            {t("message.copy.success")}
          </span>
        </div>
      </Modal>
      <div className="grid  md:grid-cols-[1fr,250px] lg:grid-cols-[1fr,380px]  gap-12 sm:gap-16 md:gap-6 xl:gap-12 items-center justify-items-center sm:justify-between">
        <div className="flex flex-col w-full">
          <Section type="left">
            <p
              className={`${memesTitleSize} text-4xl sm:text-6xl md:text-4xl xl:text-7xl font-bold whitespace-pre-wrap break-all`}
            >
              {home.title.map((text: any, index: number) => (
                <span
                  key={index}
                  style={
                    text.status ? { fontSize: "50%", opacity: 0.8 } : undefined
                  }
                  className={text.status ? memesTextColor : ""}
                >
                  {text.content}
                </span>
              ))}
            </p>
          </Section>
          <Section type="left">
            <p
              className={`text-base sm:text-lg md:text-base xl:text-xl mt-4 sm:mt-4 xl:mt-8`}
            >
              {home.text.map((text: any, index: number) => (
                <span
                  key={index}
                  className={`${
                    text.highlight
                      ? memesTextColor + " font-bold"
                      : text.special
                      ? "text-[#FFC10B] font-semibold"
                      : ""
                  }`}
                >
                  {text.content}
                </span>
              ))}
            </p>
          </Section>

          <Section type="bottom">
            <div className="grid grid-cols-[auto,1fr] gap-3 sm:gap-8 md:gap-4 xl:gap-5 items-center mt-4 sm:mt-8 md:mt-8 xl:mt-16">
              <a href={home.buyUrl} target="_blank">
                <MemesBtn>{publics.buy}</MemesBtn>
              </a>
              <div className="grid grid-cols-[auto,1fr] gap-3 items-center w-full">
                <MinidogeCopy
                  {...props}
                  onClick={async () =>
                    await copy(FOUNDATION_CONFIG.tokens.MINIDOGE, () =>
                      setIsModalOpen(true)
                    )
                  }
                />
                <div className="flex flex-col break-all">
                  <MinidogeAddress
                    className="w-full"
                    onClick={async () =>
                      await copy(FOUNDATION_CONFIG.tokens.MINIDOGE, () =>
                        setIsModalOpen(true)
                      )
                    }
                  >
                    <Ellipsis
                      className={`!text-base md:text-2xl font-normal  notranslate`}
                      direction="middle"
                      content={FOUNDATION_CONFIG.tokens.MINIDOGE}
                    />
                  </MinidogeAddress>
                </div>
              </div>
            </div>
          </Section>
        </div>
        {props.banner_url && (
          <Section type="right">
            <div className="sm:w-[22rem] sm:h-[22rem] xl:w-[26rem] xl:h-[26rem] md:w-full md:h-full transition-transform duration-300 hover:scale-105">
              <ImageLink className="">
                <img
                  src={IMAGES.SECTIONS.BANNER}
                  alt="Token Image"
                  className="object-contain aspect-square w-full h-full z-10"
                />
              </ImageLink>
            </div>
          </Section>
        )}
      </div>
    </>
  );
};

export const Section1 = ({ ...props }) => {
  const { t } = useTranslation();
  const section1: any = t("section1", { returnObjects: true });
  const Tweets = ({
    id,
    className = "",
    image,
  }: {
    id: string;
    className?: string;
    image: string;
  }) => {
    return (
      <a
        href={`https://x.com/elonmusk/status/${id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={`${memesHover}`}>
          <img src={image} className={className} />
        </div>
      </a>
    );
  };
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="text-center flex flex-col gap-4 xl:gap-5">
          <Section type="top">
            <span className={`${memesTitleSize}`}>{section1?.title}</span>
          </Section>
          <Section type="left">
            <p className="text-base sm:text-lg md:text-base xl:text-xl mt-4 sm:mt-4 xl:mt-8">
              {section1?.text.map((text: any, index: number) => (
                <span
                  key={index}
                  className={`${
                    text.highlight ? memesTextColor + " font-bold" : ""
                  }`}
                >
                  {text.content}
                </span>
              ))}
            </p>
          </Section>
        </div>
        <Section type="top">
          <MemesCard {...props} className={`${memesHover}`}>
            <div className="grid  sm:grid-cols-[1fr,1fr] xl:grid-cols-[527px,1fr] gap-4 sm:gap-8 xl:gap-12">
              <Section type="left">
                <Tweets
                  id="1865304483070169440"
                  image={IMAGES.SECTIONS.SECTION1.left}
                  className="w-full xl:w-[527px] xl:h-[695px] rounded-xl object-cover"
                />
              </Section>

              <Section type="right">
                <div className="flex flex-col">
                  <span className="text-base sm:text-xl xl:text-2xl font-bold">
                    {section1?.box.right.title}
                  </span>
                  <p className="text-base sm:text-lg md:text-base xl:text-xl mt-4 sm:mt-4 xl:mt-8 opacity-60 leading-relaxed">
                    {section1?.box.right.text.map(
                      (text: any, index: number) => (
                        <span
                          key={index}
                          className={`${
                            text.highlight
                              ? memesTextColor + " font-bold opacity-100"
                              : ""
                          }`}
                        >
                          {text.content}
                        </span>
                      )
                    )}
                  </p>
                  {section1?.box.right.image && (
                    <Tweets
                      id="1865305060307009884"
                      image={IMAGES.SECTIONS.SECTION1.right}
                      className="w-full mt-4 sm:mt-4 xl:mt-11 rounded-xl object-cover"
                    />
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
    </>
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
          <span
            className={`${memesTextSize} mt-4 sm:mt-4 xl:mt-8 max-w-xl`}
            dangerouslySetInnerHTML={{ __html: section2?.text }}
          ></span>
          {section2.bntText && (
            <a
              href={section2?.bntUrl}
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
          <ImageLink>
            <img
              src={IMAGES.SECTIONS.SECTION2}
              className="aspect-square rounded-xl object-cover"
            />
          </ImageLink>
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
        <div className="w-full flex flex-col">
          {IMAGES.SECTIONS.SECTION3 && (
            <>
              {/* 第一排：最多显示3个 */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 justify-center">
                {IMAGES.SECTIONS.SECTION3.slice(0, 3).map((item, index) => (
                  <ImageLink key={index}>
                    <div className={`aspect-square ${memesHover}`}>
                      <img
                        src={item}
                        alt={`Section 3 Image ${index}`}
                        className="h-full w-full object-cover aspect-square rounded-xl"
                      />
                    </div>
                  </ImageLink>
                ))}
              </div>

              {/* 第二排：从第4个开始，显示最多4个 */}
              {IMAGES.SECTIONS.SECTION3.length > 3 && (
                <div className="grid grid-cols-4 gap-3 sm:gap-4 justify-items-center mt-4">
                  {IMAGES.SECTIONS.SECTION3.slice(3).map((item, index) => (
                    <ImageLink key={index}>
                      <div className={`aspect-square ${memesHover}`}>
                        <img
                          src={item}
                          alt={`Section 3 Image ${index + 3}`}
                          className="h-full w-full object-cover aspect-square rounded-xl"
                        />
                      </div>
                    </ImageLink>
                  ))}
                </div>
              )}
            </>
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
    title = "",
    index = 0,
  }: {
    title?: string;
    text?: string;
    index?: number;
  }) => {
    return (
      <a
        className={`${howToBuy?.data?.[index].url ? "" : "text-current"}`}
        onClick={() =>
          howToBuy?.data?.[index].url &&
          window.open(howToBuy?.data?.[index].url, "_blank")
        }
      >
        <MemesCard {...props} className={`${memesHover}`}>
          <div className="flex flex-col gap-4 sm:gap-6 xl:gap-7">
            <div className="grid grid-cols-[70px,1fr] xl:grid-cols-[83px,1fr] gap-4 sm:gap-6 xl:gap-8 items-center">
              <div className="aspect-square p-[6px] bg-white/20 rounded-2xl w-[70px] h-[70px] xl:w-[83px] xl:h-[83px]">
                <Icon
                  name={`howToBuy/${3 - index}`}
                  className="aspect-square rounded-xl w-full h-full object-cover"
                />
              </div>
              <span
                className={`text-2xl xl:text-3xl font-normal ${memesTextColor}`}
                dangerouslySetInnerHTML={{ __html: title }}
              ></span>
            </div>
            <span
              className={`${memesTextSize} !text-base xl:!text-2xl font-normal`}
              dangerouslySetInnerHTML={{ __html: text }}
            ></span>
          </div>
        </MemesCard>
      </a>
    );
  };
  return (
    <div className="flex flex-col items-center gap-14">
      <Section type="top">
        <span
          className={`${memesTitleSize}`}
          dangerouslySetInnerHTML={{ __html: howToBuy.title }}
        ></span>
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
    <>
      <MemesCard
        className={`bg-gradient-to-r from-[#FFAF03] to-[#FF5900] shadow-[0px_0px_71px_2px_rgba(255,255,255,0.5)_inset] flex flex-col items-center text-center mt-24 xl:mt-28 text-black ${memesHover}`}
      >
        <div className="w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-gradient-to-l from-[#FFAE04]/15 to-[#FFC30C]/15 -mt-[calc(96px+32px)] sm:-mt-[calc(114px+48px)] p-6 flex justify-center items-center">
          <img
            src={IMAGES.LOGO}
            className="aspect-square rounded-full object-cover w-full h-full"
            loading="lazy"
            alt="logo"
          />
        </div>
        <span
          className={`${memesTitleSize} text-3xl sm:text-3xl md:text-3xl xl:text-4xl mt-4 sm:mt-5`}
        >
          {about?.title}
        </span>
        <div
          className={`${memesTextSize} mt-3 sm:mt-6 max-w-3xl mx-auto leading-relaxed space-y-4 font-medium about-text`}
          dangerouslySetInnerHTML={{ __html: about?.text }}
        />
        {about?.bntText && (
          <a href={about?.bntUrl} className={memesHover} target="_blank">
            <MemesBtn className="mt-6 xl:mt-12 !bg-white from-transparent to-transparent !border-transparent !text-black">
              {about?.bntText}
            </MemesBtn>
          </a>
        )}
      </MemesCard>
    </>
  );
};

export const StarrySky = () => {
  return (
    <div className="starry-background">
      <div className="stars">
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
        <div className="star" />
      </div>
    </div>
  );
};

export default function Domain({ ...props }) {
  if (Object.keys(props).length === 0) return null;

  return (
    <div className="flex flex-col gap-12 sm:gap-24 md:gap-28 xl:gap-28">
      <MemesHome {...props} />
      <Section type="bottom">
        <Exchange {...props} />
      </Section>
      <Section1 {...props} />
      <Section2 {...props} />
      <Section3 {...props} />
      <HowToBuy {...props} />
      <Section type="top">
        <About {...props} />
      </Section>
      {pageSwitch.home.foundationAddr && (
        <Section type="top">
          <FoundationBalance {...props}/>
        </Section>
      )}
    </div>
  );
}
