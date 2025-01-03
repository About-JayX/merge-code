import { useEffect } from 'react'
import { useSession } from '@clerk/clerk-react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAPI } from '@/api/user'
import { setUser } from '@/store/user'
import { RootState } from '@/store'

export const useClerkSession = () => {
  const { session } = useSession()
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user.user)

  useEffect(() => {
    const handleSession = async () => {
      if (session && !user) {
        try {
          const token = await session.getToken()
          if (token) {
            const response = await loginAPI(token)
            if (response.success) {
              dispatch(setUser(response.result))
            }
          }
        } catch (error) {
          console.error('处理 session 错误:', error)
        }
      }
    }

    handleSession()
  }, [session, dispatch, user])

  return { session }
}
