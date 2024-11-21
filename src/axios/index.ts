import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import { URL } from "@/config";

const config: AxiosRequestConfig = {
  timeout: 3000,
  baseURL: URL.baseURL,
};
class Axios {
  service: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config);

    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config;
      }
    );
    this.service.interceptors.response.use((response: AxiosResponse) => {
      if (response.data.success) {
        return response.data.data;
      }
      return Promise.reject(response.data);
    });
  }
  get(url: string, params?: object): Promise<unknown> {
    return this.service.get(url, { params });
  }
  post(url: string, params?: object | string): Promise<unknown> {
    return this.service.post(url, params);
  }
  put(url: string, params?: object): Promise<unknown> {
    return this.service.put(url, params);
  }
  delete(url: string, params?: object): Promise<unknown> {
    return this.service.delete(url, { params });
  }
}

export default new Axios(config);
