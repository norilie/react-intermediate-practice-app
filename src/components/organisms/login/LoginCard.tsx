'use client'
import useAuth from '@/app/hooks/useAuth'
import useStore from '@/app/hooks/useStore'
import PrimaryButton from '@/components/atoms/PrimaryButton'
import ShowMessage from '@/components/atoms/ShowMessage'
import { Card, CardContent, CardHeader, Divider, Stack, TextField } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { ChangeEvent, FC, SyntheticEvent, memo, useState } from 'react'

const LoginCard: FC = memo(() => {
  const { login, loading } = useAuth()
  const { snackbar, setSnackbar } = useStore()
  const [usrId, setUsrId] = useState('')
  const onChangeUsrId = (e: ChangeEvent<HTMLInputElement>) => setUsrId(e.target.value)
  const onClickLogin = () => {
    login(usrId)
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
                <TextField
                  variant='outlined'
                  placeholder='ユーザーID'
                  value={usrId}
                  onChange={onChangeUsrId}
                />
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
LoginCard.displayName = 'LoginCard'
export default LoginCard
