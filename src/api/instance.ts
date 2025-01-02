import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// 创建用户相关的 axios 实例
export const userInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_USER_API_URL || '/userApi',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 创建捐赠相关的 axios 实例
export const donateInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.DEV
    ? 'https://donate.mini-doge.com'
    : 'https://donate.mini-doge.com',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

// 请求拦截器
const setupInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    config => {
      // 从 localStorage 获取 token
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      // 用户实例处理响应数据
      return response.data
    },
    error => {
      // 统一处理错误
      if (error.response) {
        switch (error.response.status) {
          case 401:
            // 处理未授权
            localStorage.removeItem('token')
            break
          case 403:
            // 处理禁止访问
            break
          case 404:
            // 处理未找到
            break
          case 500:
            // 处理服务器错误
            break
        }
      }
      return Promise.reject(error)
    }
  )
}

// 为两个实例设置拦截器
setupInterceptors(userInstance)
setupInterceptors(donateInstance)

// 响应数据的类型定义
export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
}

// 统一的请求方法
export const request = {
  user: {
    get: <T = any>(url: string, config?: AxiosRequestConfig) =>
      userInstance.get<any, T>(url, config),
    post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
      userInstance.post<any, T>(url, data, config),
    put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
      userInstance.put<any, T>(url, data, config),
    delete: <T = any>(url: string, config?: AxiosRequestConfig) =>
      userInstance.delete<any, T>(url, config),
  },
  donate: {
    get: <T = any>(url: string, config?: AxiosRequestConfig) =>
      donateInstance.get<any, T>(url, config),
    post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
      donateInstance.post<any, T>(url, data, config),
    put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
      donateInstance.put<any, T>(url, data, config),
    delete: <T = any>(url: string, config?: AxiosRequestConfig) =>
      donateInstance.delete<any, T>(url, config),
  },
}
