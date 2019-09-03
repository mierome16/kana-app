import store from '../store'
import axios from 'axios'

export function resRegister(res_name, res_address, res_city, res_state, res_zip){
    axios.post('/api/rest-register', {
        name: res_name,
        address: res_address,
        city: res_city,
        state: res_state,
        zipcode: res_zip
    }).then(resp => {
        console.log(resp.data)
    })
}