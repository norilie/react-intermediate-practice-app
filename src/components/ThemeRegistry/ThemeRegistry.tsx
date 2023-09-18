'use client'
import React, { ReactNode } from 'react'
import NextAppDirEmotionCacheProvider from './EmotionCache'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'

const ThemeRegistry = ({ children }: { children: ReactNode }) => {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}

export default ThemeRegistry
