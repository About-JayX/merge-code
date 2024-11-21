import type { InitDataParsed, User } from "@telegram-apps/sdk-react";

export interface TelegramInitData {
  initData?: string;
  initDataUnsafe?: InitDataParsed | { authDate: number; user?: User };
}
