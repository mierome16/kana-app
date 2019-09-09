import React, { useState } from 'react'
import { Button, Container, Header, Divider, Image } from 'semantic-ui-react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import shortid from 'shortid'
import { sendOrder, confirmOrder } from '../actions/meal.actions'
import { Redirect } from "react-router-dom"
import DatePicker from 'react-date-picker'
import MSidebar from './Sidebar';


export default props => { 
  const order = useSelector(appState => appState.mealReducer.orderedItem)
  const user = useSelector(appState => appState.authReducer.user.id)
  const [date, setDate] = useState(new Date())  
  const [submit, setSubmit] = useState(false)
  const values = {
    user: localStorage.getItem('id'),
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
    sendOrder(values)
    confirmOrder(values)
  }
  //console.log(date)


    return (
      submit ? <Redirect to="/confirm" /> : (
        <MSidebar>
      <Container id="reserve-form" style={{'padding': '1em', 'paddingTop': 0, background: 'white'}}>
        <Header as='h3' style={{'paddingTop': '1em', 'textAlign': 'center' }}>
          Make a Reservation
        </Header>
        <Divider />
        <div className="reserve-item">
          <div>
            <Header as='h4'>
              Item
            </Header>
            <p>{order.name}</p>
          </div>
          <div>
            <Header as='h4'>
              Price
            </Header>
            <p>${order.price.toFixed(2)}</p>
          </div>
        </div>
        <Header as='h4'>
          Restaurant Details
        </Header>
        <p>{order.restaurant}</p>
        <p>{order.address}</p>
        <p>702-123-4567</p>
        <p>Mon - Fri: {order.open} AM - {order.close} PM</p>
        <Image bordered rounded size='small' src='https://www.google.com/maps/d/thumbnail?mid=1CoxrxicMw4uSYPjPb20L6eQisoI&hl=en_US' />
        <Header as='h4'>
          Choose your date and time:
        </Header>
        <DatePicker
          value={date}
          onChange={date => setDate(date)}
          id="date-picker"
        />
        {/* <Header as='h4'>
          Size of Party
        </Header> */}
        <Button style={{'marginTop': 30}} inverted color="orange" onClick={handleSubmit}>Confirm Reservation</Button>
      </Container>
      </MSidebar>
      )
    )
  }


