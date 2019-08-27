import store from '../store'
import axios from 'axios'


export function getMenuItems(){
  axios.get('/api/menu-items').then(resp => {
    store.dispatch({
      type:'GET_ALL_ITEMS',
      payload: resp.data
    })
  })
}

export function toggleDiet(diet) {
  store.dispatch({
    type: 'SELECT_DIET',
    payload: diet
  })
}
