import React from 'react'
import { useSelector } from 'react-redux'
import { authSelector } from '../store/Auth/selector'

export const AppRoutes: React.FC = () => {

  const { isAuth } = useSelector(authSelector)

  return (
    <div></div>
  )
}
