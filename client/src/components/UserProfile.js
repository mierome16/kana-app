import React from 'react' 
import { Form, Icon, Button, Header } from 'semantic-ui-react'
import MSidebar from './Sidebar'
//probably use a card
export default props => {
  //submit changes
  //on click show message that changes have been saved
  return (
    <MSidebar>
      <div style={{margin:'auto', textAlign:'center'}}>
        <Header as="h1" style={{textTransform:'capitalize'}}>{localStorage.getItem('username')}</Header>
        <Icon name="user" size="huge" />
      </div>
      <Form>
        <Form.Group style={{padding:'10px 30px'}}>
          <Icon name="user" />
          <Form.Input label="username" value="username"/>
        </Form.Group>
        <Form.Group style={{padding:'10px 30px'}}>
          <Icon name="mobile alternate" />
          <Form.Input label="phone" value="number"/>
        </Form.Group>
        <Form.Group style={{padding:'10px 30px'}}>
          <Icon name="envelope" />
          <Form.Input label="email" value="email"/>
        </Form.Group>
        <Form.Group style={{padding:'10px 30px'}}>
          <Icon name="users" />
          <Form.Input label="Invite Code" value="invite"/>
        </Form.Group>
        <Form.Group style={{padding:'10px 30px'}}>
          <Icon name="lock" />
          <Form.Input label="password" value="password"/>
        </Form.Group>
        <Button fluid type="submit">Submit</Button>
      </Form>
    </MSidebar>
  )
}