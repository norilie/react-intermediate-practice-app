import { create } from 'zustand'
import { User } from '../types/api/user'

type LoginUser = {
  loginUser: User | null
  isAdmin: boolean
  setLoginUser: (user: User | null, admin: boolean) => void
}
const useLoginUser = create<LoginUser>(set => ({
  loginUser: null,
  isAdmin: false,
  setLoginUser: (user, admin) => {
    set({ loginUser: user ? user : null, isAdmin: admin })
  },
}))

export default useLoginUser
