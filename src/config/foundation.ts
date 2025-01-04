import { IMAGES } from './resources';

// 基金会钱包地址
export const FOUNDATION_ADDRESS = "BB9Ck6U29bdYwvRtWRyX1Zt6ksw1G7iHGYBgqAHMCqgM";

// RPC 节点地址
export const RPC_ENDPOINT = "https://boldest-broken-gas.solana-mainnet.quiknode.pro/95cb652a0dbf38d8ec52bfbe02e99a941ab51a67/";

// 基金会相关的其他配置
export const FOUNDATION_CONFIG = {
  // 基金会钱包地址
  address: FOUNDATION_ADDRESS,
  
  // Solscan 链接
  solscanUrl: `https://solscan.io/account/${FOUNDATION_ADDRESS}`,
  
  // 基金会电报管理员
  telegramAdmin: ["@web3xTCC","@minidoge_a","@KKong555"],
  
  // 代币合约地址
  tokens: {
    MINIDOGE: "8J6CexwfJ8CSzn2DgWhzQe1NHd2hK9DKX59FCNNMo2hu",
    USDT: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
    USDC: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  },

  // 代币图标
  tokenLogos: IMAGES.TOKEN_LOGOS,
}; 