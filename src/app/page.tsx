// 'use client'

// import PrimaryButton from '@/components/atoms/PrimaryButton'
// import { AlertProps, Card, CardContent, CardHeader, Divider, Stack, TextField } from '@mui/material'
// import Grid from '@mui/material/Unstable_Grid2/'
// import { ChangeEvent, FC, SyntheticEvent, memo, useState } from 'react'
// import useAuth from './hooks/useAuth'
// import ShowMessage from '@/components/atoms/ShowMessage'
// import useStore from './hooks/useStore'
import LoginCard from '@/components/organisms/login/LoginCard'
import { FC } from 'react'

const Login: FC = () => {
  return (
    <>
      <LoginCard />
    </>
  )
}

// Login.displayName = 'Login'
export default Login
