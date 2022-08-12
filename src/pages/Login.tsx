import React from 'react'
import { useSelector } from 'react-redux'
import { LoginForm } from '../components/LoginForm'
import { selectAuth } from '../store/Auth/selector'

export const Login: React.FC = () => {
  const { isLoading, isError } = useSelector(selectAuth)
  return (
    <div className='login__wrapper'>
      {
        isLoading ?
        <h3>Ожидание...</h3> :
        <LoginForm error={isError}/>
      }
    </div>
  )
}
