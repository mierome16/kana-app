import React from 'react'
import { greet } from '../actions/example.actions'

export default props => {
  function sendGreeting() {
    greet()
  }

  return (
    <button onClick={sendGreeting}>Click Me</button>
  )
}