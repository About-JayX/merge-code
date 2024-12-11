import axios from '@/axios'
import { CoinDetails } from './interface'

/**
 * 域名相关的 API 接口
 */
export const domain = {
  /**
   * 获取域名列表
   * @param data.current 当前页码
   * @param data.pageSize 每页数量
   */
  getListAPI: (data: { current?: number; pageSize?: number }) =>
    axios.post('/v2/domain/token-list', data),

  /**
   * 注册新域名
   * @param data 域名和项目详细信息
   */
  registerAPI: (data: CoinDetails) =>
    axios.post('/v2/domain/token-create', data),

  /**
   * 验证域名是否可用
   * @param data.domain 要验证的域名
   */
  verifyAPI: (data: { domain: string }) =>
    axios.post('/v2/domain/token-search', data),

  /**
   * 上传图片
   * @param data FormData 包含图片文件
   */
  uploadImageAPI: (data: FormData) =>
    axios.post('/v2/domain/update-images', data),

  /**
   * 钱包登录
   * @param data.address 钱包地址
   * @param data.signature 签名
   * @param data.message 消息
   */
  loginAPI: (data: { address: string; signature: any; message: any }) =>
    axios.post('/v2/domain/wallet-login', data),

  /**
   * 获取用户拥有的域名列表
   * @param data.current 当前页码
   * @param data.pageSize 每页数量
   * @param token 认证令牌
   */
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

  /**
   * 更新域名信息
   * @param data 更新的数据
   * @param token 认证令牌
   */
  updateDoMain: (data: any, token: string) =>
    axios.post('/v2/domain/edit-domian', data, {
      headers: { Authorization: token },
    }),
}
