import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

import { api } from '@/config'

/**
 * Axios 基础配置
 * timeout: 请求超时时间（毫秒）
 * baseURL: API 基础URL，所有请求都会基于这个URL
 */
const config: AxiosRequestConfig = {
  timeout: 10000,
  baseURL: api.baseURL,
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
   * 发送请求
   * @param config 请求配置
   * @returns Promise
   */
  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.service.request(config)
  }

  /**
   * 发送GET请求
   * @param url 请求地址
   * @param config 请求配置
   * @returns Promise
   */
  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.service.get(url, config)
  }

  /**
   * 发送POST请求
   * @param url 请求地址
   * @param data 请求数据
   * @param config 请求配置
   * @returns Promise
   */
  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.service.post(url, data, config)
  }
}

// 导出 Axios 实例
export default new Axios(config)
