import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { login } from '../actions/auth.actions'

export default props => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    function handleSubmit(e){
        e.preventDefault()
        login(username, password)
    }

    return (
        <div className="loginform">
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        {/* <Image src='/logo.png' />  */}
                        Log-in to your account
                    </Header>
                <Form size='large' onSubmit={handleSubmit}>
                    <Segment stacked>
                    <Form.Input onChange={e => setUsername(e.target.value)} value={username}fluid icon='user' iconPosition='left' placeholder='Username' />
                    <Form.Input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />

                    <Button color='teal' fluid size='large'>
                        Login
                    </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <a href='#'><Link to="/register">Register</Link></a>
                </Message>
                </Grid.Column>
            </Grid>
        </div>
    )
}
