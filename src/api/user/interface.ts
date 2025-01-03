export interface responseStatus<T> {
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

// 绑定钱包的请求参数类型
export interface BindWalletParams {
  publicKey: string
}

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
  avatar: string | null
  x: string | null
  telegram: string | null
}

export interface UserProfile {
  donations: Array<any>
  emojis: Array<EmojiItem>
  user: {
    avatar: string | null
    username: string | null
    x: string | null
    telegram: string | null
    id: string
    sol_wallet_address: string | null
  }
}
