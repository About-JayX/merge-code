/**
 * Redux Store 配置文件
 * 实现了以下功能：
 * 1. 全局状态管理的配置
 * 2. Redux store 的创建和组合
 * 3. TypeScript 类型支持
 * 4. 自定义 hooks 的封装
 */

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

import telegram from '@/store/telegram'
import theme from './theme'
import user from './user'
import tgs from './tgs'

// 组合所有 reducers
const rootReducer = combineReducers({
  telegram, // Telegram 相关状态
  theme,    // 主题相关状态
  user,     // 用户相关状态
  tgs
})

// 创建 Redux store
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // 关闭序列化检查，允许存储非序列化值
    }),
})

// 导出 TypeScript 类型定义
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// 导出类型安全的自定义 hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
