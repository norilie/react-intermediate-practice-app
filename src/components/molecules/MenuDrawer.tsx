import { Button } from '@mui/base'
import { Drawer, Stack } from '@mui/material'
import { FC, memo } from 'react'
import { pages } from '@/components/organisms/layout/Header'
import { useRouter } from 'next/navigation'

type Props = {
  onClose: () => void
  open: boolean
}
const TemporaryDrawer: FC<Props> = memo(props => {
  const { onClose, open } = props
  const router = useRouter()
  return (
    <>
      <Drawer anchor='left' open={open} onClose={onClose}>
        <Stack sx={{ width: 'auto', px: 4 }}>
          {pages.map(page => (
            <div key={page.id}>
              <Button
                onClick={() => {
                  router.push(page.url)
                  onClose()
                }}
              >
                {page.name}
              </Button>
            </div>
          ))}
        </Stack>
      </Drawer>
    </>
  )
})

TemporaryDrawer.displayName = 'TemporaryDrawer'
export default TemporaryDrawer
