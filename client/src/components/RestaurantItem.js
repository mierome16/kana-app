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
    <div id="additempage" style={{paddingTop: '3%'}}>
      <h1 style={{color: '#8f0a03'}}>Add a Menu Item</h1>
      <Form onSubmit={handleSubmit} style={{width: '700px', height: '600px',}}>
      <Grid>
        <Grid.Column>
        <Form.Group>
          <Input type="text" placeholder="Menu Item Name" style={{width: '100%', height: '50px'}}/>
        </Form.Group>
        <Form.Group>
          <TextArea placeholder="Menu Item Description" style={{ minHeight: '110px'}} />
        </Form.Group>
        <Form.Group style={{marginLeft:'30%'}}>
          <Input labelPosition='right' type='text' placeholder='Amount'>
            <Label style={{background: '#8f0a03', color: 'white'}} basic>$</Label>
            <input placeholder="Menu Item Price"/>
            <Label style={{background: '#8f0a03', color: 'white'}}>.00</Label>
          </Input>
        </Form.Group>
        <Form.Group style={{display: 'flex', flexDirection:'column'}}>
          <Label content="Dietary Restrictions" style={{background: '#8f0a03', color: 'white', width: '130px', marginBottom: '5px'}}></Label>
          <div style={{display: 'flex', flexDirection: 'column', height: '80px', flexWrap: 'wrap', paddingTop:'10px'}}>
          <Radio label="Vegetarian" style={{paddingBottom: '5px',}}/>
          <Radio label="Vegan"style={{paddingBottom: '5px'}}/>
          <Radio label="Gluten Free" style={{paddingBottom: '5px'}}/>
          <Radio label="Dairy Free" style={{paddingBottom: '5px'}}/>
          <Radio label="Nut Free" style={{paddingBottom: '5px'}}/>
          <Radio label="Spicy" style={{paddingBottom: '5px'}}/>
          </div>
        </Form.Group>
        <Form.Group style={{display: 'flex', flexDirection:'column'}}>
          <Label content="Meal Type" style={{background: '#8f0a03', color: 'white', width: '90px', marginBottom: '5px'}}></Label>
          <div style={{display: 'flex', flexDirection: 'column', height: '80px', flexWrap: 'wrap', paddingTop:'10px'}}>
          <Radio label="Coffee" style={{paddingBottom: '5px'}}/>
          <Radio label="Breakfast" style={{paddingBottom: '5px'}}/>
          <Radio label="Brunch" style={{paddingBottom: '5px'}}/>
          <Radio label="Lunch" style={{paddingBottom: '5px'}}/>
          <Radio label="Dinner" style={{paddingBottom: '5px'}}/>
          </div>
        </Form.Group>
        <Form.Group style={{display: 'flex', flexDirection:'column'}}>
          <Label content="Menu Item Image" style={{background: '#8f0a03', color: 'white', width: '120px', marginBottom: '5px'}}></Label>
          <Input type="file" style={{width: '100%'}}/>
        </Form.Group>
        <div>
          <Button onClick={open} style={{color: 'white', background: '#8f0a03', width: '100%', marginTop: '10px'}}>Add Item</Button>
          <Confirm
            open={confirm.open}
            onCancel={close}
            onConfirm={close}
            //props.history.push('/restaurant-profile')
          />
      </div>
            </Grid.Column>
        </Grid>
      </Form>
      
    </div>
  )
}

