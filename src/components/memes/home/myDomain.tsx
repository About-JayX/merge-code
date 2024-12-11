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
 */
interface Token {
  domain: string;           // 域名
  logo_url?: string;        // Logo URL
  name?: string;           // 项目名称
  contract_address?: string; // 合约地址
  telegram_url?: string;    // Telegram 链接
  twitter_url?: string;     // Twitter 链接
  dexscreener_url?: string; // Dexscreener 链接
  pump_url?: string;        // Pump 链接
}

/**
 * MyDomain 组件
 * 展示已注册的域名和相关项目信息
 */
export default function MyDomain() {
  // 状态管理：tokens 列表和总数
  const [tokens, setTokens] = useState<{ data: Token[]; total: number }>({
    data: [],
    total: 1,
  });

  // 组件挂载时获取域名列表
  useEffect(() => {
    const fetchTokens = async () => {
      try {
        // 调用 API 获取域名列表数据
        const result:any = await domainAPI.getListAPI({
          current: 1,
          pageSize: 12,
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
      {/* 标题区域 */}
      <header className="uppercase text-xl sm:text-3xl font-bold">
        <div className="flex items-center relative gap-3">
          {/* 标题左侧装饰条 */}
          <div className="w-1 h-full">
            <div className="w-1 h-full bg-gradient-to-b from-[#A440FD] to-[#0DC8EC] rounded-lg absolute top-0 left-0" />
          </div>
          <span>
            Projects served by&nbsp;
            <span className="font-extrabold bg-gradient-to-r from-[#9F44FC] to-[#10C5EC] bg-clip-text text-transparent">
              Memes.ac
            </span>
            <br />(Partial CTO)
          </span>
        </div>
      </header>

      {/* 项目卡片网格 */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {tokens.data.map((item, index) => (
          <Card
            key={index}
            href={`/${item.domain}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* 项目信息展示 */}
            <div className="flex flex-col gap-2 sm:gap-3 items-center">
              {/* 项目 Logo */}
              <Image
                loading="lazy"
                className="!w-32 !h-32 sm:!w-52 sm:!h-52 object-cover rounded-2xl sm:rounded-3xl"
                src={item.logo_url || "/default-logo.png"}
                alt={item.name || "Project Logo"}
                fallback="/default-logo.png"
                preview={false}
              />
              {/* 项目名称 */}
              <span className="text-xl font-medium break-all">
                <Ellipsis direction="middle" content={item.name || "Unknown"} />
              </span>
              {/* 合约地址（可复制） */}
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

              {/* 社交媒体链接按钮组 */}
              <div className="flex gap-1 sm:gap-2 flex-wrap justify-center">
                {/* Telegram 按钮 */}
                {item.telegram_url && (
                  <Mbutton
                    href={item.telegram_url}
                    target="_blank"
                    className="!min-w-7 !min-h-7 sm:!min-w-10 sm:!min-h-10"
                  >
                    <Icon name="telegram" />
                  </Mbutton>
                )}
                {/* Twitter 按钮 */}
                {item.twitter_url && (
                  <Mbutton
                    href={item.twitter_url}
                    target="_blank"
                    className="!min-w-7 !min-h-7 sm:!min-w-10 sm:!min-h-10"
                  >
                    <Icon name="twitter" />
                  </Mbutton>
                )}
                {/* Dexscreener 按钮 */}
                {item.dexscreener_url && (
                  <Mbutton
                    href={item.dexscreener_url}
                    target="_blank"
                    className="!min-w-7 !min-h-7 sm:!min-w-10 sm:!min-h-10"
                  >
                    <Icon name="dexscreener" />
                  </Mbutton>
                )}
                {/* Pump 按钮 */}
                {item.pump_url && (
                  <Mbutton
                    href={item.pump_url}
                    target="_blank"
                    className="!min-w-7 !min-h-7 sm:!min-w-10 sm:!min-h-10"
                  >
                    <Icon name="pump" />
                  </Mbutton>
                )}
                {/* 如果没有任何社交链接，添加一个隐藏的按钮保持布局 */}
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
