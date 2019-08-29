import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import '../styles/img.css'
import { Provider } from 'react-redux'
import store from '../store'
import ReservationForm from './ReservationForm'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomepageLayout from './Homepage';
import OrderForm from './OrderForm'
import Login from './Login'
import Registration from './Registration'
import EatOptions from './EatOptions'
import Profile from './Profile'
import Confirmation from './Confirmation'
import FoodMain from './FoodMain'
import MealOptions from './MealOptions';
import DistanceMap from './DistanceMap'
import LoginRoute from './LoginRoute'
import sticky from './sticky'



export default props => {

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path = "/" component={HomepageLayout} />
          <Route path ="/login" component={Login} />
          <Route path="/register" component={Registration}/>

          <LoginRoute exact path="/profile" component={Profile} />
          <LoginRoute exact path="/order" component={OrderForm} />
          <LoginRoute exact path="/reservation" component={ReservationForm} />
          <LoginRoute exact path="/options" component={EatOptions} />
          <LoginRoute exact path="/confirm" component={Confirmation} />
          <LoginRoute exact path="/swipe" component={FoodMain} />
          <LoginRoute exact path="/map" component={DistanceMap}/>
          <LoginRoute exact path="/sticky" component={sticky} />
          <LoginRoute exact path="/meal" component={MealOptions} />
     

        </div>
      </Router>
    </Provider>
  )
}