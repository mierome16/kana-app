import React, { useState } from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { finishOrder } from '../actions/diet.actions'
import { Redirect } from 'react-router-dom'
import { Header, Container, Button } from 'semantic-ui-react'

export default props => {
  const order = useSelector(appState => appState.dietReducer.pastOrders[0])
  const resetItem = useSelector(appState => appState.dietReducer.orderedItem)
  const [viewOrders, setViewOrders] = useState(false)
  const [orderAgain, setOrderAgain] = useState(false)
  console.log(resetItem)

  function endOrder(action) {
    finishOrder()
    action === 'view' ? setViewOrders(!viewOrders) : setOrderAgain(!orderAgain)
  }

    return (
      viewOrders ? <Redirect to="/orders" /> : orderAgain ? <Redirect to="/profile" /> : (
      <Container style={{padding: '1em'}}>
          <Header as="h1">Success!</Header>
          <Header as="h3">Confirmation Number: #{order.confirm}</Header>
          <p>{order.type === 'order' ? order.date : ''}</p>
          <p>Order Placed: {moment(new Date()).format('LLL')}</p>
        <div>
          <p>Your {order.type} has been successfully {order.type === 'order' ? 'placed' : 'made'}. Click 'View Orders' to view details.</p> 
          <p>Please contact the restaurant if you have any questions regarding your {order.type}:</p>
          <div>
            <p>{order.order.restaurant}</p>
            <p>{order.order.address}</p>
            <p>702-123-4567</p>
            <p>Mon - Fri: {order.order.open} AM - {order.order.close} PM</p> 
          </div>
        </div>
        <div>
          <Button onClick={e => endOrder('view')}>View Orders</Button>
          <Button onClick={e => endOrder('another')}>Order Another Item</Button>
        </div>
      </Container>
      )
    )
  }
