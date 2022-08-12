import React from 'react'
import { Header } from '../components/Header'

interface MainLayoutsProps {
  children: React.ReactNode
}

export const MainLayouts: React.FC<MainLayoutsProps> = ({ children }) => {
  return (
    <div className='wrapper'>
      <Header />
      <div className="content">
       {children}
      </div>
    </div>
  )
}
