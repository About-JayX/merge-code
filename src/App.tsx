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
export default function App() {
  const { setVisible } = useWalletModal();
  const { publicKey } = useWallet();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { value } = useAppSelector((state) => state.theme);

  return (
    <Fragment>
      {(pathname === "/" || pathname === "/user") && (
        <header className="flex justify-center h-20 items-center sticky top-0  backdrop-blur-sm p-4 z-10">
          <nav className="w-full max-w-6xl flex items-center gap-1 sm:gap-3">
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
              <div className="flex gap-1 sm:gap-2 items-center text-lg">
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
            <Mbutton
              className="!min-w-9 !min-h-9 sm:!min-w-10 sm:!min-h-10"
              onClick={() => dispatch(switchTheme())}
            >
              <Icon name={value} />
            </Mbutton>
            <Mbutton
              onClick={() => (publicKey ? navigate("/user") : setVisible(true))}
              className="!min-w-9 !min-h-9 sm:!min-w-10 sm:!min-h-10 break-all max-w-28"
              type="primary"
              target="_blank"
            >
              {publicKey ? (
                <Ellipsis direction="middle" content={publicKey?.toBase58()} />
              ) : (
                "Connect"
              )}
            </Mbutton>
          </nav>
        </header>
      )}

      <Router />
    </Fragment>
  );
}
