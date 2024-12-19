/**
 * 项目配置文件
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

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const isDev: boolean = import.meta.env.DEV;

export const features = {
  showRaidLeaders: false,
  showPartner: false,
};

export const router = {
  param: {},
};

export const telegram = {
  telegramRobotUrl: '',
  telegramInitData: {}
};

export const api = {
  baseURL: 'https://example.com/api',
}

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
