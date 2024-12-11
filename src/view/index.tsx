/**
 * 项目首页模块
 * 包含两个主要组件：
 * 1. View: 主视图组件，展示搜索、社交媒体等功能
 * 2. Home: 主页组件，负责路由判断和数据初始化
 */

import { Icon } from "@/components";
import Domain from "@/components/domain";
import Input from "@/components/memes/input";
import { Image, Typography } from "antd";
import Mbutton from "@/components/memes/button";
import { Ellipsis } from "antd-mobile";
import { debounce } from "lodash";
import { useCallback, useLayoutEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import partner from "@/config/partner";
import { domain as domainAPI } from "@/api";
import { SEO } from "@/util";
import Twitter from "@/components/memes/home/twitter";
import MyDomain from "@/components/memes/home/myDomain";
import { features } from "@/config";

const { Paragraph } = Typography;

/**
 * 主视图组件
 * 功能：
 * 1. 展示项目标题和描述
 * 2. 提供域名搜索功能
 * 3. 展示社交媒体链接
 * 4. 显示合作伙伴信息
 * 5. 集成 Twitter 和 MyDomain 模块
 */
export const View = () => {
  // 路由导航和国际化翻译钩子
  const navigate = useNavigate();
  const { t } = useTranslation();

  /**
   * 搜索相关状态
   * search: 搜索输入值
   * searchStatus: 搜索状态（是否正在搜索）
   * availableStatus: 域名可用状态
   */
  const [search, setSearch] = useState<string>("");
  const [searchStatus, setSearchStatus] = useState<boolean>(false);
  const [availableStatus, setAvailableStatus] = useState<boolean>(false);

  /**
   * 处理域名搜索
   * 使用 lodash 的 debounce 函数优化搜索性能
   * 延迟 1000ms 执行搜索，避免频繁 API 调用
   */
  const onSearchChange = useCallback(
    debounce(async (value) => {
      // 空值处理：重置搜索状态
      if (value === "") {
        setAvailableStatus(false);
        setSearchStatus(false);
        return;
      }
      
      setSearch(value);
      // 调用 API 验证域名是否可用
      const result: any = await domainAPI.verifyAPI({ domain: value });
      if (!result.data) {
        setAvailableStatus(true);
      }
      setSearchStatus(false);
    }, 1000),
    []
  );

  return (
    <div className="flex sm:gap-20 flex-col pb-12">
      {/* 主要内容区域：包含标题、搜索框和社交媒体链接 */}
      <main className="bg-[#181a20] flex justify-center p-4 pt-20 sm:pt-40 pb-8 sm:pb-24 text-white">
        <div className="w-full max-w-6xl flex justify-center flex-col gap-6 sm:gap-10">
          {/* 标题和描述区域 */}
          <div className="text-center grid gap-4 sm:gap-2 justify-items-center z-10">
            <div className="memes-title flex justify-center">
              <h1 className="text-4xl md:text-5xl font-bold uppercase btn-shine">
                {t("home.title")}
              </h1>
            </div>

            <span className="text-white/50 text-lg sm:text-xl md:text-2xl font-normal">
              {t("home.text")}
            </span>

            {/* 移动端社交媒体按钮组 */}
            <div className="flex sm:hidden gap-1 sm:gap-2 items-center text-lg">
              {/* Telegram 链接 */}
              <Mbutton
                href="https://t.me/memes_ac_entry"
                target="_blank"
                className="!min-w-9 !min-h-9 sm:!min-w-10 sm:!min-h-10"
              >
                <Icon name="telegram" />
              </Mbutton>
              {/* Twitter 链接 */}
              <Mbutton
                href="https://x.com/memes_dot_ac"
                target="_blank"
                className="!min-w-9 !min-h-9 sm:!min-w-10 sm:!min-h-10"
              >
                <Icon name="twitter" />
              </Mbutton>
              {/* DexScreener 链接 */}
              <Mbutton
                className="!min-w-9 !min-h-9 sm:!min-w-10 sm:!min-h-10"
                href="https://dexscreener.com/solana/fa7wk5hqnszx1dcvbncgaj2rvgsknkwtnu3jydxvrsnw"
                target="_blank"
              >
                <Icon name="dexscreener" />
              </Mbutton>
              {/* Pump 链接 */}
              <Mbutton
                className="!min-w-9 !min-h-9 sm:!min-w-10 sm:!min-h-10"
                href="https://pump.fun/coin/BoGovexaH9cMKZg6bFgDgsrqj81MvWu6hKdcNK4Mpump"
                target="_blank"
              >
                <Icon name="pump" />
              </Mbutton>
            </div>

            {/* 合约地址显示和复制功能 */}
            <div className="flex justify-center mt-2">
              <Paragraph
                className="flex !text-white"
                copyable={{
                  text: t("home.contractAddress"),
                }}
              >
                <Ellipsis
                  className="text-lg opacity-80"
                  direction="middle"
                  content={t("home.contractAddress")}
                />
              </Paragraph>
            </div>
          </div>

          {/* 域名搜索输入框 */}
          <Input
            loading={searchStatus}
            placeholder="domain"
            addonBefore={`memes.ac /`}
            enterButton={
              searchStatus
                ? ""
                : search
                ? availableStatus
                  ? "Available"
                  : "Registered"
                : "Launch"
            }
            onSearch={(_) => {
              setAvailableStatus(false);
              setSearch(_);
              if (availableStatus) {
                // 域名可用时跳转到创建页面
                navigate("/create", { state: { domain: search } });
              } else {
                setSearchStatus(true);
                onSearchChange && onSearchChange(_);
              }
            }}
            onChange={(event) => {
              setAvailableStatus(false);
              setSearchStatus(true);
              setSearch(event.target.value);
              onSearchChange && onSearchChange(event.target.value);
            }}
          />

          {/* 合作伙伴展示区域 */}
          {features.showPartner && (
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center mt-8 gap-4 sm:gap-8">
              {partner.map((res, index) => (
                <a key={index} target="_blank" href={res.url}>
                  <Image
                    className="!w-auto !h-10 !object-contain"
                    src={res?.img}
                    preview={false}
                  />
                </a>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* 功能模块区域 */}
      <main className="flex justify-center px-4">
        <div className="w-full max-w-6xl flex justify-center flex-col gap-2 sm:gap-10">
          {/* 根据配置控制 Raid Leaders 模块显示 */}
          {features.showRaidLeaders && <Twitter />}
          {/* 我的域名模块 */}
          <MyDomain />
        </div>
      </main>
    </div>
  );
};

/**
 * 主页组件
 * 功能：
 * 1. 根据路由参数判断显示内容
 * 2. 处理域名数据的获取和初始化
 * 3. 设置页面 SEO 信息
 */
export default function Home() {
  // 获取路由参数中的域名
  const { domain } = useParams();

  // 域名相关数据状态
  const [datas, setDatas] = useState<any>({});

  /**
   * 初始化域名数据
   * 使用 useMemo 缓存初始化逻辑，避免重复请求
   */
  const init = useMemo(async () => {
    // 有域名参数时才请求数据
    const result: any = domain && (await domainAPI.verifyAPI({ domain }));
    let data = {
      ...result?.data,
      ...(result?.data?.config && JSON.parse(result?.data?.config)),
    };
    return {
      ...data,
      image: data?.logo_url,
      contractAddress: data?.contract_address,
    };
  }, [domain]);

  /**
   * 使用 useLayoutEffect 在渲染前初始化数据
   * 确保数据加载完成后再渲染页面
   */
  useLayoutEffect(() => {
    init.then((data) => setDatas(data));
  }, [init]);

  /**
   * 设置页面 SEO 信息
   * 域名页面：使用域名和图片
   * 首页：使用默认标题和图标
   */
  SEO(
    datas?.domain
      ? { title: datas?.domain || "", icon: datas?.image || "" }
      : { title: "$MEMES Memes.ac", icon: "/favicon.png" }
  );

  // 根据是否有域名参数决定渲染的组件
  return domain ? <Domain {...datas} /> : <View />;
}
