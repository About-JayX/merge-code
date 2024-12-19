import React, { Fragment, useEffect, useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Spin, Modal } from "antd";
import { images } from "@/assets/images";
import { copy } from "@/util";
import Tgs from "../tgs";
import { memesTextColor, memesTitleSize } from "./styles";
import { MemesCard, MemesIcon } from "./index";
import { useTranslation } from "react-i18next";

const FOUNDATION_ADDRESS = "31svWAq2Z7ng6rcKQV2ZkT3bY1bHqgo2XptoiRyxKra9";
const USDT_MINT = "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB";
const USDC_MINT = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
const MINIDOGE_MINT = "8J6CexwfJ8CSzn2DgWhzQe1NHd2hK9DKX59FCNNMo2hu";
const RPC_ENDPOINT =
  "https://boldest-broken-gas.solana-mainnet.quiknode.pro/95cb652a0dbf38d8ec52bfbe02e99a941ab51a67/";

const TokenLogo: React.FC<{ symbol: string; className?: string }> = ({
  symbol,
  className = "",
}) => {
  const logoMap: { [key: string]: string } = {
    MINIDOGE: images.logo,
    SOL: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
    USDT: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg",
    USDC: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
  };

  return (
    <div className={`token-logo ${className}`}>
      <img src={logoMap[symbol]} alt={symbol} className="rounded-full" />
    </div>
  );
};

export const FoundationBalanceItem = ({
  tokenIcon = "",
  tokenName = "",
  toeknBalances,
}: {
  tokenIcon?: string;
  tokenName?: string;
  toeknBalances?: any;
}) => {
  return (
    <div className="bg-white/5 p-4 sm:p-5 lg:p-8 rounded-xl flex items-center justify-between w-full">
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
        {toeknBalances}
      </span>
    </div>
  );
};

export default function FoundationBalance() {
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
          wsEndpoint: RPC_ENDPOINT.replace("https", "wss"),
        });
        const publicKey = new PublicKey(FOUNDATION_ADDRESS);

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

          if (tokenMint === USDT_MINT) {
            usdtBalance = amount;
          } else if (tokenMint === USDC_MINT) {
            usdcBalance = amount;
          } else if (tokenMint === MINIDOGE_MINT) {
            minidogeBalance = amount;
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
    await copy(FOUNDATION_ADDRESS, () => setIsModalOpen(true));
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
      <MemesCard className="bg-transparent !p-0 border border-white/10 overflow-hidden !opacity-100">
        <header className="p-6 sm:p-8 border-b border-white/10 flex flex-wrap items-center gap-3 sm:gap-4 justify-between bg-white/5">
          <div className="flex items-center gap-4 justify-between w-full sm:w-auto">
            <span
              className={`${memesTitleSize}  !text-xl md:!text-3xl lg:!text-4xl`}
            >
              Foundation Addr
            </span>
            <MemesIcon
              name="copy"
              className="!min-h-9 !min-w-9 !w-9 !h-9 sm:hidden"
              onClick={handleCopy}
              style={{
                background: "linear-gradient(to bottom, #FFAC03, #FFC10B)",
                color: "#000",
              }}
            />
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://solscan.io/account/${FOUNDATION_ADDRESS}`}
              target="_blank"
              className="break-all flex items-center roboto-mono px-3 sm:px-5 py-2.5 text-[#FFAC03] tracking-widest bg-gradient-to-r from-[rgba(255,172,3,0.15)] to-[rgba(255,193,11,0.05)] rounded-xl border border-[rgba(255,173,3,0.3)] text-base"
            >
              {FOUNDATION_ADDRESS}
            </a>
            <MemesIcon
              name="copy"
              className="!min-h-11 !min-w-11 !w-11 !h-11 hidden sm:flex"
              onClick={handleCopy}
              style={{
                background: "linear-gradient(to bottom, #FFAC03, #FFC10B)",
                color: "#000",
              }}
            />
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
                toeknBalances={balances.minidoge.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              />
              <FoundationBalanceItem
                tokenIcon="SOL"
                tokenName="SOL"
                toeknBalances={balances.sol.toLocaleString(undefined, {
                  maximumFractionDigits: 4,
                })}
              />
              <FoundationBalanceItem
                tokenIcon="USDT"
                tokenName="USDT"
                toeknBalances={balances.usdt.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              />
              <FoundationBalanceItem
                tokenIcon="USDC"
                tokenName="USDC"
                toeknBalances={balances.usdc.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              />
            </>
          )}
        </main>
      </MemesCard>
    </Fragment>
  );
}
