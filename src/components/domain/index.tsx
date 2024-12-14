import { Ellipsis } from "antd-mobile";
import Icon from "../icon";
import "./index.scss";

export const memesSize =
  "min-w-10 min-h-10 sm:min-w-12 sm:min-h-12 xl:min-w-14 xl:min-h-14";

export const memesTitleSize = "text-2xl sm:text-4xl xl:text-6xl font-bold";
export const memesSubTitleSize = " text-2xl sm:text-3 xl:text-4xl font-normal";
export const memesTextSize =
  " text-sm sm:text-sm xl:text-base font-normal opacity-60";
export const memesTextColor =
  "bg-gradient-to-b from-[#FFAC03] to-[#FFC10B] bg-clip-text text-transparent";

export const MemesIcon = ({ className = "",name="" }: { className?: string,name?:string }) => {
  return (
    <div
      className={`${memesSize} bg-white/10 border border-white/10 rounded-full flex items-center justify-center ${className}`}
    >
      <Icon name={name} className="text-lg sm:text-xl" />
    </div>
  );
};

export const MemesBtn = ({
  children,
  className = "",
  type = "primary",
  ...props
}: {
  className?: string;
  children?: React.ReactNode;
  type?: "default" | "primary";
}) => {
  return (
    <button
      className={`${memesSize} rounded ${
        type === "primary"
          ? "bg-gradient-to-b from-[#FFAC03] to-[#FFC10B] text-[#242904]"
          : "border border-[#FFB004] text-[#FFB305]"
      } px-4 font-bold text-xs sm:text-sm xl:text-xl sm:min-w-40 xl:min-w-48 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const MemesCard = ({
  className = "",
  children,
  ...props
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={`bg-[#0F0F0F] rounded-2xl p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const MemesHome = () => {
  return (
    <div className="grid  md:grid-cols-[1fr,260px] xl:grid-cols-[1fr,384px] gap-12 sm:gap-16 md:gap-12 xl:gap-28 items-center justify-items-center sm:justify-between">
      <div className="flex flex-col ">
        <p className="text-4xl sm:text-6xl md:text-4xl xl:text-7xl font-bold whitespace-pre-wrap break-all">
          $MINIDOGE 
          <span className={`${memesTextColor}`}>(CTO)</span> {"\n"} - Minidoge
        </p>
        <p className="text-base sm:text-lg md:text-base xl:text-xl mt-4">
          Carrying forward the inheritance of $DOGE, blessed by Elon Musk,
          $MINIDOGE continues the revolution.
        </p>
        <div className="grid grid-cols-[auto,1fr] gap-4 sm:gap-8 md:gap-4 xl:gap-5 items-center mt-4 sm:mt-8 md:mt-8 xl:mt-16">
          <MemesBtn className="">Let’s Explore</MemesBtn>
          <div className="grid grid-cols-[auto,1fr] gap-4 items-center w-full">
            <div className="p-[6px] bg-gradient-to-b from-[#FFAC03]/15 to-[#FFC10B]/15 rounded-full">
              <MemesIcon name="copy" className=" shadow-[0px_0px_8px_4px_rgba(0,0,0,0.25)_inset] bg-gradient-to-b from-[#FFAC03] to-[#FFC10B] text-[#271D02] min-w-[calc(56px-6px)] min-h-[calc(56px-6px)]" />
            </div>
            <div className="flex flex-col break-all">
              <Ellipsis
                className="text-base md:text-2xl font-normal"
                direction="middle"
                content="0x0000000000000000000000000000000000000000"
              />
              <span className="text-xs md:text-base font-normal opacity-50">
                CA
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-72 h-72 md:w-full md:h-full">
        <img
          src="https://gd-hbimg.huaban.com/e2926c32441be67bc5e8d05b3461cc7147a4635816d39e-fOMnpk_fw1200webp"
          alt="Token Image"
          className="object-cover aspect-square rounded-full z-10"
        />
      </div>
    </div>
  );
};

export const Section1 = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="text-center flex flex-col gap-4 xl:gap-5">
        <span className={`${memesTitleSize}`}>The Revolution Begins</span>
        <span className={`${memesTextSize}`}>
          Join the $MINIDOGE CTO movement - where every holder is an owner,
          every voice matters. Together, we're building the first truly
          community-driven inheritance of $DOGE.
        </span>
      </div>
      <MemesCard>
        <div className="grid  sm:grid-cols-[1fr,1fr] xl:grid-cols-[527px,1fr] gap-4 sm:gap-8 xl:gap-12">
          <img
            src="https://gd-hbimg.huaban.com/e2926c32441be67bc5e8d05b3461cc7147a4635816d39e-fOMnpk_fw1200webp"
            className="w-full xl:w-[527px] h-[90vw] sm:h-[60vw] xl:h-[695px] rounded-xl object-cover"
          />
          <div className="flex flex-col">
            <span className={`${memesSubTitleSize}`}>
              Hot Trending on this week{" "}
            </span>
            <span className={`${memesTextSize} mt-4 sm:mt-4 xl:mt-8`}>
              $MINIDOGE emerges as the true inheritor of $DOGE. As a CTO
              (Community-Taken-Over) token, we represent the first shot against
              centralized power in the crypto space.
            </span>
            <img
              src="https://gd-hbimg.huaban.com/e2926c32441be67bc5e8d05b3461cc7147a4635816d39e-fOMnpk_fw1200webp"
              className="w-full h-[40vw] sm:h-[22vw] xl:h-[262px] mt-4 sm:mt-4 xl:mt-11 rounded-xl object-cover"
            />
            <div>
              <MemesBtn className=" mt-4 sm:mt-4 xl:mt-14" type="default">
                Place a Bid
              </MemesBtn>
            </div>
          </div>
        </div>
      </MemesCard>
    </div>
  );
};

export const Section2 = () => {
  return (
    <div className="grid sm:grid-cols-[1fr,1fr] xl:grid-cols-[1fr,493px] items-center gap-6 sm:gap-6 xl:gap-16">
      <div className="flex flex-col">
        <span className={`${memesTitleSize} max-w-md`}>Power to Community</span>
        <span className={`${memesTextSize} mt-4 sm:mt-4 xl:mt-8 max-w-xl`}>
          In an era dominated by VCs and whales, $MINIDOGE CTO stands as a
          symbol of community resistance. We're taking back control, one token
          at a time.
        </span>
        <div className="mt-4 sm:mt-4 xl:mt-16">
          <MemesBtn>Connect Wallet</MemesBtn>
        </div>
      </div>
      <div>
        <div className="aspect-square xl:w-[493px] xl:h-[493px] rounded-xl p-6 border border-[#FFB004]">
          <img
            src="https://gd-hbimg.huaban.com/e2926c32441be67bc5e8d05b3461cc7147a4635816d39e-fOMnpk_fw1200webp"
            className="aspect-square  rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export const Section3 = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-4 md:gap-8 xl:gap-16 items-center">
      <p className={`${memesTitleSize}`}>
        <span className={`${memesTextColor}`}>Professional</span> team
      </p>
      <div className="w-full grid gap-3 sm:gap-4">
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          <img
            src="https://gd-hbimg.huaban.com/e2926c32441be67bc5e8d05b3461cc7147a4635816d39e-fOMnpk_fw1200webp"
            alt="Image 1"
            className="h-full w-full object-cover aspect-square rounded-xl"
          />
          <img
            src="https://gd-hbimg.huaban.com/e2926c32441be67bc5e8d05b3461cc7147a4635816d39e-fOMnpk_fw1200webp"
            alt="Image 2"
            className="h-full w-full object-cover aspect-square rounded-xl"
          />
          <img
            src="https://gd-hbimg.huaban.com/e2926c32441be67bc5e8d05b3461cc7147a4635816d39e-fOMnpk_fw1200webp"
            alt="Image 3"
            className="h-full w-full object-cover aspect-square rounded-xl"
          />
        </div>
        <div className="grid grid-cols-4 gap-3 sm:gap-4">
          <img
            src="https://gd-hbimg.huaban.com/e2926c32441be67bc5e8d05b3461cc7147a4635816d39e-fOMnpk_fw1200webp"
            alt="Image 1"
            className="h-full w-full object-cover aspect-square rounded-lg"
          />
          <img
            src="https://gd-hbimg.huaban.com/e2926c32441be67bc5e8d05b3461cc7147a4635816d39e-fOMnpk_fw1200webp"
            alt="Image 2"
            className="h-full w-full object-cover aspect-square rounded-lg"
          />
          <img
            src="https://gd-hbimg.huaban.com/e2926c32441be67bc5e8d05b3461cc7147a4635816d39e-fOMnpk_fw1200webp"
            alt="Image 3"
            className="h-full w-full object-cover aspect-square rounded-lg"
          />
          <img
            src="https://gd-hbimg.huaban.com/e2926c32441be67bc5e8d05b3461cc7147a4635816d39e-fOMnpk_fw1200webp"
            alt="Image 4"
            className="h-full w-full object-cover aspect-square rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export const Section4 = () => {
  const MemesCardItem = ({ text = "" }: { text?: string }) => {
    return (
      <MemesCard>
        <div className="flex flex-col gap-4 sm:gap-6 xl:gap-7">
          <div className="grid grid-cols-[70px,1fr] xl:grid-cols-[83px,1fr] gap-4 sm:gap-6 xl:gap-8 items-center">
            <div className="aspect-square p-[6px] bg-white/20 rounded-2xl">
              <img
                src="https://gd-hbimg.huaban.com/e2926c32441be67bc5e8d05b3461cc7147a4635816d39e-fOMnpk_fw1200webp"
                className="aspect-square rounded-xl object-cover"
              />
            </div>
            <span
              className={`text-2xl xl:text-3xl font-normal ${memesTextColor}`}
            >
              Step 1
            </span>
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
      <span className={`${memesTitleSize}`}>How to buy?</span>
      <div className="grid gap-5 w-full">
        {[
          {
            text: "Download the Phantom app for mobile users, and download the Phantom Chrome extension for desktop users.",
          },
          {
            text: "Fund your wallet with Solana, you can buy Solana from an exchange or cross chain swap and send it to your wallet.",
          },
          {
            text: "Go to Jupiter and swap your Solana for $BITCAT. (We recommend using Jupiter to avoid MEV bots.)",
          },
        ].map((item, index) => (
          <MemesCardItem key={index} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <MemesCard className="bg-gradient-to-r from-[#FFAF03] to-[#FF5900] shadow-[0px_0px_71px_2px_rgba(255,255,255,0.5)_inset] flex flex-col items-center text-center mt-24 xl:mt-28">
      <div className="w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-gradient-to-l from-[#FFAE04]/15 to-[#FFC30C]/15 -mt-[calc(96px+32px)] sm:-mt-[calc(114px+48px)] p-6">
        <img
          src="https://gd-hbimg.huaban.com/e2926c32441be67bc5e8d05b3461cc7147a4635816d39e-fOMnpk_fw1200webp"
          className="aspect-square rounded-full object-cover"
        />
      </div>
      <span
        className={`${memesTitleSize} text-3xl sm:text-3xl md:text-3xl xl:text-4xl mt-4 sm:mt-5`}
      >
        MINIDOGE COIN
      </span>
      <span className={`${memesTextSize} mt-3 sm:mt-6 sm:max-w-96`}>
        Subscription get interesting offers from us and gtet the best technology
        for your various activites
      </span>
      <MemesBtn className="mt-6 xl:mt-12 !bg-white from-transparent to-transparent">
        Get Started
      </MemesBtn>
    </MemesCard>
  );
};

export default function Domain() {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col pb-12 gap-8 sm:gap-8 xl:gap-24 items-center text-white transition-all ease-in-out duration-300">
      <header className="p-4 sm:p-8 md:pt-8 md:px-16 flex gap-4 items-center w-full max-w-screen-xl">
        <img src="https://gd-hbimg.huaban.com/e2926c32441be67bc5e8d05b3461cc7147a4635816d39e-fOMnpk_fw1200webp" className="w-14 h-14 md:w-16 md:h-16 rounded-full" />
        <div className="flex-1" />
        <MemesIcon name="twitter"/>
        <MemesIcon name="telegram"/>
        <MemesBtn>BUY$MINIDOG</MemesBtn>
      </header>
      <main className="px-4 sm:p-8 md:px-16 w-full max-w-screen-xl flex flex-col gap-12 sm:gap-24 md:gap-28 xl:gap-44">
        <MemesHome />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <About />
      </main>
    </div>
  );
}
