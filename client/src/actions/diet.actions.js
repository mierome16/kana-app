import store from '../store'
import axios from 'axios'


export function getMenuItems(){
 axios.get('/api/menu-items').then(resp => {
    const data = resp.data.map(item => {
      let items = {
      name: item.meal_name,
      restaurant: item.res_name,
      price: item.price,
      allergy: item.diet,
      rating: item.ratings,
      image: item.url,
      description: item.description
    }
      return items
    })

    console.log(data)
   store.dispatch({
     type:'GET_ALL_ITEMS',
     payload: data
   })
 })
}


export function toggleDiet(diet) {
  store.dispatch({
    type: 'SELECT_DIET',
    payload: diet
  })
}

export function toggleMeal(meal) {
  store.dispatch({
    type: 'SELECT_MEAL',
    payload: meal
  })
}

export function getAllergyFreeItems(filteredItems) {
  store.dispatch({
    type: 'GET_ALLERGYFREE',
    payload: filteredItems
  })
}