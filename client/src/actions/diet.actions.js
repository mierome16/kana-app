import store from '../store'
import axios from 'axios'

function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
      }

export function getMenuItems(selectedDiets){
 axios.get('/api/menu-items/'+ selectedDiets).then(resp => {
    const data = resp.data.map(item => {
      let items = {
      name: item.item_name,
      restaurant: item.res_name,
      price: item.price,
      allergy: item.diet_name,
      rating: item.ratings,
      image: `/pictures/${item.pic_id}.jpg`,
      description: item.description,
      address: `${item.address}, ${item.city}, ${item.state}, ${item.zipcode}`,
      open: item.opening_time,
      close: item.closing_time
    }
      return items
    })
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

export function orderItem(item) {
  // console.log(item)
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

export function addOrder(item) {
  store.dispatch({
    type: 'ADD_ORDER',
    payload: item
  })
}

export function finishOrder() {
  store.dispatch({
    type: 'END_ORDER'
  })
}



