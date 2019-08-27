import React, { useState, useEffect } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import validator from 'validator';
import { register } from '../actions/auth.actions'
import { getMenuItems } from '../actions/diet.actions'

export default props => {
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    getMenuItems()
  }, [])

  function handleSubmit(e){
    e.preventDefault()
    register(username, password, first_name, last_name)
  }

  return (
    <div>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                {/* <Image src='/logo.png' />  */}
                Sign up for an account
            </Header>
            <Form size='large' onSubmit={handleSubmit}>
                <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='First Name' value={first_name} onChange={e => setFirst_name(e.target.value)}/>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Last Name' value={last_name} onChange={e => setLast_name(e.target.value)}/>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    value={password} onChange={e => setPassword(e.target.value)}
                />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Confirm Password'
                    type='password'
                />

                <Button color='teal' fluid size='large'>
                    Sign Up
                </Button>
                </Segment>
            </Form>
            <Message>
                Already a user? <a href='#'><Link to="/login">Log in</Link></a>
            </Message>
          </Grid.Column>
      </Grid>
    </div>
  )
}
