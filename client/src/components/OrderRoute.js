import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default props => {
  const order = useSelector(appState => appState.mealReducer.orderedItem)
  return order && localStorage.getItem('token') ? <Route {...props} /> : localStorage.getItem('token') ? <Redirect to="/profile" /> : <Redirect to="/" />
}
