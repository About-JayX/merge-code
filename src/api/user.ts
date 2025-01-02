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
