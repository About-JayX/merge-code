const baseURL = import.meta.env.DEV ? '/api' : 'https://donate.mini-doge.com'

export const getList = async (params?: { page: number; limit: number }) => {
  try {
    const response = await fetch(
      `${baseURL}/get-users${
        params ? `?page=${params.page}&limit=${params.limit}` : ''
      }`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    throw new Error('request list error...')
  }
}
