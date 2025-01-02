import { request } from './instance'

interface responseStatus<T> {
  success: boolean
  result: T
}

export interface LoginParams {
  email: string
  code: string
}

// 登录 API 返回结果类型
export interface LoginResponse {
  profile: {
    username: string | null
    sol_wallet_address: string | null
    email: string
    role: 'member'
  }
  userId: string
}

// 登录 API
export const loginAPI = (token: string) =>
  request.user.post<responseStatus<LoginResponse>>(
    '/auth/login',
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  )

// 绑定钱包的请求参数类型
export interface BindWalletParams {
  publicKey: string
}

// 绑定钱包 API
export const bindWalletAPI = (params: BindWalletParams) =>
  request.user.post<responseStatus<LoginResponse>>('/auth/bind/wallet', params)

// Emoji 返回类型定义
export interface EmojiItem {
  id: string
  file_path: string
  file_type: string
  file_size: number
  emoji_name: string
  donation_count: number
  total_donation_amount: number | null
  like_count: number
  created_at: string
  author_id: string
  author_username: string | null
  author_account: string
  status: number
}

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
