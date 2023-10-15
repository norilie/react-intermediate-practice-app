import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel,
  IconButton,
  Slide,
  Stack,
  TextField,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { FC, ReactElement, Ref, forwardRef, memo } from 'react'
import CloseIcon from '@mui/icons-material/Close'

type Props = {
  open: boolean
  onClose: () => void
}
const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})
const UserDetailModal: FC<Props> = memo(props => {
  const { open, onClose: handleClose } = props
  return (
    <Dialog onClose={handleClose} open={open} keepMounted TransitionComponent={Transition}>
      <DialogTitle variant='h6' fontWeight='bold'>
        ユーザー詳細
      </DialogTitle>
      <IconButton
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ mx: 2 }}>
        <Stack spacing={1}>
          <FormControl>
            <FormLabel>名前</FormLabel>
            <TextField
              variant='outlined'
              value='norilie'
              InputProps={{ readOnly: true }}
              size='small'
            />
          </FormControl>
          <FormControl>
            <FormLabel>フルネーム</FormLabel>
            <TextField
              variant='outlined'
              value='Norihiko Sawa'
              InputProps={{ readOnly: true }}
              size='small'
            />
          </FormControl>
          <FormControl>
            <FormLabel>MAIL</FormLabel>
            <TextField
              variant='outlined'
              value='12345@example.com'
              InputProps={{ readOnly: true }}
              size='small'
            />
          </FormControl>
          <FormControl>
            <FormLabel>TEL</FormLabel>
            <TextField
              variant='outlined'
              value='090-1111-2222'
              InputProps={{ readOnly: true }}
              size='small'
            />
          </FormControl>
        </Stack>
      </DialogContent>
    </Dialog>
  )
})

UserDetailModal.displayName = 'UserDetailModal'

export default UserDetailModal
