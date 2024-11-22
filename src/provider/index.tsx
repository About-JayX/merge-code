import { Provider as StoreProvider } from "react-redux";
import Telegram from "@/provider/telegram";
import { store } from "@/store";
import Theme from "@/provider/theme";
import Web3 from "./web3";

export default function Provider({ children }: { children?: React.ReactNode }) {
  return (
    <StoreProvider store={store}>
      <Theme>
        <Telegram>
          <Web3>{children}</Web3>
        </Telegram>
      </Theme>
    </StoreProvider>
  );
}
