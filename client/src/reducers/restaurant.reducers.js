const initialState = {
    res_user: ""
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'RES_LOGIN':
            return {...state, res_user: [...state.res_user, action.payload]}
        // case 'RES_LOGOUT':
        //     return {...state, res_users: ''}
        default: return state
    }
}