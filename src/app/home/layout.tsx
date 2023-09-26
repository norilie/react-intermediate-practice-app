import { ReactNode } from 'react'
import Header from '@/components/organisms/layout/Header'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
