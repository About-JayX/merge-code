import type { Resource } from "i18next";

import enUS from "@/config/locale/en-US";
import koKR from "@/config/locale/ko-KR";
import zhCN from "@/config/locale/zh-CN";
import type { TelegramType } from "@/type";

// 检测是否为开发者
export const isDev: boolean = import.meta.env.DEV;
// 路由
export const router = {
  // 根据路由路经需要传参数
  param: { "/": ["domain"]},
};
// 电报
export const telegram = {
  // 电报机器人URL
  telegramRobotUrl: process.env.VITE_TELEGRAM_ROBOT_URL,
  // 电报初始化数据
  telegramInitData: isDev
    ? {
        initData:
          "query_id=AAHV2c5qAgAAANXZzmp6hdzG&user=%7B%22id%22%3A6086908373%2C%22first_name%22%3A%223042%22%2C%22last_name%22%3A%22s%22%2C%22username%22%3A%22s3042hjx%22%2C%22language_code%22%3A%22zh-hans%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1728876586&hash=64b3f449e4e9468276b1d8e3cc312a9ea49549e3f9ff09b7548d33f4167a4fbb",
        initDataUnsafe: {
          authDate: 1728876586,
          hash: "64b3f449e4e9468276b1d8e3cc312a9ea49549e3f9ff09b7548d33f4167a4fbb",
          queryId: "AAHV2c5qAgAAANXZzmp6hdzG",
          user: {
            allowsWriteToPm: true,
            firstName: "3042",
            id: 6086908373,
            languageCode: "zh-hans",
            lastName: "s",
            username: "s3042hjx",
          },
        },
      }
    : {},
} as {
  telegramRobotUrl: string;
  telegramInitData: TelegramType.TelegramInitData;
};
// API请求URL链接
export const URL = {
  baseURL: process.env.VITE_API_URL,
};

// 语言库
export const locale = {
  "en-US": enUS,
  "ko-KR": koKR,
  "zh-CN": zhCN,
} as Resource;
