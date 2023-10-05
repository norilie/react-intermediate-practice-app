import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { User } from '../types/api/user'
import { AlertProps } from '@mui/material'

const useAuth = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const login = useCallback(
    async (id: string, setSnackbar: Dispatch<SetStateAction<Pick<AlertProps, 'children' | 'severity'> | null>>) => {
      setLoading(true)
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        if (!response.ok) {
          setSnackbar({ children: 'ユーザーが見つかりません', severity: 'error' })
        } else {
          const data: Array<User> = await response.json()
          setSnackbar({ children: 'ログインしました', severity: 'success' })
          router.push('/home')
        }
      } catch (error) {
        setSnackbar({ children: 'ログインできません', severity: 'error' })
      } finally {
        setLoading(false)
      }
    },
    [router]
  )
  return { login, loading }
}

export default useAuth
