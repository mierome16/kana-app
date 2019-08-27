import { createStore, combineReducers } from 'redux'
import { reducer as orderformReducer } from './reducers/orderform.reducer'
import {reducer as authReducer } from "./reducers/auth.reducers";


const rootReducer = combineReducers({
  authReducer: authReducer,
  orderformReducer: orderformReducer
});

const store = createStore(rootReducer)

export default store




