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
    axios.post('/api/login', {
      username: username,
      password: password}
    ).then(resp => {
        const token = resp.data.token
        const user_id = resp.data.user.id
        const username = resp.data.user.username

        localStorage.setItem('token', token)
        localStorage.setItem('user', username)
        localStorage.setItem('id', user_id)

        setInterceptors(token)        
        console.log(username, user_id)
        store.dispatch({
            type: 'LOGIN',
            payload: {
                username: username,
                id: user_id
            }
        })
        
    }).catch(e => {
        console.log('error',e)
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
      const user_id = resp.data.insertId
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
    localStorage.removeItem('user')
    localStorage.removeItem('id')
    
    store.dispatch({
        type: 'LOGOUT'
    })
}