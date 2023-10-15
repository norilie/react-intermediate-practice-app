'use client'
import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material'
import { FC, SyntheticEvent, memo, useState } from 'react'
import MenuDrawer from '@/components/molecules/MenuDrawer'
import MenuIconButton from '@/components/atoms/MenuIconButton'
import { useRouter } from 'next/navigation'
import useStore from '@/app/hooks/useStore'
import ShowMessage from '@/components/atoms/ShowMessage'

export const pages = [
  { id: 1, name: 'TOP', url: '/home' },
  { id: 2, name: 'ユーザー一覧', url: '/home/user_management' },
  { id: 3, name: '設定', url: '/home/setting' },
]
const Header: FC = memo(() => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { snackbar, setSnackbar } = useStore()

  const handleCloseSnackbar = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackbar(null)
  }
  return (
    <>
      <AppBar position='static' sx={{ zIndex: 2000 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant='h4'
            noWrap
            component='a'
            href='/home'
            sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' }, mr: 3 }}
          >
            ユーザー管理アプリ
          </Typography>
          <Stack direction='row' alignItems='center' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            {pages.map((page, index: number) => (
              <div key={page.id}>
                {index > 0 && (
                  <Button onClick={() => router.push(page.url)} sx={{ my: 2, color: 'white', display: 'block' }}>
                    {page.name}
                  </Button>
                )}
              </div>
            ))}
          </Stack>

          <MenuIconButton onClick={() => setOpen(!open)} />
        </Toolbar>
      </AppBar>
      <MenuDrawer onClose={() => setOpen(!open)} open={open} />
      {!!snackbar && <ShowMessage snackbar={snackbar} onClose={handleCloseSnackbar} />}
    </>
  )
})

Header.displayName = 'Header'
export default Header
