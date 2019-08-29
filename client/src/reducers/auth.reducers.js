const initialState= {
 users: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'REGISTER': 
            return {...state, users: [...state.users, action.payload]}
        case 'LOGIN':
            return {...state, users: [...state.users, action.payload]}
        case 'LOGOUT':
            return {...state, users: ''}
        default: return state
    }
}