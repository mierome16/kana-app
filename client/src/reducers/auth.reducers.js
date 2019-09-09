const initialState= {
  user: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'REGISTER': 
            return {...state, user: action.payload} 
        case 'LOGIN':
            return {...state, user: action.payload}
        case 'LOGOUT':
            return {...state, user: {}}
        default: return state
    }
}