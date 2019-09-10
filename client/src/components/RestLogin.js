import React, { useState, useEffect } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { resLogin } from '../actions/restaurant.actions'
import '../styles/resthome.css'

export default props => {
const [res_email, setRes_email] = useState('')
const [res_password, setRes_password] = useState('')

    function handleSubmit() {
        console.log(res_email, res_password)
        resLogin(res_email, res_password)
    }
    return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' style={{color: '#8f0a03'}} textAlign='center'>
        Log-in to your account
      </Header>
      <Form size='large' onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input 
            fluid
            icon='user'
            iconPosition='left'
            placeholder='E-mail address'
            value={res_email}
            onChange={e => setRes_email(e.target.value)}
         />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            value={res_password}
            onChange={e => setRes_password(e.target.value)}
            />
          <Link to="/restaurant-profile">
          <Button style={{background: '#8f0a03', color: 'white'}} fluid size='large'>
            Login
          </Button>
          </Link>
        </Segment>
      </Form>
      <Message>
        New to us? <Link to="/restaurant-register"><a href='#'>Sign Up</a></Link>
      </Message>
    </Grid.Column>
  </Grid>
    )
}
