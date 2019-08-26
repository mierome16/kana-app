import React, { useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import validator from 'validator';

export default props => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    console.log(fname, lname, email, username, password)
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
                <Form.Input fluid icon='user' iconPosition='left' placeholder='First Name' value={fname} onChange={e => setFname(e.target.value)}/>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Last Name' value={lname} onChange={e => setLname(e.target.value)}/>
                <Form.Input fluid icon='envelope' iconPosition='left' placeholder='E-mail address' value={email} onChange={e => setEmail(e.target.value)}/>
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
