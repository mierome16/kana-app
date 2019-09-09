import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default props => {

  const user = useSelector(appState => appState.authReducer.users)
  console.log(user)
  return (
  //  user.length > 0 ? 
  //  <Route {...props} /> 
  //  : <Redirect to="/" />
  // )

  //const user = useSelector(appState => appState.authReducer.user)
  //console.log('user', user)
  // return
   localStorage.getItem('token') ? <Route {...props} /> : <Redirect to="/" />
  )
}