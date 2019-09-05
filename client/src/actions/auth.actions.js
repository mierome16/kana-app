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

export function login(username, password){
    console.log(username, password)
    axios.post('/api/login', {
      username: username,
      password: password}
      ).then(resp => {
        const token = resp.data.token

        localStorage.setItem('token', token)

        setInterceptors(token)
        console.log(resp.data.user[0].id)
        const user_id = resp.data.user[0].id
    store.dispatch({
        type: 'LOGIN',
        payload: {
            username: username,
            id: user_id
        }
    })

    })
    
}

export function register(username, password, first_name, last_name){
    console.log(username, password, first_name, last_name)
    axios.post('/api/register', {
      username: username, 
      password: password, 
      first_name: first_name, 
      last_name: last_name
    }).then(resp => {
      console.log(resp.data)
      const user_id = resp.data.user[0].id
    store.dispatch({
        type: 'REGISTER',
        payload: {
            username: username,
            id: user_id
        }
        })  
    })
}

export function logout() {
    localStorage.removeItem('token')
    store.dispatch({
        type: 'LOGOUT'
    })
}