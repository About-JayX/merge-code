import { request } from '../instance'
import {
  responseStatus,
  LoginResponse,
  BindWalletParams,
  EmojiItem,
  UserProfile,
} from './interface'

// 登录 API
export const loginAPI = (token: string) =>
  request.user.post<responseStatus<LoginResponse>>(
    '/auth/login',
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  )

// 绑定钱包 API
export const bindWalletAPI = (params: BindWalletParams, token: string) =>
  request.user.post<responseStatus<LoginResponse>>(
    '/auth/bind/wallet',
    params,
    { headers: { Authorization: `Bearer ${token}` } }
  )

// 获取 Emoji 列表
export const getEmojiAPI = (params?: {
  sort_by?: string
  order_by?: string
  page?: number
  page_size?: number
}) =>
  request.user.get<responseStatus<{ list: EmojiItem[]; total: number }>>(
    `/emoji?sort_by=${params?.sort_by || 'created_at'}&order_by=${
      params?.order_by || 'desc'
    }&page=${params?.page || 1}&page_size=${params?.page_size || 10}`
  )

export const getUserProfileAPI = (user_id: string) =>
  request.user.get<responseStatus<UserProfile>>(`/user?user_id=${user_id}`)
