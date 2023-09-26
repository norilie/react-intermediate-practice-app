'use client'
import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material'
import { FC, memo, useState } from 'react'
import MenuDrawer from '@/components/molecules/MenuDrawer'
import MenuIconButton from '@/components/atoms/MenuIconButton'
import { useRouter } from 'next/navigation'

export const pages = [
  { pageName: 'TOP', pageUrl: '/home' },
  { pageName: 'ユーザー一覧', pageUrl: '/home/user_management' },
  { pageName: '設定', pageUrl: '/home/setting' },
]
const Header: FC = memo(() => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

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
              <>
                {index > 0 && (
                  <Button
                    key={page.pageName}
                    onClick={() => router.push(page.pageUrl)}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.pageName}
                  </Button>
                )}
              </>
            ))}
          </Stack>

          <MenuIconButton onClick={() => setOpen(!open)} />
        </Toolbar>
      </AppBar>
      <MenuDrawer onClose={() => setOpen(!open)} open={open} />
    </>
  )
})

Header.displayName = 'Header'
export default Header
