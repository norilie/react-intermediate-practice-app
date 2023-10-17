import { useCallback, useState } from 'react'
import { User } from '../types/api/user'

type Props = {
  id: number
  users: Array<User>
  setOpen: (open: boolean) => void
}

const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>()
  const onSelectUser = useCallback((props: Props) => {
    const { id, users, setOpen } = props
    const targetUser = users.find(user => user.id === id)
    if (targetUser == undefined) {
      setSelectedUser(null)
    } else {
      setSelectedUser(targetUser)
    }
    setOpen(true)
  }, [])
  return { onSelectUser, selectedUser }
}

export default useSelectUser
