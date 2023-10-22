import {
  Button,
  Dialog,
  DialogActions,
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
import { FC, ReactElement, Ref, forwardRef, memo, useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { User } from '@/app/types/api/user'

type Props = {
  user: User | null
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
  const { user, open, onClose: handleClose } = props
  const [inputValue, setInputValue] = useState({
    // ...user,
    username: '',
    name: '',
    email: '',
    phone: '',
  })
  const handleChange = (e: { target: { name: string; value: string } }) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    })
  }
  useEffect(() => {
    setInputValue(prev => ({
      ...prev,
      ...user,
    }))
  }, [user])
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
              name='username'
              variant='outlined'
              value={inputValue.username}
              InputProps={{ readOnly: true }}
              size='small'
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>フルネーム</FormLabel>
            <TextField
              name='name'
              variant='outlined'
              value={inputValue.name}
              InputProps={{ readOnly: true }}
              size='small'
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>MAIL</FormLabel>
            <TextField
              name='email'
              variant='outlined'
              value={inputValue.email}
              InputProps={{ readOnly: true }}
              size='small'
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>TEL</FormLabel>
            <TextField
              name='phone'
              variant='outlined'
              value={inputValue.phone}
              InputProps={{ readOnly: true }}
              size='small'
              onChange={handleChange}
            />
          </FormControl>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  )
})

UserDetailModal.displayName = 'UserDetailModal'

export default UserDetailModal
