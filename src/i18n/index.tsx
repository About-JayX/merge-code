import i18next from "i18next";
import HttpApi from "i18next-http-backend";
import Backend from "i18next-chained-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { locale } from "@/config";

// 从 localStorage 获取保存的语言设置，如果没有则使用浏览器语言或默认语言
const savedLanguage = localStorage.getItem('i18nextLng');
const defaultLanguage = savedLanguage || navigator.language || 'en-US';

export default i18next
  .use(HttpApi)
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: locale,
    lng: defaultLanguage, // 使用保存的语言或默认语言
    fallbackLng: "en-US",
    react: {
      useSuspense: true,
    },
    detection: {
      order: [
        "localStorage",
        "navigator",
      ],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
      cookieMinutes: 10000,
      cookieDomain: window.location.hostname,
    },
  });
