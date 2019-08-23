import { createStore } from 'redux'

import exampleReducer from './reducers/example.reducer'

const store = createStore(exampleReducer)

export default store