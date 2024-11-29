import { createSlice } from '@reduxjs/toolkit'

export const user = createSlice({
  name: 'user',
  initialState: {
    token: '',
  } as {
    token: string
  },
  reducers: {
    updateToken(stores, actions) {
      stores.token = actions.payload
    },
  },
})

export const { updateToken } = user.actions

export default user.reducer
