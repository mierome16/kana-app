import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import ReservationForm from './ReservationForm'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomepageLayout from './Homepage';
import OrderForm from './OrderForm'
import Login from './Login'
import Registration from './Registration'
import EatOptions from './EatOptions'
import FoodMain from './FoodMain';
import Profile from './Profile'
import Confirmation from './Confirmation'
import CopyFoodMain from './CopyFoodMain'
import CopySwipe from './CopySwipe';



export default props => {

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={HomepageLayout} />
          <Route path="/order" component={OrderForm} />
          <Route path="/reservation" component={ReservationForm} />
          <Route path ="/login" component={Login} />
          <Route path="/register" component={Registration}/>
          <Route path="/options" component={EatOptions} />
          <Route path="/foodfinder" component={FoodMain}/>
          <Route path="/profile" component={Profile} />
          <Route path="/confirm" component={Confirmation} />
          <Route path="/swipe" component={CopyFoodMain} />
        </div>
      </Router>
    </Provider>
  )
}