import { LoadingButton } from '@mui/lab'
import { FC, ReactNode, memo } from 'react'
type props = {
  children: ReactNode
  disabled?: boolean
  loading?: boolean
  onClick: () => void
}
const PrimaryButton: FC<props> = memo(props => {
  const { children, disabled = false, loading = false, onClick } = props
  return (
    <LoadingButton variant='contained' disabled={disabled || loading} loading={loading} onClick={onClick}>
      <span>{children}</span>
    </LoadingButton>
  )
})
PrimaryButton.displayName = 'PrimaryButton'
export default PrimaryButton
