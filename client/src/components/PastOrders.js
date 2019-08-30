import React from 'react' 
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Card as FoodItem, Button, Header } from "semantic-ui-react"
import { Link } from 'react-router-dom'


export default props => {
  const orders = useSelector(appState => appState.dietReducer.pastOrders)
  console.log(orders)
  return (
    <div style={{padding:25}}>
      <Header as="h1">Past Orders</Header>
      {orders.map(order => (
        <div key={order.confirm}>
          <FoodItem style={{marginBottom:20, width:'100vh'}}>
                <div
                    style={{background: `url(${order.order.image}) no-repeat center`, backgroundSize: 'cover',
                    width:300, height:200, 
                    }} >
                </div>
                <FoodItem.Content>
                <FoodItem.Header style={{ display:'flex', flexDirection:'column'}}>
                  {order.order.name}
                  <FoodItem.Meta>Confirmation: {order.confirm}</FoodItem.Meta>
                  <FoodItem.Meta>Order placed at: {moment(new Date()).format('LLL')}</FoodItem.Meta>
                  <FoodItem.Meta>{order.type === 'reservation' ? ('Reservation Date: ' + moment(new Date()).format('LLL')) : ('Order Total: $' + (order.order.price * order.quantity).toFixed(2))}</FoodItem.Meta>
                </FoodItem.Header>
                <FoodItem.Meta>
                    {order.order.restaurant}
                </FoodItem.Meta>
                <FoodItem.Description>
                  {order.order.description} {order.order.allergy}
                </FoodItem.Description>
                </FoodItem.Content>
            </FoodItem>
        </div>
      ))}
      <div>
        <Link to="/"><Button>Back to Home</Button></Link>
        <Link to="/profile"><Button>Order Again</Button></Link>
      </div>
    </div>
  )
}