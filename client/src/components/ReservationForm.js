import React, { useState } from 'react'
import 'flatpickr/dist/themes/material_green.css'
import { Form, Container, Header, Divider, Image, Popup } from 'semantic-ui-react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import Flatpickr from 'react-flatpickr'


export default props => { 
  const [date, setDate] = useState(new Date())  

  console.log(moment(date).format('LL'))
  
    return (
      <Container style={{'padding': '1em'}}>
        <Header as='h3' style={{'paddingTop': '1em', 'textAlign': 'center' }}>
          Make a Reservation
        </Header>
        <Divider />
        <Header as='h4'>
          Item
        </Header>
        <p>Grilled Cheese</p>
        <Header as='h4'>
          Price
        </Header>
        <p>$10.00</p>
        <Header as='h4'>
          Restaurant Details
        </Header>
        <p>PunchCode Cafe</p>
        <p>1112 S Casino Center Blvd, Las Vegas, NV 89104</p>
        <p>702-123-4567</p>
        <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
        <p>(possible maps api below)</p>
        <Image bordered rounded size='small' src='https://www.google.com/maps/d/thumbnail?mid=1CoxrxicMw4uSYPjPb20L6eQisoI&hl=en_US' />
        <Form>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Date:</label>
              <Flatpickr data-enable-time
                value={date}
                onChange={e => setDate(e.target.value)} />
            </Form.Field>
            </Form.Group>
          <Link to="/confirm">
            <Form.Button inverted color="orange">Confirm Reservation</Form.Button>
          </Link>
        </Form>
        
      </Container>
    )
  }


