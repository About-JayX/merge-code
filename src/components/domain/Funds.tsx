import React, { Fragment, useEffect, useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Spin, Modal } from "antd";
import { copy } from "@/util";
import Tgs from "../tgs";
import {
  memesHover,
  memesTextColor,
  memesTextSize,
  memesTitleSize,
} from "./styles";
import { Button } from "./index";
import { Card } from "./Icon";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FOUNDATION_CONFIG, RPC_ENDPOINT } from "@/config/foundation";

const TokenLogo: React.FC<{ symbol: string; className?: string }> = ({
  symbol,
  className = "",
}) => (
  <div className={`token-logo ${className}`}>
    <img
      src={FOUNDATION_CONFIG.tokenLogos[symbol]}
      alt={symbol}
      className="rounded-full"
    />
  </div>
);

export const MinidogeAddress = ({
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...props}
      className={`${memesTextSize} min-w-9 min-h-9 sm:min-w-12 sm:min-h-12 xl:min-w-14 xl:min-h-14 break-all flex items-center  px-3 sm:px-5 py-2.5 text-[#FFAC03] tracking-widest bg-gradient-to-r from-[rgba(255,172,3,0.15)] to-[rgba(255,193,11,0.05)] rounded-xl border border-[rgba(255,173,3,0.3)] text-base`}
    >
      {props.children}
    </a>
  );
};

export const MinidogeCopy = ({
  onClick,
  className = "",
  ...props
}: {
  [key: string]: any;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={`p-[6px] relative rounded-full cursor-pointer ${memesHover} ${className}`}
      onClick={() => onClick && onClick()}
    >
      <div
        className="absolute top-0 left-0 w-full h-full rounded-full -z-10 opacity-15"
        style={{
          background: props.button?.background,
        }}
      />
      <Card
        name="copy"
        className=" shadow-[0px_0px_8px_4px_rgba(0,0,0,0.25)_inset] min-w-[calc(48px-6px)] min-h-[calc(48px-6px)]  sm:min-w-[calc(56px-6px)] sm:min-h-[calc(56px-6px)]"
        style={{
          background: props.button?.background,
          color: props.button?.text,
        }}
      />
    </div>
  );
};

export const FoundationBalanceItem = ({
  tokenIcon = "",
  tokenName = "",
  tokenBalance = "",
}: {
  tokenIcon?: string;
  tokenName?: string;
  tokenBalance?: string;
}) => {
  return (
    <div
      className={`bg-white/5 p-4 sm:p-5 lg:p-8 rounded-xl flex items-center justify-between w-full ${memesHover}`}
    >
      <div className="grid grid-cols-[auto,1fr] gap-4 items-center">
        <TokenLogo
          symbol={tokenIcon}
          className="w-10 h-10 rounded-full p-[3px] bg-white/10"
        />
        <span
          className={`${memesTextColor} text-lg !opacity-90 font-medium text-white uppercase hidden lg:block`}
        >
          {tokenName}
        </span>
      </div>
      <span
        className={`${memesTextColor} text-lg !opacity-90 font-medium text-white uppercase`}
      >
        {tokenBalance}
      </span>
    </div>
  );
};

const Funds: React.FC = ({...props}) => {
  const { t } = useTranslation();
  const [balances, setBalances] = useState<{
    sol: number;
    usdt: number;
    usdc: number;
    minidoge: number;
  }>({ sol: 0, usdt: 0, usdc: 0, minidoge: 0 });
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchBalances = async () => {
      try {
        const connection = new Connection(RPC_ENDPOINT, {
          commitment: "confirmed",
        });
        const publicKey = new PublicKey(FOUNDATION_CONFIG.address);

        // 获取 SOL 余额
        const solBalance = await connection.getBalance(publicKey);

        // 获取代币账户
        const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
          publicKey,
          { programId: TOKEN_PROGRAM_ID }
        );

        let usdtBalance = 0;
        let usdcBalance = 0;
        let minidogeBalance = 0;

        tokenAccounts.value.forEach((tokenAccount) => {
          const tokenMint = tokenAccount.account.data.parsed.info.mint;
          const amount =
            tokenAccount.account.data.parsed.info.tokenAmount.uiAmount;

          switch (tokenMint) {
            case FOUNDATION_CONFIG.tokens.USDT:
              usdtBalance = amount;
              break;
            case FOUNDATION_CONFIG.tokens.USDC:
              usdcBalance = amount;
              break;
            case FOUNDATION_CONFIG.tokens.MINIDOGE:
              minidogeBalance = amount;
              break;
          }
        });

        setBalances({
          sol: solBalance / 1e9, // 转换为 SOL
          usdt: usdtBalance,
          usdc: usdcBalance,
          minidoge: minidogeBalance,
        });
      } catch (error) {
        console.error("获取余额失败:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBalances();
    const interval = setInterval(fetchBalances, 60000); // 每分钟更新一次
    return () => clearInterval(interval);
  }, []);

  const handleCopy = async () => {
    await copy(FOUNDATION_CONFIG.address, () => setIsModalOpen(true));
  };

  return (
    <Fragment>
      <Modal
        open={isModalOpen}
        centered
        footer={null}
        closable={false}
        width="auto"
      >
        <div className="flex flex-col items-center px-8 py-4">
          {isModalOpen && (
            <Tgs
              name="success"
              className="!w-24 !h-24 sm:!w-32 sm:!h-32 md:!w-40 md:!h-40"
              onChange={(value) => isModalOpen && setIsModalOpen(!value)}
            />
          )}
          <span className="text-lg sm:text-xl md:text-2xl font-bold mt-2">
            {t("message.copy.success")}
          </span>
        </div>
      </Modal>
      <Card className="bg-transparent !p-0 border border-white/10 overflow-hidden !opacity-100">
        <header className="p-6 sm:p-8 border-b border-white/10 flex flex-wrap items-center gap-3 sm:gap-4 justify-between bg-white/5">
          <div className="flex items-center gap-4 justify-between w-full sm:w-auto">
            <div className="flex items-center gap-4">
              <span
                className={`${memesTitleSize} !text-xl md:!text-3xl lg:!text-4xl`}
              >
                {t("public.foundationAddr")}
              </span>
              <Link to="/dao">
                <Button type="default" className="!min-w-0 !px-4">
                  DAO
                </Button>
              </Link>
            </div>
            <MinidogeCopy onClick={handleCopy} className="sm:hidden" {...props}/>
          </div>

          <div className="flex items-center gap-4">
            <MinidogeAddress
              href={FOUNDATION_CONFIG.solscanUrl}
              target="_blank"
            >
              {FOUNDATION_CONFIG.address}
            </MinidogeAddress>
            <MinidogeCopy onClick={handleCopy} className="hidden sm:flex" {...props}/>
          </div>
        </header>
        <main
          className={`p-6 sm:p-8 grid ${
            loading ? "" : "sm:grid-cols-2"
          } gap-4 justify-items-center`}
        >
          {loading ? (
            <div className="p-16">
              <Spin size="large" />
            </div>
          ) : (
            <>
              <FoundationBalanceItem
                tokenIcon="MINIDOGE"
                tokenName="MINIDOGE"
                tokenBalance={balances.minidoge.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              />
              <FoundationBalanceItem
                tokenIcon="SOL"
                tokenName="SOL"
                tokenBalance={balances.sol.toLocaleString(undefined, {
                  maximumFractionDigits: 4,
                })}
              />
              <FoundationBalanceItem
                tokenIcon="USDT"
                tokenName="USDT"
                tokenBalance={balances.usdt.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              />
              <FoundationBalanceItem
                tokenIcon="USDC"
                tokenName="USDC"
                tokenBalance={balances.usdc.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              />
            </>
          )}
        </main>
      </Card>
    </Fragment>
  );
};

export default Funds;
