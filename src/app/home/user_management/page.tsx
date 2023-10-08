import { Box, Card, CardContent, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Image from 'next/image'
import React, { FC, memo } from 'react'

const UserManagement: FC = memo(() => {
  return (
    <Grid container p={{ xs: 1, sm: 3 }}>
      <Grid width={260} height={260} m={1} display='flex' justifyContent='center'>
        <Card
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
                alt='Random image'
                src='https://source.unsplash.com/random'
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
              Hello
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              test
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
})

UserManagement.displayName = 'UserManagement'
export default UserManagement
