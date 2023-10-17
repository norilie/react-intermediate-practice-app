'use client'
import useAllUsers from '@/app/hooks/useAllUsers'
import UserCard from '@/components/organisms/user/UserCard'
import { Box, CircularProgress } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React, { FC, memo, useCallback, useEffect, useState } from 'react'
import UserDetailModal from '@/components/organisms/user/UserDetailModal'
import useSelectUser from '@/app/hooks/useSelectUser'

const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = useAllUsers()
  useEffect(() => {
    const fetchData = async () => {
      await getUsers()
    }
    fetchData()
  }, [])
  const { onSelectUser, selectedUser } = useSelectUser()

  const [open, setOpen] = useState(false)
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])
  const handleClickUser = useCallback(
    (id: number) => {
      console.log('id', id)
      onSelectUser({ id, users, setOpen })
    },
    [onSelectUser, users]
  )

  return (
    <>
      {loading ? (
        <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container p={{ xs: 1, sm: 3 }}>
          {users.map(user => (
            <Grid
              width={260}
              height={260}
              m={1}
              display='flex'
              justifyContent='center'
              key={user.id}
              mx='auto'
            >
              <UserCard
                id={user.id}
                imageUrl='https://source.unsplash.com/random'
                userName={user.username}
                fullName={user.name}
                onClick={handleClickUser}
              />
            </Grid>
          ))}
        </Grid>
      )}
      <UserDetailModal user={selectedUser} open={open} onClose={handleClose} />
    </>
  )
})

UserManagement.displayName = 'UserManagement'
export default UserManagement
