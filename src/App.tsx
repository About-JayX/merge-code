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
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";

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

  return (
    <Fragment>
      {/* 顶部导航栏，仅在首页和用户页面显示 */}
      {(pathname === "/" || pathname === "/user") && (
        <header className="flex justify-center h-20 items-center fixed top-0 left-0 w-full backdrop-blur-sm p-4 z-50">
          {/* 导航栏内容容器 */}
          <nav className="w-full max-w-6xl flex items-center gap-1 sm:gap-3">
            {/* Logo 和网站名称 */}
            <a
              className="flex gap-1 items-center text-4xl font-bold flex-1"
              onClick={() => navigate("/")}
            >
              <img className="w-14 h-14 sm:w-16 sm:h-16" src="/favicon.png" />
              <span className="hidden sm:block bg-clip-text text-transparent bg-gradient-to-b from-[#9E45FC] to-[#0DADCE]">
                MEMES
              </span>
            </a>
            <div>
              {/* 社交媒体链接按钮组 */}
              <div className="hidden sm:flex gap-1 sm:gap-2 items-center text-lg ">
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
            </div>
            {/* 主题切换按钮 */}
            <Mbutton
              onClick={() => dispatch(switchTheme())}
              className="!min-w-9 !min-h-9 sm:!min-w-10 sm:!min-h-10"
            >
              <Icon name={value} />
            </Mbutton>
            {/* 钱包连接/用户菜单 */}
            {publicKey ? (
              <Dropdown
                placement="bottomRight"
                menu={{
                  items: [
                    {
                      key: "user",
                      label: "My Personal",
                      icon: <UserOutlined />,
                      onClick: () => navigate("/user"),
                    },
                    {
                      type: 'divider',
                    },
                    {
                      key: "out",
                      label: "Disconnect",
                      icon: <LogoutOutlined />,
                      onClick: () => disconnect(),
                    },
                  ],
                }}
              >
                <Mbutton
                  onClick={(e) => e.preventDefault()}
                  className="!min-w-36 !min-h-9 sm:!min-w-10 sm:!min-h-10 break-all max-w-36"
                  type="primary"
                  target="_blank"
                >
                  <Ellipsis
                    direction="middle"
                    content={publicKey?.toBase58()}
                  />
                </Mbutton>
              </Dropdown>
            ) : (
              <Mbutton
                onClick={() => setVisible(true)}
                className="!min-w-9 !min-h-9 sm:!min-w-10 sm:!min-h-10 break-all max-w-28"
                type="primary"
                target="_blank"
              >
                Connect
              </Mbutton>
            )}
          </nav>
        </header>
      )}
      {/* 主要路由内容 */}
      <Router />
    </Fragment>
  );
}
