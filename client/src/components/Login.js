import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default props => {
    return (
        <div className="loginform">
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        {/* <Image src='/logo.png' />  */}
                        Log-in to your account
                    </Header>
                <Form size='large'>
                    <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input
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
