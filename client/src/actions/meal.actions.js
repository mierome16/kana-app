import store from '../store'
import axios from 'axios'

//**** SHUFFLE MENU ITEMS ****/
export function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

export function formatTime(str) {
  let time
  str.slice(0, 2) > 12 ? time = str.slice(0, 2) - 12 + ':00 PM' : str.length > 6 ? time = (str.slice(0, (str.length-3)) + ' AM') : time = str + ' AM'
  return time
} 

//**** CALL TO GET ALL MENU ITEMS FILTERED BY DIETARY RESTRICTIONS ****/
export function getMenuItems(selectedDiets, selectedMeals){
 axios.get('/api/menu-items/'+ selectedDiets + '/' + selectedMeals).then(resp => {
    const data = resp.data.map(item => {
      let items = {
      id: item.id,
      name: item.item_name,
      restaurant: item.res_name,
      price: item.price,
      allergy: item.diet_name,
      mealType: item.meal_name,
      meal_id: item.meal_id,
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
     payload: shuffle(data)
   })
 })
}

//**** DIETARY OPTIONS ****//
export function getDiets() {
  axios.get('/api/dietary-rest/').then(resp => {
    const diets = []

    resp.data.forEach(diet => {
      diets.push({
        name: diet.name,
        disabled: diet.disabled ? true : false,
        img: `/icons/d${diet.id}.png`
      })
    })

    store.dispatch({
      type: 'GET_DIETS',
      payload: diets
    })
  })  
}

export function toggleDiet(diet) {
  store.dispatch({
    type: 'SELECT_DIET',
    payload: diet
  })
}

//**** MEAL OPTIONS ****//
export function getMeals() {
  axios.get('/api/mealtypes/').then(resp => {
    const meals = []
    resp.data.forEach(meal => {
      meals.push({
        name: meal.meal_name,
        disabled: meal.disabled ? true : false,
        img: `/icons/m${meal.id}.png`
      })
    })

    store.dispatch({
      type: 'GET_MEALS',
      payload: meals
    })
  })  
}

export function toggleMeal(meal) {
  store.dispatch({
    type: 'SELECT_MEAL',
    payload: meal
  })
}

//FILTER SELECTED BY MEAL TYPE
export function getFilteredItems() {
  store.dispatch({
    type: "GET_FILTERED",
  })
}

//**** ORDERING OPTIONS ****/
export function orderItem(item) {
  store.dispatch({
    type: 'ORDER_ITEM',
    payload: item
  })
}

export function sendOrder(item){
  axios.post('/api/add-order', {
      user_id: item.user,
      item_id: item.order.id,
      confirm: item.confirm,
      notes: item.notes,
      quantity: item.quantity,
      size: item.size,
      timePlaced: item.timePlaced,
      type: item.type,
      reservation_date: item.date

  }).then(resp => {
  })
}

export function confirmOrder(item) {
  store.dispatch({
    type: 'CONFIRM_ORDER',
    payload: item
  })
}

export function getPastOrders() {
  const user = localStorage.getItem('id')
  
  axios.get('/api/get-orders/' + user ).then(resp => {
    const data = resp.data
    data.map(item => {
      let pic = Object.assign({}, item)
      item.image = `/pictures/${item.img}.jpg`
      return pic
    })
    store.dispatch({
      type: 'GET_PAST_ORDERS',
      payload: data
    })
  })
}


export function finishOrder() {
  store.dispatch({
    type: 'END_ORDER'
  })
}

export function addToFav(item) {
  let id = localStorage.getItem('id')
  axios.post('/api/add-to-favorites', {
    user_id: id,
    item_id: item
  }).then(resp => {
  })
}

export function getFavorites() {
  const id = localStorage.getItem('id')
  axios.get('/api/getFav/' + id).then(resp => {
    const data = resp.data
    data.map(item => {
      let pic = Object.assign({}, item)
      item.image = `/pictures/${item.img}.jpg`
      return pic
    })
    store.dispatch({
      type: 'GET_FAVORITES',
      payload: data
    })
  })
}




