
import { createStore, combineReducers } from 'redux'
import { reducer as orderformReducer } from './reducers/orderform.reducer'
import {reducer as authReducer } from "./reducers/auth.reducers";
import {reducer as dietReducer } from './reducers/diet.reducers'


const rootReducer = combineReducers({
  authReducer: authReducer,
  orderformReducer: orderformReducer,
  dietReducer: dietReducer
});

const store = createStore(rootReducer)


export default store




