const initialState = {
    restaurants: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'GET_LOCATIONS':
            return {...state, restaurants: [action.payload]}
        default: return state
    }
}