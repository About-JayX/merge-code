import { Provider as StoreProvider } from "react-redux";
import { store } from "@/store";
import Theme from "@/provider/theme";

export default function Provider({ children }: { children?: React.ReactNode }) {
  return (
    <StoreProvider store={store}>
      <Theme>
        {children}
      </Theme>
    </StoreProvider>
  );
}
