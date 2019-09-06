import store from '../store'
import axios from 'axios'

export function resRegister(res_name, res_address, res_city, res_state, res_zip, res_email, res_phone){
    axios.post('/api/rest-register', {
        name: res_name,
        address: res_address,
        city: res_city,
        state: res_state,
        zipcode: res_zip,
        email: res_email,
        phone: res_phone,
    }).then(resp => {
        console.log(resp.data)
    })
}

export function resLogin(res_email, res_password){
    console.log(res_email, res_password)
    axios.post('/api/res-login', {
        res_email: res_email,
        res_password: res_password
    }).then(resp => {
        console.log(resp.data)
    })
}