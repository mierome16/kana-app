import React, {useState} from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import { submitName } from '../actions/example.actions'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Login from './Login'
import Registration from './Registration'
import { from } from 'rxjs';


export default props => {


  return (
    <Provider store={store}>
      <Router>
      <div>
        <Route path = "/login" component={Login}></Route>
        <Route path="/register" component={Registration}></Route>
      </div>
      </Router>
    </Provider>
  )
}