/**
 * 主题状态管理模块
 * 实现了以下功能：
 * 1. 主题状态的存储和更新
 * 2. 主题切换的异步处理
 * 3. 主题持久化（通过 localStorage）
 */

import { createSlice } from '@reduxjs/toolkit'
import { switchTheme } from '@/hook/theme/switchTheme'

export const theme = createSlice({
  // Slice 名称
  name: 'theme',
  
  // 初始状态
  initialState: {
    // 从 localStorage 获取主题设置，默认为亮色主题
    value: localStorage.getItem('theme') || 'light'
  } as {
    value: 'light' | 'dark'
  },
  
  // 同步操作的 reducers
  reducers: {
    // 更新主题状态
    updateTheme(state, action) {
      state.value = action.payload
    }
  },
  
  // 异步操作的 reducers
  extraReducers: builder => {
    // 处理主题切换的异步操作完成后的状态更新
    builder.addCase(switchTheme.fulfilled, (state, action) => {
      state.value = action.payload
    })
  }
})

// 导出同步操作的 action creators
export const { updateTheme } = theme.actions

// 导出 reducer
export default theme.reducer
