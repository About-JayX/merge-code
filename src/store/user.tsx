/**
 * 用户状态管理模块
 * 实现了以下功能：
 * 1. 用户认证 token 的管理
 * 2. 用户登录状态的维护
 * 3. 提供 token 更新的操作
 */

import { createSlice } from '@reduxjs/toolkit'

export const user = createSlice({
  // Slice 名称
  name: 'user',
  
  // 初始状态
  initialState: {
    token: sessionStorage.getItem('token') || "", // 用户认证 token
  } as {
    token: string
  },
  
  // 状态更新方法
  reducers: {
    // 更新用户 token
    updateToken(state, action) {
      state.token = action.payload
      sessionStorage.setItem('token',action.payload)
    },
  },
})

// 导出 action creators
export const { updateToken } = user.actions

// 导出 reducer
export default user.reducer
