import { ConfigProvider, theme } from "antd";
export default function Theme({ children }: { children?: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        components: {
          Button: {
            primaryShadow: "none !important",
          },
          Collapse: {
            headerBg: "var(--card-color)",
            contentBg: "var(--card-color)",
          },
        },
        token: {
          // colorPrimary: "#0DC8EC",
          // colorBgContainer: "var(--bg-color) !important",
          // colorText: "var(--title-color) !important",
          // colorBorder: "rgba(255,255,255,0.1)",
          colorLink: "white",
          // fontSize: 16,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
