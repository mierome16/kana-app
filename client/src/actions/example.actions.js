import store from '../store'
import axios from 'axios'
import io from 'socket.io-client'

// MUST CHANGE localhost to IP ADDRESS
const socket = io.connect('http://localhost:8000')

socket.on('new person', name => {
  console.log(name)
})

export function submitName(name) {
  socket.emit('name', name)
}

export function greet() {
  axios.get('/api/greeting').then(resp => {
    store.dispatch({
      type: 'GREETING',
      payload: resp.data.greeting
    })
  })
}