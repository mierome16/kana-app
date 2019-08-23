import React, {useState} from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import { submitName } from '../actions/example.actions'

import Button from './Button'
import Greeting from './Greeting'

export default props => {
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    submitName(name)
  }

  return (
    <Provider store={store}>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="name" onChange={e => setName(e.target.value)} value={name} />
          <button type="submit">Submit name</button>
        </form>
        <Button />
        <Greeting />
      </div>
    </Provider>
  )
}