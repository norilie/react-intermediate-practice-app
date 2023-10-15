'use client'

import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { User } from '../types/api/user'
import { AlertProps } from '@mui/material'
import useStore from './useStore'

const useAuth = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { setSnackbar } = useStore()
  const login = useCallback(
    async (id: string) => {
      setLoading(true)
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        if (!response.ok) {
          setSnackbar('ユーザーが見つかりません', 'error')
        } else {
          const data: Array<User> = await response.json()
          setSnackbar('ログインしました', 'success')
          router.push('/home')
        }
      } catch (error) {
        setSnackbar('ログインできません', 'error')
      } finally {
        setLoading(false)
      }
    },
    [router, setSnackbar]
  )
  return { login, loading }
}

export default useAuth
