import React, { useState } from 'react'
import { Form, Container, Header, Divider, Image } from 'semantic-ui-react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import shortid from 'shortid'
import { addOrder } from '../actions/diet.actions'
import { Redirect } from "react-router-dom"
import DatePicker from 'react-date-picker'


export default props => { 
  const order = useSelector(appState => appState.dietReducer.orderedItem)
  const [date, setDate] = useState(new Date())  
  const [submit, setSubmit] = useState(false)
  const values = {
    order: order,
    date: date,
    confirm: shortid.generate(),
    type: 'reservation',
    timePlaced: moment().format('LLL')
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmit(!submit)
    console.log(values)
    addOrder(values)
  }
  console.log(date)


    return (
      submit ? <Redirect to="/confirm" /> : (
      <Container style={{'padding': '1em', overflowY: 'scroll', background: 'white', height: '100vh', width: '100vw'}}>
        <Header as='h3' style={{'paddingTop': '1em', 'textAlign': 'center' }}>
          Make a Reservation
        </Header>
        <Divider />
        <Header as='h4'>
          Item
        </Header>
        <p>{order.name}</p>
        <Header as='h4'>
          Price
        </Header>
        <p>${order.price.toFixed(2)}</p>
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
            <DatePicker
              value={date}
              onChange={date => setDate(date)}
              id="date-picker"
            />
          </Form.Group>
            <Form.Button inverted color="orange" onClick={handleSubmit}>Confirm Reservation</Form.Button>
        </Form>
      </Container>
      )
    )
  }


