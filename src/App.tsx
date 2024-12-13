/**
 * App.tsx
 * 主应用程序组件，负责以下功能：
 * 1. 全局布局结构的实现
 * 2. 导航栏的渲染和交互
 * 3. 钱包连接功能的集成
 * 4. 主题切换的实现
 * 5. 用户登录状态的管理
 */

import Router from "@/router";
import Mbutton from "@/components/memes/button";
import Icon from "./components/icon";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { switchTheme } from "./hook/theme/switchTheme";
import { useAppDispatch, useAppSelector } from "./store";
import { Ellipsis } from "antd-mobile";
import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router";
import { DownOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import { webTelegramUrl } from "./config";

/**
 * App 组件
 * 实现了应用的主要布局和功能：
 * - 顶部导航栏（仅在首页和用户页面显示）
 * - 钱包连接功能
 * - 主题切换
 * - 用户菜单
 */
export default function App() {
  const { setVisible } = useWalletModal();
  const { publicKey, disconnect } = useWallet();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { value } = useAppSelector((state) => state.theme);
  const { t } = useTranslation();
  return (
    <Fragment>
      {/* 顶部导航栏，仅在首页和用户页面显示 */}
      {(pathname === "/" || pathname === "/user") && (
        <header className="flex justify-center h-20 items-center fixed top-0 left-0 w-full backdrop-blur-sm p-4 px-3 z-50">
          {/* 导航栏内容容器 */}
          <nav className="w-full max-w-6xl flex items-center gap-1 sm:gap-3">
            {/* Logo 和网站名称 */}
            <a
              className="flex gap-1 items-center text-4xl font-bold flex-1"
              onClick={() => navigate("/")}
            >
              <img className="w-14 h-14 sm:w-16 sm:h-16" src="/favicon.png" />
              <div className="hidden sm:block">
                <img className="h-8 block dark:hidden" src="/logo-title.png" />
                <img
                  className="h-8 hidden dark:block"
                  src="/logo-title-dark.png"
                />
              </div>
            </a>
            {/* 主题切换按钮 */}
            <Mbutton
              type="card"
              onClick={() => dispatch(switchTheme())}
              className="!min-w-8 !min-h-8 sm:!min-w-10 sm:!min-h-10"
            >
              <Icon name={value} />
            </Mbutton>
            {/* 电报机器人按钮 */}
            <Mbutton
              type="card"
              target="_blank"
              href={webTelegramUrl}
              className="!min-w-8 !min-h-8 sm:!min-w-10 sm:!min-h-10"
            >
              <Icon name="telegramBot" />
            </Mbutton>
            {/* 钱包连接/用户菜单 */}
            {publicKey ? (
              <Dropdown
                placement="bottomCenter"
                menu={{
                  items: [
                    {
                      key: "user",
                      label: t("public.myPersonal"),
                      icon: <UserOutlined />,
                      onClick: () => navigate("/user"),
                    },
                    {
                      type: "divider",
                    },
                    {
                      key: "out",
                      label: t("public.disconnect"),
                      icon: <LogoutOutlined />,
                      onClick: () => disconnect(),
                    },
                  ],
                }}
              >
                <Mbutton
                  onClick={(e) => e.preventDefault()}
                  className="!min-w-24 !min-h-8 sm:!min-w-10 sm:!min-h-10 break-all max-w-32 !py-0"
                  type="card"
                  target="_blank"
                >
                  <Ellipsis
                    direction="middle"
                    content={publicKey?.toBase58()}
                  />
                  &nbsp;
                  <DownOutlined className="icon-hover" />
                </Mbutton>
              </Dropdown>
            ) : (
              <Mbutton
                onClick={() => setVisible(true)}
                className="!min-w-8 !min-h-8 sm:!min-w-10 sm:!min-h-10 break-all max-w-28"
                type="card"
                target="_blank"
              >
                {t("public.connect")}
              </Mbutton>
            )}
            {/* 购买 $MEMES 按钮 */}
            <Mbutton
              type="primary"
              target="_blank"
              href={t("home.bnt1.url")}
              className="!min-w-20 !min-h-8 sm:!min-w-10 sm:!min-h-10 break-all max-w-36"
            >
              {t("home.bnt1.title")}
            </Mbutton>
          </nav>
        </header>
      )}
      {/* 主要路由内容 */}
      <Router />
    </Fragment>
  );
}
