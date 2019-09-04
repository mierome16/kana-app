import {createStore, combineReducers} from 'redux'
import orderformReducer from './reducers/orderform.reducer'
import authReducer from "./reducers/auth.reducers"
import mealReducer from "./reducers/meal.reducers"
import restaurantReducer from './reducers/restaurant.reducers'


const rootReducer = combineReducers({
  authReducer: authReducer,
  orderformReducer: orderformReducer,
  mealReducer: mealReducer,
  restaurantReducer: restaurantReducer 
});

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store




