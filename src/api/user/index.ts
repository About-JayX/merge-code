import { request } from '../instance'
import {
  responseStatus,
  LoginResponse,
  BindWalletParams,
  EmojiItem,
  UserProfile,
  UpdateUserProfileParams,
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

export const updateUserProfileAPI = (
  params: UpdateUserProfileParams,
  token: string
) => {
  const formData = new FormData()
  if (params.file) formData.append('file', params.file)
  if (params.telegram) formData.append('telegram', params.telegram)
  if (params.x) formData.append('x', params.x)
  if (params.username) formData.append('username', params.username)

  return request.user.post<responseStatus<any>>('/auth/profile', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  })
}
export const uploadFileAPI = (formData: FormData, token: string) =>
  request.user.post<responseStatus<any>>('/creation/upload', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  })

// 格式化文件索引，补0到两位数
export const formatFileIndex = (index: number) => {
  return index.toString().padStart(2, '0')
}
