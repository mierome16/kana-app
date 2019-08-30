import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { login } from '../actions/auth.actions'

export default props => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    function handleSubmit(e){
        login(username, password)
    }

    return (
        <div id="loginform">
            <header id="lrheader">
                <Link to="/login"><button>Log in</button></Link>
                <Link to="/register"><button>Sign up</button></Link>
            </header>
            <Grid textAlign='center' style={{ height: '100vh', width:'100vw' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: '350px' }}>
                    <Header as='h2' color='black' textAlign='center'>
                        {/* <Image src='/logo.png' />  */}
                        Log-in to your account
                    </Header>
                <Form size='large' onSubmit={handleSubmit}>
                    <Segment stacked style={{
                        background: 'rgb(0,0,0,.8)'
                    }}>
                    <Form.Input id="formz" onChange={e => setUsername(e.target.value)} value={username}fluid icon='user' iconPosition='left' placeholder='Username' />
                    <Form.Input
                        id="formz"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />
                   
                   <Link to="/profile" ><Button onClick={handleSubmit} style={{background: 'rgb(233,115,63)',
    color: 'white'}} fluid size='large'>
                       Login
                    </Button></Link>
                    
                    </Segment>
                </Form>
                <Message style={{
                        background: 'rgb(0,0,0,.8)', color: 'white'
                    }}>
                    New to us? <Link to="/register">Register</Link>
                </Message>
                </Grid.Column>
            </Grid>
        </div>
    )
}
