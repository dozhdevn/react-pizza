import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from '.'
import { MainLayouts } from '../layouts/MainLayouts'
import { setIsAuth } from '../store/Auth'
import { authSelector } from '../store/Auth/selector'

export const AppRouter: React.FC = () => {
  const dispatch = useDispatch()
  const { isAuth } = useSelector(authSelector)

  useEffect(()=> {
    if(localStorage.getItem('auth')) {
      dispatch(setIsAuth(true))
    }
  }, [])

  return (
    isAuth ?
      <Switch>
        <MainLayouts>
          {privateRoutes.map(route =>
            <Route
              key={route.path}
              {...route} />)}
          <Redirect to={RouteNames.HOME} />
        </MainLayouts>
      </Switch>
      :
      <Switch>
        {publicRoutes.map(route =>
            <Route key={route.path} {...route} />)}
            <Redirect to={RouteNames.LOGIN} />
      </Switch>
  )
}
