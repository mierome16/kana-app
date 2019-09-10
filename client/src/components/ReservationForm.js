import React, { useState } from 'react'
import { Button, Container, Header, Divider, Image } from 'semantic-ui-react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import shortid from 'shortid'
import { sendOrder, confirmOrder, formatTime } from '../actions/meal.actions'
import { Redirect } from "react-router-dom"
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker'
import MSidebar from './Sidebar';


export default props => { 
  const order = useSelector(appState => appState.mealReducer.orderedItem)
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState('10:00')
  console.log(order)
  const [submit, setSubmit] = useState(false)
  const values = {
    user: localStorage.getItem('id'),
    order: order,
    date: moment(date).format('l') + " " + formatTime(time),
    confirm: shortid.generate(),
    type: 'reservation',
    timePlaced: moment().format('LLL')
  }
  console.log(values.date)
  function handleSubmit(e) {
    e.preventDefault()
    setSubmit(!submit)
    sendOrder(values)
    confirmOrder(values)
  }


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
            <p>{order.name ? order.name : order.meal_name ? order.meal_name : ''}</p>
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
        <p>Mon - Fri: {formatTime(order.open)} - {formatTime(order.close)}</p>
        <Image bordered rounded size='small' src='https://www.google.com/maps/d/thumbnail?mid=1CoxrxicMw4uSYPjPb20L6eQisoI&hl=en_US' />
        <Header as='h4'>
          Choose your date and time:
        </Header>
        <DatePicker
          value={date}
          onChange={date => setDate(date)}
          id="date-picker"
        />
        <TimePicker
          onChange={time => setTime(time)}
          value={time}
        />
        <Button style={{'marginTop': 30}} inverted color="orange" onClick={handleSubmit}>Confirm Reservation</Button>
      </Container>
      </MSidebar>
      )
    )
  }


