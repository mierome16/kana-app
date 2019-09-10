import React, {useState} from 'react'
import { Radio, Input, Form, Label, TextArea, Button, Confirm, Grid } from 'semantic-ui-react'

export default props => {
  const [confirm, setConfirm] = useState({open: false})

  function open(){
    setConfirm({ open: true })
  }
  function close(){
    setConfirm({ open: false })
  }

  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <div id="additempage">
      <h1>add item</h1>
      <Form onSubmit={handleSubmit}>
      <Grid>
        <Grid.Column>
        <Form.Group>
          <Input type="text" placeholder="Menu Item Name"/>
        </Form.Group>
        <Form.Group>
          <TextArea placeholder="Menu Item Description" />
        </Form.Group>
        <Form.Group>
          <Label content="Dietary Restrictions"></Label>
          <Radio label="Vegetarian"/>
          <Radio label="Vegan"/>
          <Radio label="Gluten Free"/>
          <Radio label="Dairy Free"/>
          <Radio label="Nut Free"/>
          <Radio label="Spicy"/>
        </Form.Group>
        <Form.Group>
          <Input labelPosition='right' type='text' placeholder='Amount'>
            <Label basic>$</Label>
            <input placeholder="Menu Item Price"/>
            <Label>.00</Label>
          </Input>
        </Form.Group>
        <Form.Group style={{display: 'flex', flexDirection: 'column'}}>
          <Label content="Menu Item Image"></Label>
          <Input type="file" />
        </Form.Group>
        <div>
          <Button onClick={open}>Add Item</Button>
          <Confirm
            open={confirm.open}
            onCancel={close}
            onConfirm={close}
          />
      </div>
            </Grid.Column>
        </Grid>
      </Form>
      
    </div>
  )
}

