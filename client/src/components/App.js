import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import ReservationForm from './ReservationForm'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomepageLayout from './Homepage';
import OrderForm from './OrderForm'

export default props => {

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/homepage" component={HomepageLayout} />
          <Route path="/order" component={OrderForm} />
          <Route path="/reservation" component={ReservationForm} />
        </div>
      </Router>
    </Provider>
  )
}