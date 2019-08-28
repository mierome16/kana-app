import store from '../store'
import axios from 'axios'

export function getLocations(){
    axios.get('/api/locations').then(resp => {
        store.dispatch({
            type: 'GET_LOCATIONS',
            payload: resp.data
        })
    })
} 