// import { createStore, combineReducers } from 'redux'

// // import {reducer as authReducer } from "./reducers/auth.reducers";

// // import { authreducer } from "./reducers/auth.reducers";
// import  dietReducer  from './reducers/diet.reducers'


// const rootReducer = combineReducers({
//   // authreducer: authreducer,
//   dietReducer: dietReducer
// });

// const store = createStore(rootReducer)

// export default store





import { createStore } from 'redux'

import dietReducer from './reducers/diet.reducers'

const store = createStore(dietReducer)

export default store




