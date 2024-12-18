/**
 * Redux Store 配置文件
 * 实现了以下功能：
 * 1. 全局状态管理的配置
 * 2. Redux store 的创建和组合
 * 3. TypeScript 类型支持
 * 4. 自定义 hooks 的封装
 */

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import theme from './theme'

// 组合所有 reducers
const rootReducer = combineReducers({
  theme,    // 主题相关状态
})

// 创建 Redux store
export const store = configureStore({
  reducer: rootReducer,
})

// 导出 TypeScript 类型定义
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// 导出类型安全的自定义 hooks
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
