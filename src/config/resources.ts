import { images } from "../assets/images";

// 统一管理所有链接
export const LINKS = {
  BUY: {
    RAYDIUM: "https://raydium.io/swap/?inputMint=sol&outputMint=8J6CexwfJ8CSzn2DgWhzQe1NHd2hK9DKX59FCNNMo2hu",
    PHANTOM: "https://phantom.com/",
  },
  SOCIAL: {
    TELEGRAM: "https://t.me/MINIDOGE_PORTAL",
    TWITTER: "https://x.com/MINIDOGE_X",
    TIKTOK: "https://www.tiktok.com/@minidoge_cto",
    YOUTUBE: "",
    INSTAGRAM: "",
  },
  DOCS: {
    CTO_FOUNDATION: "https://minidoge-cto-foundation.gitbook.io/minidoge",
  },
} as const;

// 统一管理所有图片资源
export const IMAGES = {
  // Logo
  LOGO: images.logo,
  
  // Token Logos
  TOKEN_LOGOS: {
    MINIDOGE: images.logo,
    SOL: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
    USDT: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg",
    USDC: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
  },

  // 社交媒体图标
  SOCIAL: {
    TWITTER: "https://abs.twimg.com/favicons/twitter.ico",
    TELEGRAM: "https://telegram.org/img/favicon.ico",
    TIKTOK: "https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-dark-e95da587b6efa1520dcd11f4b45c0cf6.svg",
  },

  // 教程图标
  TUTORIAL: {
    STEP1: images.logo,
    STEP2: images.logo,
    STEP3: images.logo,
  },

  // 各个部分的图片
  SECTIONS: {
    BANNER: images.banner,
    SECTION1: {
      left: images.section1.LEFT,
      right: images.section1.RIGHT,
    },
    SECTION2: images.section2,
    SECTION3: images.section3,
  }
} as const;

// 导航配置
export const NAV = {
  TWITTER: LINKS.SOCIAL.TWITTER,
  TELEGRAM: LINKS.SOCIAL.TELEGRAM,
  TIKTOK: LINKS.SOCIAL.TIKTOK,
  YOUTUBE: LINKS.SOCIAL.YOUTUBE,
  INSTAGRAM: LINKS.SOCIAL.INSTAGRAM,
} as const;

// 类型定义
export type ImageType = keyof typeof IMAGES;
export type TokenLogoType = keyof typeof IMAGES.TOKEN_LOGOS;
export type SocialIconType = keyof typeof IMAGES.SOCIAL;
export type TutorialIconType = keyof typeof IMAGES.TUTORIAL;
export type SectionImageType = keyof typeof IMAGES.SECTIONS;
export type LinkType = keyof typeof LINKS;
export type NavType = keyof typeof NAV; 