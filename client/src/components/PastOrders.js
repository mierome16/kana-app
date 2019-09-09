import React, { useEffect } from 'react' 
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Card as FoodItem, Button, Header } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import MSidebar from './Sidebar';
import { getPastOrders } from '../actions/meal.actions'


export default props => {
  const orders = useSelector(appState => appState.mealReducer.pastOrders)
  console.log(orders[0])

  useEffect(() => {
    getPastOrders(localStorage.getItem('id'))
    
  }, [])
  return (
    <MSidebar>
    <div style={{padding:25}}>
      <Header as="h1">Past Orders</Header>
      {orders ? (orders.map(order => (
        <div key={order.confirm}>
          <Link to={"/orders/" + order.confirm}>
          <FoodItem style={{marginBottom:20, width:'100vh', flexDirection:'row', alignItems: 'center', alignContent:'center'}}>
                <div
                    style={{background: `url(${order.url}) no-repeat center`, backgroundSize: 'cover',
                    width:100, height:100, marginLeft: 10
                    }} >
                </div>
                <FoodItem.Content>
                <FoodItem.Header style={{ display:'flex', flexDirection:'column'}}>
                  {order.meal_name}
                  <FoodItem.Meta>{order.time_placed}</FoodItem.Meta>
                  <FoodItem.Meta>{order.type === 'reservation' ? ('Reservation Date: ' + moment(order.reserve_date).format('LLL')) : ('Order Total: $' + (order.price * order.quantity).toFixed(2))}</FoodItem.Meta>
                </FoodItem.Header>
                <FoodItem.Meta>
                    {order.restaurant}
                </FoodItem.Meta>
                </FoodItem.Content>
            </FoodItem>
            </Link>
        </div>
      ))) : ''} 
      <div>
        <Link to="/"><Button>Back to Home</Button></Link>
        <Link to="/profile"><Button>Order Again</Button></Link>
      </div>
    </div>
    </MSidebar>
  )
}