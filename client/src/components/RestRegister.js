import React, { useState } from 'react'
import { Form, Grid, Header, Message } from 'semantic-ui-react'
import { resRegister } from '../actions/restaurant.actions';
import { Link } from 'react-router-dom'
import '../styles/resthome.css'

export default props => {
    const [res_name, setRes_name] = useState('')
    const [res_address, setRes_address] = useState('')
    const [res_city, setRes_city] = useState('')
    const [res_state, setRes_state] = useState('')
    const [res_zip, setRes_zip] = useState('')
    const [res_email, setRes_email] = useState('')
    const [res_password, setRes_password] = useState('')


    function handleSubmit(){
        resRegister(res_name, res_address, res_city, res_state, res_zip)
        console.log(res_name, res_address, res_city, res_state, res_zip)
    }


    return (
    <div className="resregisterpage">
         <Grid textAlign='center' style={{ height: '100vh', width: '60vw' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 1000, marginLeft: '65%' }}>
      <Header as='h2' style={{color:'#8f0a03', textAlign:'center'}}>
         Register your Restaurant
      </Header>
      <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Input value= {res_name} onChange={e => setRes_name(e.target.value)} fluid label='Restaurant Name' placeholder='Restaurant Name' style={{width: '800px'}}/>
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Input value= {res_address} onChange={e => setRes_address(e.target.value)} fluid label='Restaurant Address' placeholder='Restaurant Address' />
                <Form.Input value= {res_city} onChange={e => setRes_city(e.target.value)} fluid label='Restaurant City' placeholder='Restaurant City' />
                <Form.Input value= {res_state} onChange={e => setRes_state(e.target.value)} fluid label='Restaurant State' placeholder='Restaurant State' />
                <Form.Input value= {res_zip} onChange={e => setRes_zip(e.target.value)} fluid label='Restaurant Zipcode' placeholder='Restaurant Zipcode' />
            </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about your restaurant...' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
            <Form.Group>
                <Form.Input value={res_email} onChange={e => setRes_email(e.target.value)} fluid label="Restaurant Email Address" placeholder="Restaurant Email Address" style={{width: '400px'}}/>
                <Form.Input value={res_password} onChange={e => setRes_password(e.target.value)} fluid label="Restaurant Password" placeholder="Restaurant Password" style={{width: '400px'}}/>
            </Form.Group>
        <Form.Button style={{background: '#8f0a03', color: 'white'}}>Submit</Form.Button>
      </Form>
      <Message>
        Already a Restaurant User? <Link to="/restaurant-login"><a href='#'>Log in</a></Link>
      </Message>
    </Grid.Column>
  </Grid>
        </div>
    )
}
