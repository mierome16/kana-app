import React from 'react' 
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Card as FoodItem, Button, Header } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import { finishOrder, orderItem } from '../actions/meal.actions'
import MSidebar from './Sidebar';


export default props => {
  const singleItem = useSelector(appState => appState.mealReducer.pastOrders.find(item => item.confirm === props.match.params.singleOrder))

  function reorder(e) {
    console.log(singleItem)
    if (orderItem) {
      finishOrder()
      orderItem(singleItem)
     } else  { orderItem(singleItem) }
    // orderitem(singleItem) ? check if current item to order exists already
  }
  return (
    <MSidebar>
    <div style={{padding:25}}>
      <Header as="h1">{singleItem.meal_name}</Header>
        <div>
          <FoodItem style={{marginBottom:20, width:'100vh'}}>
            <div
                style={{background: `url(${singleItem.image}) no-repeat center`, backgroundSize: 'cover',
                width:'100%', height:300, margin: 'auto'
                }} >
            </div>
            <FoodItem.Content>
            <FoodItem.Header style={{ display:'flex', flexDirection:'column'}}>
              {singleItem.meal_name}
              <FoodItem.Meta>Confirmation: {singleItem.confirm}</FoodItem.Meta>
              <FoodItem.Meta>Placed at: {moment(singleItem.time_placed).format('l LT')}</FoodItem.Meta>
              <FoodItem.Meta>{singleItem.type === 'reservation' ? ('Reservation ' + moment(singleItem.reserve_date).format('l LT')) : ('Order Total: $' + (singleItem.price * singleItem.quantity).toFixed(2))}</FoodItem.Meta>
            </FoodItem.Header>
            <FoodItem.Meta>
                {singleItem.restaurant}
            </FoodItem.Meta>
            <FoodItem.Description>
              {singleItem.description} {singleItem.diet}
            </FoodItem.Description>
            </FoodItem.Content>
            </FoodItem>
        </div>
      <div>
        <Link to="/"><Button>Back to Home</Button></Link>
        <Link to="/options"><Button onClick={reorder}>Order Again</Button></Link>
      </div>
    </div>
    </MSidebar>
  )
}