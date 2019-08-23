import React from 'react'
import { useSelector } from 'react-redux'

export default props => {
  const greeting = useSelector(appState => appState.greeting)

  return (
    <h1>Greeting: {greeting}</h1>
  )
}