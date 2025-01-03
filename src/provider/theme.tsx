import { ConfigProvider, theme } from "antd";
export default function Theme({ children }: { children?: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        components: {
          Modal: {
            contentBg: "#0F0F0F",
          },
          Table: {
            headerBg: "rgba(255,255,255,0.1) !important",
            headerSplitColor: "rgba(255,255,255,0.1) !important",
          },
          Pagination: {
            itemBg: "rgba(255,255,255,0.1) !important",
            itemInputBg: "rgba(255,255,255,0.1) !important",
            itemLinkBg: "rgba(255,255,255,0.1) !important",
            itemActiveBg: "rgba(255,255,255,0.1) !important",
          },
          Select: {
            selectorBg: "#0F0F0F",
          },
          Button: {
            primaryColor: "#242904",
          },
        },
        token: {
          colorPrimary: "#FFC10B",
          colorBorder: "rgba(255,255,255,0.1) !important",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
