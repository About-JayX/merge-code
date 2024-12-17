// import {
//   isTMA,
//   type LaunchParams,
//   retrieveLaunchParams,
//   SDKProvider,
//   useMiniAppRaw,
//   useSwipeBehaviorRaw,
//   useViewportRaw,
// } from "@telegram-apps/sdk-react";

// import { telegram } from "@/config";
// import { useAppDispatch } from "@/store";
// import {
//   updateInitData,
//   updateIsTelegram,
//   updateLaunchLoadStatus,
//   updatePostData,
//   updateUser,
// } from "@/store/telegram";
// import type { TelegramType } from "@/type";

// 暂时禁用所有 Telegram 相关功能
export default function Telegram({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}

export const TelegramProvider = Telegram;
