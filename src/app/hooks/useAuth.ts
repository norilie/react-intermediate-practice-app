'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { User } from '../types/api/user'
import useStore from './useStore'
import useLoginUser from './useLoginUser'

const useAuth = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { setSnackbar } = useStore()
  const { setLoginUser } = useLoginUser()
  const login = useCallback(
    async (id: string) => {
      setLoading(true)
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        if (!response.ok) {
          setSnackbar('ユーザーが見つかりません', 'error')
        } else {
          const data: User = await response.json()
          setLoginUser(data, data.id === 10)
          setSnackbar('ログインしました', 'success')
          router.push('/home')
        }
      } catch (error) {
        setSnackbar('ログインできません', 'error')
      } finally {
        setLoading(false)
      }
    },
    [router, setSnackbar, setLoginUser]
  )
  return { login, loading }
}

export default useAuth
