import { Web3ConfigProvider, Connector } from "@ant-design/web3";
import {
  ImToken,
  MetaMask,
  MobileWallet,
  OkxWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
} from "@ant-design/web3-wagmi";
import Solana from "./solana";
export default function Web3({ children }: { children?: React.ReactNode }) {
  return (
    <Web3ConfigProvider>
      <WagmiWeb3ConfigProvider
        eip6963
        wallets={[
          MetaMask(),
          WalletConnect(),
          TokenPocket(),
          OkxWallet(),
          ImToken(),
          MobileWallet(),
        ]}
      >
        <Solana>
          <Connector modalProps={{ mode: "simple" }}>{children}</Connector>
        </Solana>
      </WagmiWeb3ConfigProvider>
    </Web3ConfigProvider>
  );
}
