// import axios from '@/axios'
// import { CoinDetails } from './interface'

/**
 * 域名相关的 API 接口
 */
export const domain = {
  /**
   * 获取域名列表
   * @param data.current 当前页码
   * @param data.pageSize 每页数量
   */
  getListAPI: (_: { current?: number; pageSize?: number }) =>
    // axios.post('/v2/domain/token-list', data),
    Promise.resolve({ data: [] }),

  /**
   * 注册域名
   * @param data 域名详情
   */
  registerAPI: (_: any) =>
    // axios.post('/v2/domain/token-create', data),
    Promise.resolve({ data: null }),

  /**
   * 验证域名
   * @param data.domain 要验证的域名
   */
  verifyAPI: (_: { domain: string }) =>
    // axios.post('/v2/domain/token-search', data),
    Promise.resolve({ data: null }),

  /**
   * 上传图片
   * @param data FormData 对象
   * @returns 上传结果
   */
  uploadImageAPI: (_: FormData) =>
    // axios.post('/v2/domain/update-images', data),
    Promise.resolve({ data: null }),

  /**
   * 登录
   * @param data.address 钱包地址
   * @param data.signature 签名
   * @param data.message 消息
   */
  loginAPI: (_: { address: string; signature: any; message: any }) =>
    // axios.post('/v2/domain/wallet-login', data),
    Promise.resolve({ data: null }),

  /**
   * 获取用户域名列表
   * @param data.current 当前页码
   * @param data.pageSize 每页数量
   * @param token 用户token
   */
  ownerListAPI: (
    _: { current?: number; pageSize?: number },
    token: string,
  ) =>
    // axios.post('/v2/domain/token-list-user', data, {
    //   headers: {
    //     Authorization: token,
    //   },
    // }),
    Promise.resolve({ data: [] }),

  /**
   * 更新域名
   * @param data 域名详情
   * @param token 用户token
   */
  updateDoMain: (data: any, token: string) =>
    // axios.post('/v2/domain/edit-domian', data, {
    //   headers: {
    //     Authorization: token,
    //   },
    // }),
    Promise.resolve({ data: null }),
}
