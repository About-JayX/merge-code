import axios from '@/axios'
import { CoinDetails } from './interface'

export const domain = {
  getListAPI: (data: { current?: number; pageSize?: number }) =>
    axios.post('/v2/domain/token-list', data),
  registerAPI: (data: CoinDetails) =>
    axios.post('/v2/domain/token-create', data),
  verifyAPI: (data: { domain: string }) =>
    axios.post('/v2/domain/token-search', data),
  uploadImageAPI: (data: FormData) =>
    axios.post('/v2/domain/update-images', data),
  loginAPI: (data: { address: string; signature: any; message: any }) =>
    axios.post('/v2/domain/wallet-login', data),
  ownerListAPI: (
    data: {
      current?: number
      pageSize?: number
    },
    token?: string
  ) =>
    axios.post('/v2/domain/token-list-user', data, {
      headers: { Authorization: token },
    }),

  updateDoMain: (data: any, token: string) =>
    axios.post('/v2/domain/edit-domian', data, {
      headers: { Authorization: token },
    }),
}
