/**
 * Telegram 状态管理模块
 * 实现了以下功能：
 * 1. Telegram Mini App 的状态管理
 * 2. 用户信息和初始化数据的存储
 * 3. 加载状态的控制
 */

import { createSlice } from "@reduxjs/toolkit";
import type { InitDataParsed, User } from "@telegram-apps/sdk-react";
import type { TelegramType } from "@/type";

export const telegram = createSlice({
  // Slice 名称
  name: "telegram",
  
  // 初始状态
  initialState: {
    isTelegram: false,      // 是否在 Telegram 环境中运行
    initData: {},           // Telegram 初始化数据
    user: {},               // Telegram 用户信息
    postData: {},           // 帖子数据
    launchLoadStatus: true, // 启动加载状态
  } as {
    isTelegram?: boolean;
    initData?: InitDataParsed;
    user?: User;
    postData?: TelegramType.TelegramInitData;
    launchLoadStatus?: boolean;
  },
  
  // 状态更新方法
  reducers: {
    // 更新 Telegram 环境状态
    updateIsTelegram(state, action) {
      state.isTelegram = action.payload;
    },
    // 更新初始化数据
    updateInitData(state, action) {
      state.initData = action.payload;
    },
    // 更新用户信息
    updateUser(state, action) {
      state.user = action.payload;
    },
    // 更新帖子数据
    updatePostData(state, action) {
      state.postData = action.payload;
    },
    // 更新加载状态
    updateLaunchLoadStatus(state, action) {
      state.launchLoadStatus = action.payload;
    },
  },
});

// 导出 action creators
export const {
  updateIsTelegram,
  updateInitData,
  updateUser,
  updatePostData,
  updateLaunchLoadStatus,
} = telegram.actions;

// 导出 reducer
export default telegram.reducer;
