import { AlertColor, AlertProps } from '@mui/material'
import { create } from 'zustand'

type Store = {
  snackbar: Pick<AlertProps, 'children' | 'severity'> | null
  setSnackbar: (children: string | null, severity?: AlertColor | null) => void
}

const useStore = create<Store>(set => ({
  snackbar: null,
  setSnackbar: (children, severity?) => {
    set({ snackbar: children ? { children, severity: severity ?? undefined } : null })
  },
}))

export default useStore
