import { createStore, combineReducers } from 'redux'

import authReducer from "./reducers/auth.reducers";

// import { authReducer } from "./reducers/auth.reducers";


const rootReducer = combineReducers({
  authReducer: authReducer
});

const store = createStore(rootReducer)

export default store




