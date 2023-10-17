import { Box, Card, CardContent, Typography } from '@mui/material'
import Image from 'next/image'
import { FC, memo } from 'react'

type Props = {
  id: number
  imageUrl: string
  userName: string
  fullName: string
  onClick: (id: number) => void
}

const UserCard: FC<Props> = memo(props => {
  const { id, imageUrl, userName, fullName, onClick: handleClick } = props
  return (
    <Card
      onClick={() => handleClick(id)}
      sx={{
        width: 260,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 2,
        backgroundColor: 'white',
        ':hover': {
          cursor: 'pointer',
          opacity: 0.8,
        },
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Box m={1}>
          <Image
            alt={userName}
            src={imageUrl}
            width={160}
            height={160}
            style={{
              borderRadius: '50%',
              maxWidth: '100%',
              height: '160px',
            }}
          />
        </Box>
        <Typography gutterBottom variant='h5' component='div' fontWeight='bold'>
          {userName}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {fullName}
        </Typography>
      </CardContent>
    </Card>
  )
})
UserCard.displayName = 'UserCard'

export default UserCard
