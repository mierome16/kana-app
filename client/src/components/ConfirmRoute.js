import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default props => {
  const confirm_order = useSelector(appState => appState.mealReducer.confirm)
  const order = useSelector(appState => appState.mealReducer.orderedItem)
  return confirm_order && localStorage.getItem('token') ? <Route {...props} /> : localStorage.getItem('token') && order ? <Redirect to="/options" /> : localStorage.getItem('token') ? <Redirect to="/dashboard" /> : <Redirect to="/" />
}
