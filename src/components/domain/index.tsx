import { Ellipsis } from "antd-mobile";
import { motion, useInView } from "motion/react";
import Icon from "../icon";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import contractAddress from "@/config/contractAddress";
import { Dropdown, Modal } from "antd";
import Tgs from "../tgs";
import { images } from "@/assets/images";
import { copy } from "@/util";
import { locale } from "@/config";

const memesSize =
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
                <div
                  className={`p-[6px] relative rounded-full cursor-pointer ${memesHover}`}
                  onClick={async () => {
                    await copy(contractAddress, () => setIsModalOpen(true));
                  }}
                >
                  <div
                    className="absolute top-0 left-0 w-full h-full rounded-full -z-10 opacity-15"
                    style={{
                      background: props.button?.background,
                    }}
                  />
                  <MemesIcon
                    name="copy"
                    className=" shadow-[0px_0px_8px_4px_rgba(0,0,0,0.25)_inset] min-w-[calc(48px-6px)] min-h-[calc(48px-6px)]  sm:min-w-[calc(56px-6px)] sm:min-h-[calc(56px-6px)]"
                    onClick={async () =>
                      await copy(contractAddress, () => setIsModalOpen(true))
                    }
                    style={{
                      background: props.button?.background,
                      color: props.button?.text,
                    }}
                  />
                </div>
                <div className="flex flex-col break-all">
                  <div
                    className={`cursor-pointer ${memesHover}`}
                    onClick={async () =>
                      await copy(contractAddress, () => setIsModalOpen(true))
                    }
                  >
                    <Ellipsis
                      className={`text-base md:text-2xl font-normal text-white notranslate`}
                      direction="middle"
                      content={contractAddress}
                    />
                  </div>
                  <a
                    href="https://pump.fun/coin/8J6CexwfJ8CSzn2DgWhzQe1NHd2hK9DKX59FCNNMo2hu"
                    target="_blank"
                    className={`text-sm text-white/60 ${memesHover}`}
                  >
                    $MINIDOGE
                    <span style={{ fontSize: "50%", opacity: 0.8 }}> </span> -
                    pump.fun
                  </a>
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
                  src={props.banner_url}
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
    imageUrl = "",
  }: {
    id: string;
    className?: string;
    imageUrl: string;
  }) => {
    return (
      <a
        href={`https://x.com/elonmusk/status/${id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={`${memesHover}`}>
          <img src={imageUrl} className={className} />
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
                  imageUrl={section1?.box.left.image}
                  className="w-full xl:w-[527px]  xl:h-[695px] rounded-xl object-cover"
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
                      imageUrl={section1?.box.right.image}
                      className="w-full  mt-4 sm:mt-4 xl:mt-11 rounded-xl object-cover"
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
              src={section2?.image}
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
            <>
              {/* 第一排：最多显示3个 */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 justify-center">
                {section3.data.slice(0, 3).map((item: any, index: number) => (
                  <ImageLink key={index}>
                    <div className={`aspect-square ${memesHover}`}>
                      <img
                        src={item}
                        alt={item}
                        className="h-full w-full object-cover aspect-square rounded-xl"
                      />
                    </div>
                  </ImageLink>
                ))}
              </div>

              {/* 第二排：从第4个开始，显示最多4个 */}
              {section3.data.length > 3 && (
                <div className="grid grid-cols-4 gap-3 sm:gap-4 justify-items-center mt-4">
                  {section3.data.slice(3).map((item: any, index: number) => (
                    <ImageLink key={index}>
                      <div className={`aspect-square ${memesHover}`}>
                        <img
                          src={item}
                          alt={item}
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
    <MemesCard
      className={`bg-gradient-to-r from-[#FFAF03] to-[#FF5900] shadow-[0px_0px_71px_2px_rgba(255,255,255,0.5)_inset] flex flex-col items-center text-center mt-24 xl:mt-28 text-black ${memesHover}`}
    >
      <div className="w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-gradient-to-l from-[#FFAE04]/15 to-[#FFC30C]/15 -mt-[calc(96px+32px)] sm:-mt-[calc(114px+48px)] p-6 flex justify-center items-center">
        <picture>
          <source srcSet={images.logo} type="image/webp" />
          <img
            src={images.logo}
            className="aspect-square rounded-full object-cover w-full h-full"
            loading="lazy"
            alt="logo"
          />
        </picture>
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
  );
};

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6 w-full py-4">
      <div className="max-w-4xl mx-auto w-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
        <p
          className={`${memesTextSize} text-center leading-normal opacity-80 `}
          dangerouslySetInnerHTML={{ __html: t("footer") }}
        />
      </div>
    </div>
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
  const { t, i18n } = useTranslation();
  if (Object.keys(props).length === 0) return null;

  const { nav = {} } = props;

  return (
    <div
      className={`min-h-screen w-full flex flex-col pb-12 gap-8 sm:gap-8 xl:gap-0 items-center overflow-hidden relative text-content text-white ${props.background?.pattern}`}
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
      <StarrySky />
      <Section className="w-full flex justify-center z-10">
        <header className="p-3 sm:p-8 md:pt-8 md:px-16 flex gap-1 sm:gap-4 items-center w-full max-w-screen-xl">
          <div className="grid grid-cols-[48px,auto] sm:grid-cols-[56px,auto] md:grid-cols-[64px,auto] items-center gap-3">
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
              <span>{t("lang")}</span>
            </a>
          </Dropdown>
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
