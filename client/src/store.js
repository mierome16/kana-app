import {createStore, combineReducers} from 'redux'
import orderformReducer from './reducers/orderform.reducer'
import authReducer from "./reducers/auth.reducers"
<<<<<<< HEAD
import mealReducer from "./reducers/meal.reducers"
=======
import dietReducer from "./reducers/diet.reducers"
import restaurantReducer from './reducers/restaurant.reducers'
>>>>>>> master


const rootReducer = combineReducers({
  authReducer: authReducer,
  orderformReducer: orderformReducer,
<<<<<<< HEAD
  mealReducer: mealReducer
=======
  dietReducer: dietReducer,
  restaurantReducer: restaurantReducer 
>>>>>>> master
});

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store




