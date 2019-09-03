import {createStore, combineReducers} from 'redux'
import orderformReducer from './reducers/orderform.reducer'
import authReducer from "./reducers/auth.reducers"
import dietReducer from "./reducers/diet.reducers"
import restaurantReducer from './reducers/restaurant.reducers'


const rootReducer = combineReducers({
  authReducer: authReducer,
  orderformReducer: orderformReducer,
  dietReducer: dietReducer,
  restaurantReducer: restaurantReducer 
});

const store = createStore(rootReducer)


export default store




