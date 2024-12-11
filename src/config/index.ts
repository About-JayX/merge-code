/**
 * 项目配置文件
 * 包含环境变量、功能开关、路由参数、Telegram配置等全局配置项
 */

import type { Resource } from "i18next";
import enUS from "@/config/locale/en-US";
import type { TelegramType } from "@/type";

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
    "/": ["domain"],    // 首页需要 domain 参数
    "/edit": ["domain"] // 编辑页需要 domain 参数
  },
};

/**
 * Telegram 相关配置
 * 包含机器人URL和初始化数据
 */
export const telegram = {
  /**
   * Telegram 机器人的URL
   * 从环境变量中获取，用于与Telegram机器人通信
   */
  telegramRobotUrl: process.env.VITE_TELEGRAM_ROBOT_URL,
  
  /**
   * Telegram 初始化数据
   * 开发环境：使用模拟数据
   * 生产环境：使用实际的Telegram数据
   */
  telegramInitData: isDev
    ? {
        // 开发环境模拟数据
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

/**
 * API 配置
 * 包含API相关的配置项
 */
export const URL = {
  /**
   * API 基础URL
   * 从环境变量中获取，所有API请求都会基于此URL
   */
  baseURL: process.env.VITE_API_URL,
};

/**
 * 国际化语言配置
 * 定义支持的语言包
 * 目前支持：
 * - en-US: 英语（美国）
 */
export const locale = {
  "en-US": enUS,
} as Resource;
