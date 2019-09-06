import React from 'react' 
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Card as FoodItem, Button, Header } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import MSidebar from './Sidebar';


export default props => {
  const orders = useSelector(appState => appState.mealReducer.pastOrders)
  console.log(orders)
  return (
    <MSidebar>
    <div style={{padding:25}}>
      <Header as="h1">Past Orders</Header>
      {orders.map(order => (
        <div key={order.confirm}>
          <Link to={"/orders/" + order.confirm}>
          <FoodItem style={{marginBottom:20, width:'100vh', flexDirection:'row', alignItems: 'center', alignContent:'center'}}>
                <div
                    style={{background: `url(${order.order.image}) no-repeat center`, backgroundSize: 'cover',
                    width:100, height:100, marginLeft: 10
                    }} >
                </div>
                <FoodItem.Content>
                <FoodItem.Header style={{ display:'flex', flexDirection:'column'}}>
                  {order.order.name}
                  <FoodItem.Meta>Placed at: {order.timePlaced}</FoodItem.Meta>
                  <FoodItem.Meta>{order.type === 'reservation' ? ('Reservation Date: ' + moment(order.date).format('LLL')) : ('Order Total: $' + (order.order.price * order.quantity).toFixed(2))}</FoodItem.Meta>
                </FoodItem.Header>
                <FoodItem.Meta>
                    {order.order.restaurant}
                </FoodItem.Meta>
                </FoodItem.Content>
            </FoodItem>
            </Link>
        </div>
      ))}
      <div>
        <Link to="/"><Button>Back to Home</Button></Link>
        <Link to="/profile"><Button>Order Again</Button></Link>
      </div>
    </div>
    </MSidebar>
  )
}