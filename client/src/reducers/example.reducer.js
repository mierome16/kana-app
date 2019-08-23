const initialState = {
  greeting: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GREETING':
      return {...state, greeting: action.payload}
    default:
      return state
  }
}