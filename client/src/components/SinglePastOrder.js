import React from 'react' 
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Card as FoodItem, Button, Header } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import { finishOrder, orderItem } from '../actions/diet.actions'


export default props => {
  const singleItem = useSelector(appState => appState.dietReducer.pastOrders.find(item => item.confirm === props.match.params.singleOrder))

  function reorder(e) {
    console.log(singleItem)
    if (orderItem) {
      finishOrder()
      orderItem(singleItem.order)
     } else  { orderItem(singleItem.order) }
    // orderitem(singleItem) ? check if current item to order exists already
  }
  return (
    <div style={{padding:25}}>
      <Header as="h1">{singleItem.confirm}</Header>
        <div>
          <FoodItem style={{marginBottom:20, width:'100vh'}}>
            <div
                style={{background: `url(${singleItem.order.image}) no-repeat center`, backgroundSize: 'cover',
                width:200, height:200, 
                }} >
            </div>
            <FoodItem.Content>
            <FoodItem.Header style={{ display:'flex', flexDirection:'column'}}>
              {singleItem.order.name}
              <FoodItem.Meta>Confirmation: {singleItem.confirm}</FoodItem.Meta>
              <FoodItem.Meta>Order placed at: {singleItem.timePlaced}</FoodItem.Meta>
              <FoodItem.Meta>{singleItem.type === 'reservation' ? ('Reservation Date: ' + moment(singleItem.date).format('LLL')) : ('Order Total: $' + (singleItem.order.price * singleItem.quantity).toFixed(2))}</FoodItem.Meta>
            </FoodItem.Header>
            <FoodItem.Meta>
                {singleItem.order.restaurant}
            </FoodItem.Meta>
            <FoodItem.Description>
              {singleItem.order.description} {singleItem.order.allergy}
            </FoodItem.Description>
            </FoodItem.Content>
            </FoodItem>
        </div>
      <div>
        <Link to="/"><Button>Back to Home</Button></Link>
        <Link to="/options"><Button onClick={reorder}>Order Again</Button></Link>
      </div>
    </div>
  )
}