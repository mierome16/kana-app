import React, { useState } from 'react'
import { Form, Container, Header, Divider, Image } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import shortid from 'shortid'
import { addOrder, sendOrder } from '../actions/meal.actions'
import { Redirect } from "react-router-dom"
import moment from 'moment'
import MSidebar from './Sidebar'
 
export default props => { 
  const order = useSelector(appState => appState.mealReducer.orderedItem)

  console.log(order)
  const [submit, setSubmit] = useState(false)
  const [values, setValues] = useState({
    //user: user,
    quantity: 1,
    notes: '',
    size: '',
    order: order,
    confirm: shortid.generate(),
    type: 'order',
    timePlaced: moment().format('LLL')
  })
  console.log(values)

  function handleChange(e) {
    setValues({
      ...values, 
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(values)
    sendOrder(values)
    //addOrder(values)
    setSubmit(!submit)
    
  }
  
    return (
      submit ? <Redirect to="/confirm" /> : (
      <MSidebar>
      <Container style={{'padding': '1em', overflowY: 'scroll', overflowX: 'hidden', background: 'white'}}>
        <Header as='h3' style={{'paddingTop': '1em', 'textAlign': 'center' }}>
          Confirm Your Order
        </Header>
        <Divider />
        <Header as='h4'>
          Item
        </Header>
        <p>{order.name}</p>
        <Header as='h4'>
          Restaurant Details
        </Header>
        <p>{order.restaurant}</p>
        <p>{order.address}</p>
        <p>702-123-4567</p>
        <p>Mon - Fri: {order.open} AM - {order.close} PM</p>
        <p>(possible maps api below)</p>
        <Image bordered rounded size='small' src='https://www.google.com/maps/d/thumbnail?mid=1CoxrxicMw4uSYPjPb20L6eQisoI&hl=en_US' />
        <Form onSubmit={handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Field>
                <label>Size:</label>
                <input type="text" name='size' value={values.size} onChange={handleChange} placeholder="Leave blank if not applicable" />
              </Form.Field>
              <Form.Field>
                <label>Quantity:</label>
                <input type="number" name='quantity' value={values.quantity} onChange={handleChange} />
              </Form.Field>
            </Form.Group>
          <Form.TextArea name="notes" label='Notes/Special Instructions' value={values.notes} onChange={handleChange}/>
          <Form.Checkbox label='I agree to place my order for pick up and pay upon arrival' />
            <Header>
            Total: ${(order.price * values.quantity).toFixed(2)}
            </Header>
            <Form.Button type="submit" onClick={handleSubmit} inverted color="orange">Place Order</Form.Button> 
        </Form>
      </Container>
      </MSidebar>
      )
    )
  }


