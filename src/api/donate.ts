import { request } from './instance'

interface ListParams {
  page?: number
  pageSize?: number
}

// 直接导出 getList 方法
export const getList = (params?: ListParams) =>
  request.donate.get<any>('/members', {
    params: {
      page: params?.page ?? 1,
      pageSize: params?.pageSize ?? 10,
    },
  })
