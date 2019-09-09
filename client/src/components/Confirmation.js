import React, { useState, useEffect }  from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { finishOrder } from '../actions/meal.actions'
import { Redirect } from 'react-router-dom'
import { Header, Container, Button } from 'semantic-ui-react'
import MSidebar from './Sidebar';
import { getPastOrders } from '../actions/meal.actions'

export default props => {
  const order = useSelector(appState => appState.mealReducer.confirm)
  const [viewOrders, setViewOrders] = useState(false)
  const [orderAgain, setOrderAgain] = useState(false)
  console.log(order)


  function endOrder(action) {
    finishOrder()
    action === 'view' ? setViewOrders(!viewOrders) : setOrderAgain(!orderAgain)
  }

    return (
      viewOrders ? <Redirect to="/orders" /> : orderAgain ? <Redirect to="/profile" /> : (
      <MSidebar>
      <Container id="confirm" style={{padding: '1em'}}>
          <Header as="h1">Success!</Header>
          <Header as="h3">Confirmation: #{order.confirm}</Header>
          <Header as='h3'>{order.type === 'order' ? order.date : ''}</Header>
          <Header as='h3'>Order Placed: {order.timePlaced}</Header>
        <div>
          <p>Your {order.type} has been successfully {order.type === 'order' ? 'placed' : 'made'}. Click 'View Orders' to view details.</p> 
          <p>Please contact the restaurant if you have any questions regarding your {order.type}:</p>
          <div>
            <Header style={{'marginTop':20, 'marginBottom':5}} as='h4'>{order.order.restaurant}</Header>
            <p>{order.order.address}</p>
            <p>702-123-4567</p>
            <p>Mon - Fri: {order.order.open} AM - {order.order.close} PM</p> 
          </div>
        </div>
        <div className='confirm-action'>
          <Button onClick={e => endOrder('view')}>View Orders</Button>
          <Button onClick={e => endOrder('another')}>Order Another Item</Button>
        </div>
      </Container>
      </MSidebar>
      )
    )
  }
