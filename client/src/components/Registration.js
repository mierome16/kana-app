import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


export default props => {
    return (
        <div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 550 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src='/logo.png' /> Sign up for an account
                </Header>
                <Form size='large'>
                    <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='First Name' />
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='Last Name' />
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
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
                    Already a user? <a href='#'>Log in</a>
                </Message>
                </Grid.Column>
            </Grid>
        </div>
    )
}
