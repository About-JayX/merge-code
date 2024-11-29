import { createSlice } from '@reduxjs/toolkit'

import { switchTheme } from '@/hook/theme/switchTheme'

export const theme = createSlice({
 // 全局名称
 name: 'theme',
 // 初始化全局
 initialState: {
  value: localStorage.getItem('theme') || 'dark'
 } as {
  value: 'light' | 'dark'
 },
 // 全局方法
 reducers: {
  // 更新主题
  updateTheme(state, action) {
   state.value = action.payload
  }
 },
 extraReducers: _builder => {
  // 异步处获取RPC请求
  _builder.addCase(switchTheme.fulfilled, (state, action) => {
   state.value = action.payload
  })
 }
})

// 全局方法
export const { updateTheme } = theme.actions

// 全局state
export default theme.reducer
