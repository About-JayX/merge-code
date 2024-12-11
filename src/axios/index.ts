import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

import { URL } from '@/config'

/**
 * Axios 基础配置
 * timeout: 请求超时时间（毫秒）
 * baseURL: API 基础URL，所有请求都会基于这个URL
 */
const config: AxiosRequestConfig = {
  timeout: 10000,
  baseURL: URL.baseURL,
}

/**
 * Axios 封装类
 * 提供统一的请求方法和拦截器配置
 */
class Axios {
  // Axios 实例
  service: AxiosInstance

  /**
   * 构造函数
   * @param config Axios配置对象
   */
  constructor(config: AxiosRequestConfig) {
    // 创建 Axios 实例
    this.service = axios.create(config)

    // 请求拦截器
    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 在发送请求之前可以做一些处理，比如添加token等
        return config
      }
    )

    // 响应拦截器
    this.service.interceptors.response.use((response: AxiosResponse) => {
      // 直接返回响应数据，省略掉外层的响应信息
      return response.data
    })
  }

  /**
   * GET 请求方法
   * @param url 请求地址
   * @param params 请求参数（查询字符串）
   */
  get(url: string, params?: object): Promise<unknown> {
    return this.service.get(url, { params })
  }

  /**
   * POST 请求方法
   * @param url 请求地址
   * @param params 请求体数据
   * @param config 额外的配置选项
   */
  post(
    url: string,
    params?: object | string,
    config?: AxiosRequestConfig<string | object>
  ): Promise<unknown> {
    return this.service.post(url, params, config)
  }

  /**
   * PUT 请求方法
   * @param url 请求地址
   * @param params 请求体数据
   */
  put(url: string, params?: object): Promise<unknown> {
    return this.service.put(url, params)
  }

  /**
   * DELETE 请求方法
   * @param url 请求地址
   * @param params 请求参数（查询字符串）
   */
  delete(url: string, params?: object): Promise<unknown> {
    return this.service.delete(url, { params })
  }
}

// 导出 Axios 实例
export default new Axios(config)
