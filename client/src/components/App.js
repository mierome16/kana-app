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
import RestLogin from './RestLogin';
import GifLoading from './GifLoading';
import ContactUs from './ContactUs'
import AuthRoute from './AuthRoute'


export default props => {
const [loading, setLoading] = useState(true)
// const LoadingPage = lazy(() => import('../loadingkana.gif'))

  return (
    <Provider store={store}>
      <Router>
        <div id="app-container">
          <Switch>
            <Route exact path="/" component={MobileHome}/>
            <AuthRoute path ="/login" component={Login} />
            <Route path="/register" component={Registration}/>
            <Route exact path ="/restaurant-home" component={RestHome}/>
            <Route exact path ="/restaurant-register" component={RestRegister}/>
            <Route exact path="/restaurant-login" component={RestLogin}/>
            <Route path = "/about-kana" component={HomepageLayout} />
            <Route path ="/about" component={MobileAbout} />
            <Route path ="/sidebar" component={MSidebar}/>
            <Route path ="/notfound" component={NoResults} />
            <Route path="/endofdeck" component={EndOfDeck} />
            <LoginRoute path="/profile" component={Profile} />
            <LoginRoute path="/order" component={OrderForm} />
            <LoginRoute path="/reservation" component={ReservationForm} />
            <LoginRoute path="/options" component={EatOptions} />
            <LoginRoute path="/confirm" component={Confirmation} />
            <LoginRoute path="/swipe" component={FoodMain} />
            <LoginRoute path="/map" component={DistanceMap}/>
            <LoginRoute path="/meal" component={MealOptions} />
            <LoginRoute path="/orders" component={PastOrders} />
            <LoginRoute exact path="/orders/:singleOrder" component={SinglePastOrder} />
            <Route path ="/sidebar" component={MSidebar}/>
            <Route path ="/notfound" component={NoResults} />
            <Route path="/endofdeck" component={EndOfDeck} />
            <Route path="/contact" component={ContactUs} />
          </Switch>        
        </div>
      </Router>
    </Provider>
  )
}