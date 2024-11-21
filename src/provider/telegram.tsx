import {
  isTMA,
  type LaunchParams,
  retrieveLaunchParams,
  SDKProvider,
  useMiniAppRaw,
  useSwipeBehaviorRaw,
  useViewportRaw,
} from "@telegram-apps/sdk-react";

import { telegram } from "@/config";
import { useAppDispatch } from "@/store";
import {
  updateInitData,
  updateIsTelegram,
  updateLaunchLoadStatus,
  updatePostData,
  updateUser,
} from "@/store/telegram";
import type { TelegramType } from "@/type";

export const TelegramProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();
  const viewport = useViewportRaw(true)?.result;
  const swipeBehavior = useSwipeBehaviorRaw(true)?.result;
  const miniApp = useMiniAppRaw(true)?.result;
  const { initData, initDataRaw } = miniApp
    ? retrieveLaunchParams()
    : ({} as LaunchParams);

  viewport && !viewport.isExpanded && viewport.expand();
  swipeBehavior && swipeBehavior.disableVerticalSwipe();
  miniApp && miniApp.ready();

  const data: TelegramType.TelegramInitData = miniApp
    ? {
        initData: initDataRaw,
        initDataUnsafe: {
          ...initData,
          ...{ authDate: Number(initData?.authDate.getTime()) / 1000 },
        },
      }
    : telegram.telegramInitData;
  dispatch(updateInitData(data.initDataUnsafe));
  dispatch(updateUser(data.initDataUnsafe?.user));
  dispatch(updatePostData(data));
  miniApp && dispatch(updateLaunchLoadStatus(false));

  return children;
};

export default function Telegram({ children }: { children?: React.ReactNode }) {
  const dispatch = useAppDispatch();
  isTMA().then((item) => {
    dispatch(updateIsTelegram(item));
  });
  return (
    <SDKProvider debug>
      <TelegramProvider>{children}</TelegramProvider>
    </SDKProvider>
  );
}
