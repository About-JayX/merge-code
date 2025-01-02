import { request } from './instance'

// 用户相关的接口类型定义
export interface UserInfo {
  id: string
  email: string
  nickname?: string
  avatar?: string
  createdAt: string
  updatedAt: string
}

export interface LoginParams {
  email: string
  code: string
}

// 用户相关的 API 接口
export const userApi = {
  // 获取用户信息
  getUserInfo: () => request.user.get<UserInfo>('/info'),

  // 更新用户信息
  updateUserInfo: (data: Partial<UserInfo>) =>
    request.user.put<UserInfo>('/info', data),

  // 发送验证码
  sendVerificationCode: (email: string) =>
    request.user.post<void>('/send-code', { email }),

  // 邮箱验证码登录
  loginWithCode: (params: LoginParams) =>
    request.user.post<{ token: string }>('/login', params),

  // 退出登录
  logout: () => request.user.post<void>('/logout'),
}
