import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default props => {
  return localStorage.getItem('token') ?  <Redirect to="/profile" /> : <Route {...props} /> 
}