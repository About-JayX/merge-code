const baseURL = import.meta.env.DEV ? 'https://donate.mini-doge.com' : 'https://donate.mini-doge.com'

export const getList = async (params?: { page: number; pageSize: number }) => {
  try {
    const queryParams = new URLSearchParams({
      page: (params?.page ?? 1).toString(),
      pageSize: (params?.pageSize ?? 10).toString(),
    })

    const response = await fetch(
      `${baseURL}/members?${queryParams.toString()}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
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
