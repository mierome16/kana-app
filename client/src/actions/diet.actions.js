import store from '../store'
import axios from 'axios'


export function getMenuItems(selectedDiets){
 axios.get('/api/menu-items/'+ selectedDiets).then(resp => {
  console.log(resp.data)
    const data = resp.data.map(item => {
      let items = {
      name: item.item_name,
      restaurant: item.res_name,
      price: item.price,
      allergy: item.diet_name,
      rating: item.ratings,
      image: `/pictures/${item.pic_id}.jpg`,
      description: item.description
    }
      return items
    })
   store.dispatch({
     type:'GET_ALL_ITEMS',
     payload: data
   })
 })
}

export function getFilteredItems(selectedDiets){
  axios.post('/api/filtered-items', selectedDiets).then(resp => {
    console.log(resp.data)
    store.dispatch({
      type: 'GET_FILTERED_ITEMS',
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


export function orderItem(item) {
  store.dispatch({
    type: 'ORDER_ITEM',
    payload: item
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

