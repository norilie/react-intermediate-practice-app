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
          {pages.map((page, index: number) => (
            <Button
              key={page.pageName}
              onClick={() => {
                router.push(page.pageUrl)
                onClose()
              }}
            >
              {page.pageName}
            </Button>
          ))}
        </Stack>
      </Drawer>
    </>
  )
})

TemporaryDrawer.displayName = 'TemporaryDrawer'
export default TemporaryDrawer
