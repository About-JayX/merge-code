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
    <div className="flex flex-col mt-2 sm:mt-2 gap-3 sm:gap-5">
      {/* 项目说明文案区域 */}
      <div className="relative px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent dark:from-transparent dark:via-purple-400/5 dark:to-transparent blur-2xl -z-10"></div>
        <p className="text-base sm:text-lg dark:text-white/80 text-black/80 py-3 leading-relaxed font-medium">
          Discover and explore <span className="text-purple-600 dark:text-purple-400">MEMES projects</span> built with our fast and modern website builder. 
          <span className="block mt-0.5">Join the community and showcase your project.</span>
        </p>
      </div>

      {/* 标题区域：使用渐变色和装饰条 */}
      <header className="uppercase text-xl sm:text-3xl font-bold px-4">
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

      {/* 项目卡片网格布局 */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {tokens.data.map((item, index) => (
          <Card
            key={index}
            href={`/${item.domain}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            {/* 项目信息卡片内容 */}
            <div className="flex flex-col gap-3">
              {/* Logo 和基本信息区域 */}
              <div className="flex items-start gap-3">
                <Image
                  loading="lazy"
                  className="!w-16 !h-16 sm:!w-20 sm:!h-20 object-cover rounded-full flex-shrink-0"
                  src={item.logo_url || "/default-logo.png"}
                  alt={item.name || "Project Logo"}
                  fallback="/default-logo.png"
                  preview={false}
                />
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-base sm:text-lg font-medium line-clamp-1">
                    {item.name || "Unknown"}
                  </span>
                  <Paragraph
                    className="flex"
                    copyable={{
                      text: item?.contract_address || "",
                    }}
                  >
                    <Ellipsis
                      className="text-xs sm:text-sm opacity-80"
                      direction="middle"
                      content={item?.contract_address || "No Address"}
                    />
                  </Paragraph>
                </div>
              </div>

              {/* 社交媒体链接区域 */}
              <div className="flex gap-1.5 flex-wrap">
                {item.telegram_url && (
                  <Mbutton
                    href={item.telegram_url}
                    target="_blank"
                    className="!min-w-8 !min-h-8"
                  >
                    <Icon name="telegram" className="text-base" />
                  </Mbutton>
                )}
                {item.twitter_url && (
                  <Mbutton
                    href={item.twitter_url}
                    target="_blank"
                    className="!min-w-8 !min-h-8"
                  >
                    <Icon name="twitter" className="text-base" />
                  </Mbutton>
                )}
                {item.dexscreener_url && (
                  <Mbutton
                    href={item.dexscreener_url}
                    target="_blank"
                    className="!min-w-8 !min-h-8"
                  >
                    <Icon name="dexscreener" className="text-base" />
                  </Mbutton>
                )}
                {item.pump_url && (
                  <Mbutton
                    href={item.pump_url}
                    target="_blank"
                    className="!min-w-8 !min-h-8"
                  >
                    <Icon name="pump" className="text-base" />
                  </Mbutton>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
