import React, { useEffect, useState } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { Card, Spin, Modal } from 'antd';
import { Ellipsis } from "antd-mobile";
import styled from 'styled-components';
import { images } from "@/assets/images";
import { copy } from "@/util";
import Tgs from "../tgs";
import { memesTextColor, memesTitleSize, memesTextSize, memesHover } from './styles';
import { MemesIcon } from './index';

const FOUNDATION_ADDRESS = '31svWAq2Z7ng6rcKQV2ZkT3bY1bHqgo2XptoiRyxKra9';
const USDT_MINT = 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB';
const USDC_MINT = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';
const MINIDOGE_MINT = '8J6CexwfJ8CSzn2DgWhzQe1NHd2hK9DKX59FCNNMo2hu';
const RPC_ENDPOINT = 'https://boldest-broken-gas.solana-mainnet.quiknode.pro/95cb652a0dbf38d8ec52bfbe02e99a941ab51a67/';

const StyledCard = styled(Card)`
  margin: 24px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: scale(1.05);
  }
  
  &.ant-card {
    background: rgba(15, 15, 15, 0.5);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    padding: 0;
    overflow: hidden;
  }
  
  .ant-card-head-title {
    display: flex;
    padding: 32px;
    
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      gap: 16px;
    }
    
    .title-text {
      ${memesTitleSize}
      text-align: left;
      font-family: 'Orbitron', sans-serif;
      font-size: 24px;
      @media (min-width: 640px) {
        font-size: 28px;
      }
      @media (min-width: 1280px) {
        font-size: 34px;
      }
    }
    .header-address {
      display: flex;
      align-items: center;
      gap: 16px;
      flex: 1;
      min-width: 300px;
      justify-content: flex-end;
      
      .address-text {
        font-size: 16px;
        font-weight: normal;
        cursor: pointer;
        ${memesHover}
        width: 100%;
        
        a {
          color: inherit;
          text-decoration: none;
          display: block;
          font-family: 'Roboto Mono', monospace;
          background: linear-gradient(90deg, rgba(255, 172, 3, 0.15) 0%, rgba(255, 193, 11, 0.05) 100%);
          padding: 10px 20px;
          border-radius: 12px;
          border: 1px solid rgba(255, 172, 3, 0.3);
          color: #FFAC03;
          transition: all 0.3s ease;
          letter-spacing: 1px;
          box-shadow: 0 4px 12px rgba(255, 172, 3, 0.1);
          backdrop-filter: blur(4px);
          
          &:hover {
            background: linear-gradient(90deg, rgba(255, 172, 3, 0.25) 0%, rgba(255, 193, 11, 0.15) 100%);
            border-color: rgba(255, 172, 3, 0.5);
            box-shadow: 0 6px 16px rgba(255, 172, 3, 0.2);
            transform: translateY(-1px);
          }

          &:active {
            transform: translateY(0px);
            box-shadow: 0 2px 8px rgba(255, 172, 3, 0.1);
          }
        }
      }
      .copy-icon {
        min-width: 38px;
        min-height: 38px;
        padding: 6px;
        flex-shrink: 0;
      }
    }
  }

  @media (max-width: 640px) {
    .ant-card-head-title {
      > div {
        flex-direction: column;
        gap: 12px;
        
        .title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        
        .header-address {
          width: 100%;
          min-width: unset;
          justify-content: flex-start;
          
          .address-text {
            font-size: 14px;
            width: 100%;
            
            a {
              word-break: break-all;
              white-space: normal;
              line-height: 1.5;
            }
          }
        }
      }
    }
    .ant-card-body {
      padding: 20px;
    }

    .balance-row {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .balance-item {
      padding: 20px;
    }
  }

  .balance-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;

    @media (max-width: 640px) {
      grid-template-columns: 1fr !important;
      gap: 16px;
    }
  }
  .balance-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 32px;
    background: rgba(20, 20, 20, 0.9);
    border-radius: 16px;
    ${memesTextSize}
    ${memesHover}

    @media (max-width: 640px) {
      padding: 16px 12px;
    }
  }
  .token-info {
    display: flex;
    align-items: center;
    gap: 16px;

    @media (max-width: 640px) {
      gap: 8px;
    }
  }
  .token-logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.1);
    padding: 3px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .ant-card-head {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    min-height: auto;
    background: rgba(20, 20, 20, 0.9);
  }
  .ant-card-body {
    padding: 32px;
    background: rgba(20, 20, 20, 0.5);
  }
  .balance-label {
    font-size: 18px;
    font-weight: 500;
    opacity: 0.9;
    text-transform: uppercase;
  }
  .balance-value {
    font-size: 18px;
    font-weight: bold;
  }
  .highlight {
    ${memesTextColor}
    font-weight: bold;
  }
  .loading-container {
    padding: 64px;
    text-align: center;
    .ant-spin {
      .ant-spin-dot-item {
        background-color: ${memesTextColor};
      }
    }
  }
`;

const TokenLogo: React.FC<{ symbol: string }> = ({ symbol }) => {
  const logoMap: { [key: string]: string } = {
    MINIDOGE: images.logo,
    SOL: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
    USDT: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg',
    USDC: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
  };

  return (
    <div className="token-logo">
      <img src={logoMap[symbol]} alt={symbol} />
    </div>
  );
};

const FoundationBalance: React.FC = () => {
  const [balances, setBalances] = useState<{
    sol: number;
    usdt: number;
    usdc: number;
    minidoge: number;
  }>({ sol: 0, usdt: 0, usdc: 0, minidoge: 0 });
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchBalances = async () => {
      try {
        const connection = new Connection(RPC_ENDPOINT, {
          commitment: 'confirmed',
          wsEndpoint: RPC_ENDPOINT.replace('https', 'wss'),
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
          const amount = tokenAccount.account.data.parsed.info.tokenAmount.uiAmount;

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
        console.error('获取余额失败:', error);
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
    <StyledCard 
      title={
        <div>
          {isMobile ? (
            <>
              <div className="title-row">
                <div className="title-text">Foundation Addr</div>
                <MemesIcon
                  name="copy"
                  className="copy-icon"
                  onClick={handleCopy}
                  style={{
                    background: 'linear-gradient(to bottom, #FFAC03, #FFC10B)',
                    color: '#000',
                  }}
                />
              </div>
              <div className="header-address">
                <div className="address-text">
                  <a 
                    href={`https://solscan.io/account/${FOUNDATION_ADDRESS}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="notranslate"
                  >
                    {FOUNDATION_ADDRESS}
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="title-text">Foundation Addr</div>
              <div className="header-address">
                <div className="address-text">
                  <a 
                    href={`https://solscan.io/account/${FOUNDATION_ADDRESS}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="notranslate"
                  >
                    {FOUNDATION_ADDRESS}
                  </a>
                </div>
                <MemesIcon
                  name="copy"
                  className="copy-icon"
                  onClick={handleCopy}
                  style={{
                    background: 'linear-gradient(to bottom, #FFAC03, #FFC10B)',
                    color: '#000',
                  }}
                />
              </div>
            </>
          )}
        </div>
      } 
      bordered={false}
    >
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
            复制成功
          </span>
        </div>
      </Modal>
      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
        </div>
      ) : (
        <div className="balance-row">
          <div className="balance-item">
            <div className="token-info">
              <TokenLogo symbol="MINIDOGE" />
              {!isMobile && <span className="balance-label highlight">MINIDOGE</span>}
            </div>
            <span className="balance-value highlight">{balances.minidoge.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
          </div>
          <div className="balance-item">
            <div className="token-info">
              <TokenLogo symbol="SOL" />
              {!isMobile && <span className="balance-label">SOL</span>}
            </div>
            <span className="balance-value">{balances.sol.toLocaleString(undefined, {maximumFractionDigits: 4})}</span>
          </div>
          <div className="balance-item">
            <div className="token-info">
              <TokenLogo symbol="USDT" />
              {!isMobile && <span className="balance-label">USDT</span>}
            </div>
            <span className="balance-value">{balances.usdt.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
          </div>
          <div className="balance-item">
            <div className="token-info">
              <TokenLogo symbol="USDC" />
              {!isMobile && <span className="balance-label">USDC</span>}
            </div>
            <span className="balance-value">{balances.usdc.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
          </div>
        </div>
      )}
    </StyledCard>
  );
};

export default FoundationBalance; 