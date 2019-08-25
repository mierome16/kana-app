import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import HomepageLayout from "./Homepage"

export default props => {

  return (
    <Provider store={store}>
      <div>
        <HomepageLayout />
      </div>
    </Provider>
  )
}