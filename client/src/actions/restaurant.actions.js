import store from '../store'
import axios from 'axios'

if(localStorage.getItem('token')){
    setInterceptors(localStorage.getItem('token'))
}

function setInterceptors(){
    axios.interceptors.request.use(
        reqConfig => {
            reqConfig.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
            return reqConfig
        },
        err => Promise.reject(err) 
    )
}


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
        const token = resp.data.token

        localStorage.setItem('token', token)
        setInterceptors(token)
        console.log(resp.data.user[0].id)
        store.dispatch({
            type: 'RES_LOGIN',
            payload: res_email
        })
    })
}