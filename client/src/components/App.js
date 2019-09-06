import React, { useState } from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
//import '../styles/SwipeStyles.css'
import { Provider } from 'react-redux'
import store from '../store'
import ReservationForm from './ReservationForm'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomepageLayout from './Homepage';
import OrderForm from './OrderForm'
import Login from './Login'
import Registration from './Registration'
import EatOptions from './EatOptions'
import Profile from './Profile'
import Confirmation from './Confirmation'
import MealOptions from './MealOptions';
import DistanceMap from './DistanceMap'
import LoginRoute from './LoginRoute'
import PastOrders from './PastOrders';
import MobileHome from './MobileHome';
import RestHome from './RestHome'
import RestRegister from './RestRegister';
import SinglePastOrder from './SinglePastOrder'
import MSidebar from './Sidebar';
import NoResults  from './NoResults'
import EndOfDeck from './EndOfDeck';
import FoodMain from './FoodMain'
import MobileAbout from './MobileAbout';
import RestLogin from './RestLogin'
import GifLoading from './GifLoading'


export default props => {
const [loading, setLoading] = useState(true)
// const LoadingPage = lazy(() => import('../loadingkana.gif'))

  return (
    <Provider store={store}>
      <Router>
        <div id="app-container">
          <Switch>
            <Route exact path="/" component={MobileHome}/>
            <Route exact path ="/login" component={Login} />
            <Route exact path="/register" component={Registration}/>
            <Route exact path="/loading" component={GifLoading}/>
            <Route exact path = "/restaurant-home" component={RestHome}/>
            <Route exact path ="/restaurant-register" component={RestRegister}/>
            <Route path="/restaurant-login" component={RestLogin}/>
            <Route exact path = "/about-kana" component={HomepageLayout} />
            <Route exact path ="/about" component={MobileAbout} />
            <Route path ="/sidebar" component={MSidebar}/>
            <Route path ="/notfound" component={NoResults} />
            <Route path="/endofdeck" component={EndOfDeck} />
          </Switch>
          <Switch>
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
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}