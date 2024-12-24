const baseURL = import.meta.env.DEV ? '/api' : 'https://donate.mini-doge.com'

export const getList = async (params?: { page: number; pageSize: number }) => {
  try {
    const queryParams = new URLSearchParams()
    if (params) {
      queryParams.append('page', params.page.toString())
      queryParams.append('pageSize', params.pageSize.toString())
    } else {
      queryParams.append('page', '1')
      queryParams.append('pageSize', '10')
    }

    const response = await fetch(
      `${baseURL}/members?${queryParams.toString()}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}
