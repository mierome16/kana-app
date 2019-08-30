import React, { useState } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import validator from 'validator';
import { register, login } from '../actions/auth.actions'


export default props => {
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')



  function handleSubmit(e){
    if (!validator.isLength(username, {min:6})){
      setError(true)
      setErrorMessage('Username must be at least 6 characters')
    } else {
      setError(false)
      setErrorMessage('')
    }

    if (!validator.equals(password, confirm)){
      setError(true)
      setErrorMessage('Password did not match')
    } else {
      setError(false)
      setErrorMessage('')
    }

    register(username, password, first_name, last_name)
    login(username, password)
    }

  return (
    <div>
      {(error === true) ? <div>{errorMessage}</div> : ''}
      <header id="lrheader">
                <Link to="/login"><button>Log in</button></Link>
                <Link to="/register"><button>Sign up</button></Link>
            </header>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 350 }}>
            
            <Header as='h2' color='black' textAlign='center'>
                {/* <Image src='/logo.png' />  */}
                Sign up for an account
            </Header>
            <Form size='large' onSubmit={handleSubmit}>
                <Segment stacked style={{
                        background: 'rgb(0,0,0,.8)'
                    }}>
                <Form.Input id="formz" fluid icon='user' iconPosition='left' placeholder='First Name' value={first_name} onChange={e => setFirst_name(e.target.value)}/>
                <Form.Input id="formz" fluid icon='user' iconPosition='left' placeholder='Last Name' value={last_name} onChange={e => setLast_name(e.target.value)}/>
                <Form.Input id="formz" fluid icon='user' iconPosition='left' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
                <Form.Input
                id="formz"
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    value={password} onChange={e => setPassword(e.target.value)}
                />
                <Form.Input
                id="formz"
                    value={confirm}
                    onChange={e => setConfirm(e.target.value)}
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Confirm Password'
                    type='password'
                />
                <Link to="/profile">
                <Button onClick={handleSubmit} color='teal' fluid size='large' style={{background: 'rgb(233,115,63)',
    color: 'white'}}>
                  Sign Up
                </Button>
                </Link>
                </Segment>
            </Form>
            <Message style={{
                        background: 'rgb(0,0,0,.8)', color: 'white'
                    }}>
                Already a user? <Link to="/login">Log in</Link>
            </Message>
          </Grid.Column>
      </Grid>
    </div>
  )
}
