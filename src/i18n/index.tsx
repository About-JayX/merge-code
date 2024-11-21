import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-chained-backend";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import { locale } from "@/config";

export default i18next
  .use(HttpApi)
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: locale,
    fallbackLng: "en",
    react: {
      useSuspense: true,
    },
    detection: {
      order: [
        "path",
        "localStorage",
        "cookie",
        "navigator",
        "querystring",
        "htmlTag",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"],
    },
  });
