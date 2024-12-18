/**
 * 项目配置文件
 * 包含环境变量、功能开关、路由参数、Telegram配置等全局配置项
 */

import type { Resource } from "i18next";
import enUS from "@/config/locale/en-US";
import koKR from "@/config/locale/ko-KR";
import zhHK from "@/config/locale/zh-HK";
import jaJP from "@/config/locale/ja-JP";
import msMY from "@/config/locale/ms-MY";
import zhCN from "@/config/locale/zh-CN";
import idID from "@/config/locale/id-ID";
import filPH from "@/config/locale/fil-PH";
import thTH from "@/config/locale/th-TH";
import viVN from "@/config/locale/vi-VN";
import trTR from "@/config/locale/tr-TR";
import ruRU from "@/config/locale/ru-RU";
import frFR from "@/config/locale/fr-FR";
import deDE from "@/config/locale/de-DE";
import ptBR from "@/config/locale/pt-BR";
import esES from "@/config/locale/es-ES";
import itIT from "@/config/locale/it-IT";
import hiIN from "@/config/locale/hi-IN";
import faIR from "@/config/locale/fa-IR";
import arSA from "@/config/locale/ar-SA";

// import type { TelegramType } from "@/type";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

/**
 * 环境判断
 * isDev: true 表示开发环境，false 表示生产环境
 */
export const isDev: boolean = import.meta.env.DEV;

/**
 * 功能开关配置
 * 用于控制特定功能的显示/隐藏
 */
export const features = {
  /**
   * 是否显示 Raid Leaders 模块
   * true: 显示该模块
   * false: 隐藏该模块
   */
  showRaidLeaders: false,

  /**
   * 是否显示 Partner 模块
   * true: 显示该模块
   * false: 隐藏该模块
   */
  showPartner: false,
};

/**
 * 路由参数配置
 * 定义各个路由路径所需的URL参数
 */
export const router = {
  /**
   * 路由参数映射表
   * key: 路由路径
   * value: 该路由所需的参数数组
   */
  param: { 
    // "/": ["domain"],    // 首页需要 domain 参数
    // "/edit": ["domain"] // 编辑页需要 domain 参数
  },
};

/**
 * Telegram 相关配置
 * 包含机器人URL和初始化数据
 */
// 临时导出一个空的 telegram 对象以保持兼容性
export const telegram = {
  telegramRobotUrl: '',
  telegramInitData: {}
};

/**
 * API 配置
 * 包含API相关的配置项
 */
export const api = {
  /**
   * API 基础URL
   * 从环境变量中获取，所有API请求都会基于此URL
   */
  // baseURL: process.env.VITE_API_URL,
  baseURL: 'https://example.com/api',
}

/**
 * 国际化语言配置
 * 定义支持的语言包
 * 目前支持：
 * - en-US: 英语（美国）
 */
export const locale = {
  "en-US": enUS,
  "zh-CN": zhCN,
  "zh-HK": zhHK,
  "ja-JP": jaJP,
  "ko-KR": koKR,
  "ms-MY": msMY,
  "id-ID": idID,
  "fil-PH": filPH,
  "th-TH": thTH,
  "vi-VN": viVN,
  "tr-TR": trTR,
  "ru-RU": ruRU,
  "fr-FR": frFR,
  "de-DE": deDE,
  "pt-BR": ptBR,
  "es-ES": esES,
  "it-IT": itIT,
  "ar-SA": arSA,
  "hi-IN": hiIN,
  "fa-IR": faIR,
} as Resource;

i18n
  .use(initReactI18next)
  .init({
    resources: locale,
    fallbackLng: "en-US",
    supportedLngs: [
      "en-US", 
      "zh-CN",
      "zh-HK",
      "ja-JP",
      "ko-KR",
      "ms-MY",
      "id-ID",
      "fil-PH",
      "th-TH",
      "vi-VN",
      "tr-TR",
      "ru-RU",
      "fr-FR",
      "de-DE",
      "pt-BR",
      "es-ES",
      "it-IT",
      "ar-SA",
      "hi-IN",
      "fa-IR"
    ],
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['localStorage', 'cookie'],
    }
  });
