import { IconButton } from '@mui/material'
import { FC, memo } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

type Props = {
  onClick: () => void
}
const MenuIconButton: FC<Props> = memo(props => {
  const { onClick } = props
  return (
    <IconButton
      edge='end'
      color='inherit'
      aria-label='メニューボタン'
      onClick={onClick}
      sx={{ mr: 2, display: { xs: 'flex', sm: 'none' } }}
    >
      <MenuIcon />
    </IconButton>
  )
})

MenuIconButton.displayName = 'MenuIconButton'
export default MenuIconButton
