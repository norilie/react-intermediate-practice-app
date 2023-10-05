import { Alert, AlertProps, Snackbar } from '@mui/material'
import { FC, SyntheticEvent, memo } from 'react'

type Props = {
  snackbar: Pick<AlertProps, 'children' | 'severity'> | null
  onClose: (event?: SyntheticEvent | Event, reason?: string) => void
}

const ShowMessage: FC<Props> = memo((props: Props) => {
  const { snackbar, onClose: handleCloseSnackbar } = props

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open
      autoHideDuration={2000}
      onClose={handleCloseSnackbar}
    >
      <Alert {...snackbar} onClose={handleCloseSnackbar} elevation={6} variant='filled' />
    </Snackbar>
  )
})

ShowMessage.displayName = 'ShowMessage'
export default ShowMessage
