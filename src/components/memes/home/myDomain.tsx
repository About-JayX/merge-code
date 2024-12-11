/**
 * MyDomain 组件模块
 * 用于展示 Memes.ac 平台上已注册的项目列表
 * 包括项目的基本信息和社交媒体链接
 */

import { Icon } from "@/components";
import { Image, Typography } from "antd";
import Mbutton from "@/components/memes/button";
import { Ellipsis } from "antd-mobile";
import { useEffect, useState } from "react";
import Card from "@/components/memes/card";
import { domain as domainAPI } from "@/api";

const { Paragraph } = Typography;

/**
 * Token 数据接口定义
 * 描述单个项目的数据结构
 */
interface Token {
  domain: string;           // 域名（必需）
  logo_url?: string;        // Logo 图片地址（可选）
  name?: string;           // 项目名称（可选）
  contract_address?: string; // 智能合约地址（可选）
  telegram_url?: string;    // Telegram 群组链接（可选）
  twitter_url?: string;     // Twitter 主页链接（可选）
  dexscreener_url?: string; // Dexscreener 行情链接（可选）
  pump_url?: string;        // Pump 平台链接（可选）
}

/**
 * MyDomain 组件
 * 功能：
 * 1. 展示已注册的项目列表
 * 2. 显示项目基本信息（Logo、名称、合约地址）
 * 3. 提供社交媒体快捷链接
 * 4. 支持响应式布局
 */
export default function MyDomain() {
  /**
   * 状态管理
   * tokens: 包含项目列表数据和总数
   * data: Token[] - 项目数组
   * total: number - 项目总数
   */
  const [tokens, setTokens] = useState<{ data: Token[]; total: number }>({
    data: [],
    total: 1,
  });

  /**
   * 副作用：组件挂载时获取项目列表
   * 调用 API 获取首页展示的项目数据（默认12个）
   */
  useEffect(() => {
    const fetchTokens = async () => {
      try {
        // 调用 API 获取项目列表数据
        const result: any = await domainAPI.getListAPI({
          current: 1,    // 第一页
          pageSize: 12,  // 每页12条数据
        });
        setTokens(result.data);
      } catch (error) {
        console.error("Error fetching tokens:", error);
      }
    };

    fetchTokens();
  }, []);

  return (
    <div className="flex flex-col mt-16 sm:mt-24 gap-5 sm:gap-7">
      {/* 标题区域：使用渐变色和装饰条 */}
      <header className="uppercase text-xl sm:text-3xl font-bold">
        <div className="flex items-center relative gap-3">
          {/* 左侧渐变装饰条 */}
          <div className="w-1 h-full">
            <div className="w-1 h-full bg-gradient-to-b from-[#A440FD] to-[#0DC8EC] rounded-lg absolute top-0 left-0" />
          </div>
          {/* 标题文本，包含渐变色效果 */}
          <span>
            Projects On&nbsp;
            <span className="font-extrabold bg-gradient-to-r from-[#9F44FC] to-[#10C5EC] bg-clip-text text-transparent">
              Memes.ac
            </span>
            <br />
          </span>
        </div>
      </header>

      {/* 项目卡片网格布局
       * 响应式设计：
       * - 移动端：2列
       * - 平板：3列
       * - 桌面：4列
       */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {tokens.data.map((item, index) => (
          <Card
            key={index}
            href={`/${item.domain}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* 项目信息卡片内容 */}
            <div className="flex flex-col gap-2 sm:gap-3 items-center">
              {/* 项目 Logo 图片
               * - 支持懒加载
               * - 设置默认图片
               * - 禁用预览功能
               */}
              <Image
                loading="lazy"
                className="!w-32 !h-32 sm:!w-52 sm:!h-52 object-cover rounded-2xl sm:rounded-3xl"
                src={item.logo_url || "/default-logo.png"}
                alt={item.name || "Project Logo"}
                fallback="/default-logo.png"
                preview={false}
              />
              {/* 项目名称：使用省略组件处理过长文本 */}
              <span className="text-xl font-medium break-all">
                <Ellipsis direction="middle" content={item.name || "Unknown"} />
              </span>
              {/* 合约地址：支持复制功能 */}
              <Paragraph
                className="flex"
                copyable={{
                  text: item?.contract_address || "",
                }}
              >
                <Ellipsis
                  className="text-sm opacity-80"
                  direction="middle"
                  content={item?.contract_address || "No Address"}
                />
              </Paragraph>

              {/* 社交媒体链接按钮组
               * 根据项目配置动态显示不同的社交媒体链接
               */}
              <div className="flex gap-1 sm:gap-2 flex-wrap justify-center">
                {/* Telegram 链接按钮 */}
                {item.telegram_url && (
                  <Mbutton
                    href={item.telegram_url}
                    target="_blank"
                    className="!min-w-7 !min-h-7 sm:!min-w-10 sm:!min-h-10"
                  >
                    <Icon name="telegram" />
                  </Mbutton>
                )}
                {/* Twitter 链接按钮 */}
                {item.twitter_url && (
                  <Mbutton
                    href={item.twitter_url}
                    target="_blank"
                    className="!min-w-7 !min-h-7 sm:!min-w-10 sm:!min-h-10"
                  >
                    <Icon name="twitter" />
                  </Mbutton>
                )}
                {/* Dexscreener 链接按钮 */}
                {item.dexscreener_url && (
                  <Mbutton
                    href={item.dexscreener_url}
                    target="_blank"
                    className="!min-w-7 !min-h-7 sm:!min-w-10 sm:!min-h-10"
                  >
                    <Icon name="dexscreener" />
                  </Mbutton>
                )}
                {/* Pump 链接按钮 */}
                {item.pump_url && (
                  <Mbutton
                    href={item.pump_url}
                    target="_blank"
                    className="!min-w-7 !min-h-7 sm:!min-w-10 sm:!min-h-10"
                  >
                    <Icon name="pump" />
                  </Mbutton>
                )}
                {/* 占位按钮：当没有任何社交链接时，保持布局一致性 */}
                {!item.telegram_url &&
                  !item.twitter_url &&
                  !item.dexscreener_url &&
                  !item.pump_url && (
                    <Mbutton className="!opacity-0" aria-hidden="true" />
                  )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
