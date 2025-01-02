import { LoginResponse } from '@/api'
import { createSlice } from '@reduxjs/toolkit'

interface UserState {
  user: LoginResponse | null
}

// 从 localStorage 获取初始用户数据
const getInitialUser = (): LoginResponse | null => {
  const savedUser = localStorage.getItem('user')
  return savedUser ? JSON.parse(savedUser) : null
}

const initialState: UserState = {
  user: getInitialUser(),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload
      // 存储到 localStorage
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    clearUser: state => {
      state.user = null
      localStorage.removeItem('user')
    },
  },
  extraReducers: builder => {},
})

export const { getUser, clearUser } = userSlice.actions
export default userSlice.reducer
