import React, { useState } from 'react'
import { Form, Container, Header, Divider, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
 
export default props => { 
  const [values, setValues] = useState({
    quantity: 1,
    notes: '',
    size: ''
  })

  function handleChange(e) {
    setValues({
      ...values, 
      [e.target.name]: e.target.value
    })
  }
  console.log(values)
  
    return (
      <Container style={{'padding': '1em'}}>
        <Header as='h3' style={{'paddingTop': '1em', 'textAlign': 'center' }}>
          Confirm Your Order
        </Header>
        <Divider />
        <Header as='h4'>
          Item
        </Header>
        <p>Grilled Cheese</p>
        <Header as='h4'>
          Restaurant Details
        </Header>
        <p>PunchCode Cafe</p>
        <p>1112 S Casino Center Blvd, Las Vegas, NV 89104</p>
        <p>702-123-4567</p>
        <p>(possible maps api below)</p>
        <Image bordered rounded size='small' src='https://www.google.com/maps/d/thumbnail?mid=1CoxrxicMw4uSYPjPb20L6eQisoI&hl=en_US' />
        <Form>
            <Form.Group widths='equal'>
              <Form.Field>
                <label>Size:</label>
                <input type="text" name='size' value={values.size} onChange={handleChange} placeholder="Leave blank if not applicable" />
              </Form.Field>
              <Form.Field>
                <label>Quantity:</label>
                <input type="number" name='quantity' value={values.quantity} onChange={handleChange} />
              </Form.Field>
            </Form.Group>
          <Form.TextArea name="notes" label='Notes/Special Instructions' value={values.notes} onChange={handleChange}/>
          <Form.Checkbox label='I agree to place my order for pick up and pay upon arrival' />
            <Header>
            Total: $10.00
            </Header>
          <Link to="/confirm">
            <Form.Button inverted color="orange">Place Order</Form.Button> 
          </Link>
        </Form>
        
      </Container>
    )
  }


