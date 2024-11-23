import { Web3ConfigProvider, Connector } from "@ant-design/web3";
import { WagmiWeb3ConfigProvider } from "@ant-design/web3-wagmi";
import Solana from "./solana";
export default function Web3({ children }: { children?: React.ReactNode }) {
  return (
    <Web3ConfigProvider>
      <WagmiWeb3ConfigProvider>
        <Solana>
          <Connector modalProps={{ mode: "simple" }}>{children}</Connector>
        </Solana>
      </WagmiWeb3ConfigProvider>
    </Web3ConfigProvider>
  );
}
