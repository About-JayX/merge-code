import { createSlice } from "@reduxjs/toolkit";
import type { InitDataParsed, User } from "@telegram-apps/sdk-react";

import type { TelegramType } from "@/type";

export const telegram = createSlice({
  name: "telegram",
  initialState: {
    isTelegram: false,
    initData: {},
    user: {},
    postData: {},
    launchLoadStatus: true,
  } as {
    isTelegram?: boolean;
    initData?: InitDataParsed;
    user?: User;
    postData?: TelegramType.TelegramInitData;
    launchLoadStatus?: boolean;
  },
  reducers: {
    updateIsTelegram(stores, actions) {
      stores.isTelegram = actions.payload;
    },
    updateInitData(stores, actions) {
      stores.initData = actions.payload;
    },
    updateUser(stores, actions) {
      stores.user = actions.payload;
    },
    updatePostData(stores, actions) {
      stores.postData = actions.payload;
    },
    updateLaunchLoadStatus(stores, actions) {
      stores.launchLoadStatus = actions.payload;
    },
  },
});

export const {
  updateIsTelegram,
  updateInitData,
  updateUser,
  updatePostData,
  updateLaunchLoadStatus,
} = telegram.actions;

export default telegram.reducer;
