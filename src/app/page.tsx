'use client'

import PrimaryButton from '@/components/atoms/PrimaryButton'
import { AlertProps, Card, CardContent, CardHeader, Divider, Stack, TextField } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/'
import { ChangeEvent, FC, SyntheticEvent, memo, useEffect, useState } from 'react'
import useAuth from './hooks/useAuth'
import ShowMessage from '@/components/atoms/ShowMessage'

const Login: FC = memo(() => {
  const { login, loading } = useAuth()
  const [usrId, setUsrId] = useState('')
  const [snackbar, setSnackbar] = useState<Pick<AlertProps, 'children' | 'severity'> | null>(null)
  const onChangeUsrId = (e: ChangeEvent<HTMLInputElement>) => setUsrId(e.target.value)
  const onClickLogin = () => {
    login(usrId, setSnackbar)
  }
  const handleCloseSnackbar = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackbar(null)
  }
  return (
    <>
      <Grid container display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
        <Grid width={400} p={2}>
          <Card sx={{ borderRadius: 1 }}>
            <CardHeader
              title='ユーザー管理アプリ'
              titleTypographyProps={{ variant: 'h5', display: 'flex', justifyContent: 'center' }}
            />
            <Divider variant='middle' />
            <CardContent>
              <Stack spacing={2} py={2} px={4}>
                <TextField variant='outlined' placeholder='ユーザーID' value={usrId} onChange={onChangeUsrId} />
                <PrimaryButton disabled={usrId === ''} loading={loading} onClick={onClickLogin}>
                  ログイン
                </PrimaryButton>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        {!!snackbar && <ShowMessage snackbar={snackbar} onClose={handleCloseSnackbar} />}
      </Grid>
    </>
  )
})

Login.displayName = 'Login'
export default Login
