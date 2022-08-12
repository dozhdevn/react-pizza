import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAuth } from '../store/Auth'
import { AuthApi } from '../store/Auth/authApi'

export const LoginForm: React.FC = () => {

  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setUsername(value)
  }

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setPassword(value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(fetchAuth({username, password}))
  }

  return (
    <form
      className='login__form'
      onSubmit={handleSubmit}>
      <div className="login__item">
        <label>*Имя пользователя</label>
        <input
          className='login__input' type="text"
          onChange={handleChangeUsername}
          value={username}
          required />
      </div>
      <div className="login__item">
        <label>*Пароль</label>
        <input
          className='login__input' type="password"
          onChange={handleChangePassword}
          value={password}
          required />
      </div>
      <button type="submit">SIGN UP</button>
    </form>
  )
}
