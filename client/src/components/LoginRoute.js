import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default props => {
  const user = useSelector(appState => appState.authReducer.users)
  // console.log(user)
  return user ? <Route {...props} /> : <Redirect to="/" />
}