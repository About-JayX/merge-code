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
 * 主要视图组件
 */
export const View = () => {
  // 路由导航钩子
  const navigate = useNavigate();
  // 国际化翻译钩子
  const { t } = useTranslation();
  // 搜索相关状态
  const [search, setSearch] = useState<string>("");
  const [searchStatus, setSearchStatus] = useState<boolean>(false);
  const [availableStatus, setAvailableStatus] = useState<boolean>(false);

  /**
   * 处理域名搜索，使用防抖优化
   */
  const onSearchChange = useCallback(
    debounce(async (value) => {
      // 如果搜索值为空，重置状态
      if (value === "") {
        setAvailableStatus(false);
        setSearchStatus(false);
        return;
      }
      setSearch(value);
      // 调用API验证域名是否可用
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
      {/* 主要内容区域 */}
      <main className="bg-[#181a20] flex justify-center p-4 pt-20 sm:pt-40 pb-8 sm:pb-24 text-white">
        <div className="w-full max-w-6xl flex justify-center flex-col gap-6 sm:gap-10">
          {/* 标题区域 */}
          <div className="text-center grid gap-4 sm:gap-2 justify-items-center z-10">
            <div className="memes-title flex justify-center">
              <h1 className="text-4xl md:text-5xl font-bold uppercase btn-shine">
                {t("home.title")}
              </h1>
            </div>

            <span className="text-white/50 text-sm sm:text-base md:text-lg font-normal">
              {t("home.text")}
            </span>

            {/* 移动端社交媒体按钮 */}
            <div className="flex sm:hidden gap-1 sm:gap-2 items-center text-lg">
              {/* 社交媒体链接按钮组 */}
              <Mbutton
                href="https://t.me/memes_ac_entry"
                target="_blank"
                className="!min-w-9 !min-h-9 sm:!min-w-10 sm:!min-h-10"
              >
                <Icon name="telegram" />
              </Mbutton>
              <Mbutton
                href="https://x.com/memes_dot_ac"
                target="_blank"
                className="!min-w-9 !min-h-9 sm:!min-w-10 sm:!min-h-10"
              >
                <Icon name="twitter" />
              </Mbutton>
              <Mbutton
                className="!min-w-9 !min-h-9 sm:!min-w-10 sm:!min-h-10"
                href="https://dexscreener.com/solana/fa7wk5hqnszx1dcvbncgaj2rvgsknkwtnu3jydxvrsnw"
                target="_blank"
              >
                <Icon name="dexscreener" />
              </Mbutton>
              <Mbutton
                className="!min-w-9 !min-h-9 sm:!min-w-10 sm:!min-h-10"
                href="https://pump.fun/coin/BoGovexaH9cMKZg6bFgDgsrqj81MvWu6hKdcNK4Mpump"
                target="_blank"
              >
                <Icon name="pump" />
              </Mbutton>
            </div>

            {/* 合约地址显示区域 */}
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
                // 如果域名可用，跳转到创建页面
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
        </div>
      </main>

      {/* 功能模块区域 */}
      <main className="flex justify-center px-4">
        <div className="w-full max-w-6xl flex justify-center flex-col gap-2 sm:gap-10">
          {/* 根据配置决定是否显示 Raid Leaders 模块 */}
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
 */
export default function Home() {
  // 获取路由参数
  const { domain } = useParams();

  // 数据状态
  const [datas, setDatas] = useState<any>({});

  /**
   * 初始化数据
   */
  const init = useMemo(async () => {
    // 如果有域名参数，调用API获取数据
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

  // 使用useLayoutEffect钩子初始化数据
  useLayoutEffect(() => {
    init.then((data) => setDatas(data));
  }, [init]);

  // 设置SEO标题和图标
  SEO(
    datas?.domain
      ? { title: datas?.domain || "", icon: datas?.image || "" }
      : { title: "$MEMES Memes.ac", icon: "/favicon.png" }
  );

  // 如果有域名参数，渲染域名组件，否则渲染主视图组件
  return domain ? <Domain {...datas} /> : <View />;
}
