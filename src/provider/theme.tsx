import { useAppSelector } from "@/store";
import { ConfigProvider, theme } from "antd";
export default function Theme({ children }: { children?: React.ReactNode }) {
  const { value } = useAppSelector((state) => state.theme);

  return (
    <ConfigProvider
      theme={{
        algorithm:
          value === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
        components: {
          Modal:{
            contentBg:"#0F0F0F"
          }
        },
        token: {
          colorPrimary:"#FFC10B"
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
