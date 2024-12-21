import React, { Fragment, useEffect, useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Spin, Modal } from "antd";
import { SafetyCertificateOutlined, WarningOutlined } from "@ant-design/icons";
import { copy } from "@/util";
import Tgs from "../../tgs";
import {
  memesHover,
  memesTextColor,
  memesTextSize,
  memesTitleSize,
} from "../styles.ts";
import { Button } from "../index.tsx";
import { Card as LayoutCard } from "../common/Card.tsx";
import { MinidogeAddress, MinidogeCopy } from "../common/AddressCard.tsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FOUNDATION_CONFIG, RPC_ENDPOINT } from "@/config/foundation.ts";

type TokenLogos = {
  [key: string]: string;
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
  const tokenLogos = FOUNDATION_CONFIG.tokenLogos as TokenLogos;
  
  return (
    <div
      className={`bg-white/5 p-4 sm:p-5 lg:p-8 rounded-xl flex items-center justify-between w-full ${memesHover}`}
    >
      <div className="grid grid-cols-[auto,1fr] gap-4 items-center">
        <div className="w-10 h-10 rounded-full p-[3px] bg-white/10">
          <img
            src={tokenLogos[tokenIcon]}
            alt={tokenIcon}
            className="rounded-full"
          />
        </div>
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

const Funds: React.FC = ({ ...props }) => {
  const { t } = useTranslation();
  const [balances, setBalances] = useState<{
    sol: number;
    usdt: number;
    usdc: number;
    minidoge: number;
  }>({ sol: 0, usdt: 0, usdc: 0, minidoge: 0 });
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // 监听窗口大小变化，更新移动端状态
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchBalances = async () => {
      try {
        if (!FOUNDATION_CONFIG.address) {
          console.error("Foundation address is not defined");
          return;
        }

        const connection = new Connection(RPC_ENDPOINT, {
          commitment: "confirmed",
        });
        
        let publicKey: PublicKey;
        try {
          publicKey = new PublicKey(FOUNDATION_CONFIG.address);
        } catch (error) {
          console.error("Invalid public key:", error);
          return;
        }

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
          sol: solBalance / 1e9,
          usdt: usdtBalance,
          usdc: usdcBalance,
          minidoge: minidogeBalance,
        });
      } catch (error) {
        console.error("Get balance failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBalances();
    const interval = setInterval(fetchBalances, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = async () => {
    await copy(FOUNDATION_CONFIG.address, () => setIsModalOpen(true));
  };

  const renderHTML = (html: string) => {
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
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
      <LayoutCard className="bg-transparent !p-0 border border-white/10 overflow-hidden !opacity-100">
        <header className="p-6 sm:p-8 border-b border-white/10 bg-[rgba(20,20,20,0.9)]">
          {isMobile ? (
            // 移动端布局
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <span
                    className={`${memesTitleSize} !text-xl md:!text-3xl lg:!text-4xl`}
                    dangerouslySetInnerHTML={{ __html: t("public.foundationAddr") }}
                  />
                </div>
                <div className="flex items-center gap-4">
                  <Link to="/dao">
                    <Button
                      type="default"
                      className="!min-w-0 !px-4 h-[40px] flex items-center"
                    >
                      DAO
                    </Button>
                  </Link>
                  <MinidogeCopy
                    onClick={handleCopy}
                    className="!p-[6px]"
                    {...props}
                  />
                </div>
              </div>
              <MinidogeAddress
                address={FOUNDATION_CONFIG.address}
                isMobile={isMobile}
                onClick={handleCopy}
                href={FOUNDATION_CONFIG.solscanUrl}
                target="_blank"
                className="w-full"
                style={{
                  boxShadow: "0 4px 12px rgba(255, 172, 3, 0.1)",
                  backdropFilter: "blur(4px)",
                }}
              />
            </div>
          ) : (
            // PC端布局
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`${memesTitleSize} !text-xl md:!text-3xl lg:!text-4xl`}
                    dangerouslySetInnerHTML={{ __html: t("public.foundationAddr") }}
                  />
                </div>
                <Link to="/dao">
                  <Button type="default" className="!min-w-0 !px-4">
                    DAO
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 flex-1 max-w-[500px] justify-end">
                <div className="flex-1">
                  <MinidogeAddress
                    address={FOUNDATION_CONFIG.address}
                    isMobile={isMobile}
                    onClick={handleCopy}
                    href={FOUNDATION_CONFIG.solscanUrl}
                    target="_blank"
                    className="w-full"
                    style={{
                      boxShadow: "0 4px 12px rgba(255, 172, 3, 0.1)",
                      backdropFilter: "blur(4px)",
                    }}
                  />
                </div>
                <MinidogeCopy
                  onClick={handleCopy}
                  className="!p-[6px]"
                  {...props}
                />
              </div>
            </div>
          )}
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
        <footer className="p-6 sm:p-8 border-t border-white/10 bg-[rgba(20,20,20,0.5)]">
          <div className="flex flex-col gap-6">
            <div className="bg-white/5 rounded-xl p-4 sm:p-6">
              <div className="flex items-start gap-3">
                <SafetyCertificateOutlined className="text-[#FFAC03] text-xl mt-1" />
                <div>
                  <div
                    className="text-[#FFAC03] font-medium text-base sm:text-lg mb-2"
                    dangerouslySetInnerHTML={{ __html: t("public.foundationAddrTitle") }}
                  />
                  <div className="text-white/80 text-sm sm:text-base leading-relaxed">
                    <p>
                      <span
                        className="text-white font-medium"
                        dangerouslySetInnerHTML={{ __html: t("public.pleaseNote") }}
                      />
                      :{" "}
                      <span dangerouslySetInnerHTML={{ __html: t("public.fullNotice") }} />
                    </p>
                    <p className="mt-2">
                      <span
                        className="text-white font-medium"
                        dangerouslySetInnerHTML={{ __html: t("public.nftAirdrops") }}
                      />
                      :{" "}
                      <span dangerouslySetInnerHTML={{ __html: t("public.fullNftNotice") }} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 sm:p-6">
              <div className="flex items-start gap-3">
                <WarningOutlined className="text-[#ef4444] text-xl mt-1" />
                <div>
                  <div
                    className="text-[#ef4444] font-medium text-base sm:text-lg mb-2"
                    dangerouslySetInnerHTML={{ __html: t("public.disclaimer") }}
                  />
                  <div className="text-white/80 text-sm sm:text-base leading-relaxed">
                    <p dangerouslySetInnerHTML={{ __html: t("public.fullDisclaimer") }} />
                    <p className="mt-2">
                      <span className="text-white font-medium">
                        <span dangerouslySetInnerHTML={{ __html: t("public.beforeTransferring") }} />{" "}
                        <span dangerouslySetInnerHTML={{ __html: t("public.makeSureThat") }} />:
                      </span>
                    </p>
                    <ul className="list-disc list-inside mt-1 ml-2">
                      <li dangerouslySetInnerHTML={{ __html: t("public.checkAddress") }} />
                      <li dangerouslySetInnerHTML={{ __html: t("public.checkAwareness") }} />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </LayoutCard>
    </Fragment>
  );
};

export default Funds;

