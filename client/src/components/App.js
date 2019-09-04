import React, { lazy, Suspense } from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
//import '../styles/SwipeStyles.css'
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
import PastOrders from './PastOrders';
import MobileHome from './MobileHome';
import RestHome from './RestHome'
import RestRegister from './RestRegister';
import SinglePastOrder from './SinglePastOrder'
 


export default props => {
const LoadingPage = lazy(() => import('../food-loading.gif'))
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={MobileHome}></Route>
          <Route exact path = "/about-kana" component={HomepageLayout} />
          <Route path ="/login" component={Login} />
          <Route path="/register" component={Registration}/>
          <LoginRoute exact path="/profile" component={Profile} />
          <LoginRoute exact path="/order" component={OrderForm} />
          <LoginRoute exact path="/reservation" component={ReservationForm} />
          <LoginRoute exact path="/options" component={EatOptions} />
          <LoginRoute exact path="/confirm" component={Confirmation} />
          <LoginRoute exact path="/swipe" component={FoodMain} />
          <LoginRoute exact path="/map" component={DistanceMap}/>
          <LoginRoute exact path="/meal" component={MealOptions} />
          <LoginRoute exact path="/orders" component={PastOrders} />
          <LoginRoute exact path="/orders/:singleOrder" component={SinglePastOrder} />
          <Route path = "/restaurant-home" component={RestHome}/>
          <Route path ="/restaurant-register" component={RestRegister}/>
        </div>
      </Router>
    </Provider>
  )
}