import React, { useState } from 'react'
import 'flatpickr/dist/themes/material_green.css'
import { Form, Container, Header, Divider, Image } from 'semantic-ui-react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Flatpickr from 'react-flatpickr'
import { setDate } from 'date-fns';
import shortid from 'shortid'
import { addOrder } from '../actions/diet.actions'
import { Redirect } from "react-router-dom"


export default props => { 
  const order = useSelector(appState => appState.dietReducer.orderedItem)
  const [date, setDate] = useState(new Date())  
  const [submit, setSubmit] = useState(false)
  const values = {
    order: order,
    date: date,
    confirm: shortid.generate(),
    type: 'reservation'
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmit(!submit)
    console.log(values)
    addOrder(values)
  }

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
            <Form.Field>
              <label>Date:</label>
              <Flatpickr data-enable-time
                name="date"
                value={date}
                onChange={e => setDate(moment(e.target.value).format('LL'))} />
            </Form.Field>
            </Form.Group>
            <Form.Button inverted color="orange" onClick={handleSubmit}>Confirm Reservation</Form.Button>
        </Form>
      </Container>
      )
    )
  }


