import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import { resRegister } from '../actions/restaurant.actions';
  

export default props => {
    const [res_name, setRes_name] = useState('')
    const [res_address, setRes_address] = useState('')
    const [res_city, setRes_city] = useState('')
    const [res_state, setRes_state] = useState('')
    const [res_zip, setRes_zip] = useState('')


    function handleSubmit(){
        resRegister(res_name, res_address, res_city, res_state, res_zip)
        console.log(res_name, res_address, res_city, res_state, res_zip)
    }


    return (
    <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Input value= {res_name} onChange={e => setRes_name(e.target.value)} fluid label='Restaurant Name' placeholder='Restaurant Name' style={{width: '80vw'}}/>
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Input value= {res_address} onChange={e => setRes_address(e.target.value)} fluid label='Restaurant Address' placeholder='Restaurant Address' />
                <Form.Input value= {res_city} onChange={e => setRes_city(e.target.value)} fluid label='Restaurant City' placeholder='Restaurant City' />
                <Form.Input value= {res_state} onChange={e => setRes_state(e.target.value)} fluid label='Restaurant State' placeholder='Restaurant State' />
                <Form.Input value= {res_zip} onChange={e => setRes_zip(e.target.value)} fluid label='Restaurant Zipcode' placeholder='Restaurant Zipcode' />
            </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about your restaurant...' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Submit</Form.Button>
      </Form>
        </div>
    )
}
