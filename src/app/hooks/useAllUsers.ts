import { useCallback, useState } from 'react'
import { User } from '../types/api/user'
import useStore from './useStore'

const useAllUsers = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<Array<User>>([])
  const { setSnackbar } = useStore()
  const getUsers = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!response.ok) {
        setSnackbar('ユーザーの取得に失敗しました', 'error')
      } else {
        const data: Array<User> = await response.json()
        setUsers(data)
      }
    } catch (error) {
      setSnackbar('ユーザー取得に失敗しました', 'error')
    } finally {
      setLoading(false)
    }
  }, [setSnackbar])
  return { getUsers, loading, users }
}

export default useAllUsers
