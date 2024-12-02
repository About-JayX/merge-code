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
          Button: {
            primaryShadow: "none !important",
          },
          Collapse: {
            headerBg: "var(--bg-color)",
            contentBg: "var(--bg-color)",
          },
          // Message: {
          //   algorithm: true,
          // },
        },
        token: {
          colorPrimary: "#0DC8EC",
          // colorBgContainer: "var(--bg-color) !important",
          // colorText: "var(--title-color) !important",
          colorBorder: "var(--border-color) !important",
          // colorLink: value === "dark" ? "#fffff !important" : "#000000 !important",
          // fontSize: 16,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
