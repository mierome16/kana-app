import React from 'react' 
import { Form, Icon, Button, Header } from 'semantic-ui-react'
import MSidebar from './Sidebar'
export default props => {
  return (
    <MSidebar>
      <div style={{margin:'auto', textAlign:'center', padding:50, background:'darkred'}}>
        <Icon name="user" size="huge" />
        <Header as="h1" style={{textTransform:'capitalize'}}>{localStorage.getItem('username')}</Header>
      </div>
      <Form style={{padding:'25px'}}>
        <Form.Group style={{padding:'10px 30px', display:'flex', alignItems:'center'}}>
          <Icon size="large" name="user" />
          <Form.Input style={{width:'225px'}} name="username" value="Username"/>
        </Form.Group>
        <Form.Group style={{padding:'10px 30px', display:'flex', alignItems:'center'}}>
          <Icon size="large" name="mobile alternate" />
          <Form.Input style={{width:'225px'}} name="phone" value="Number"/>
        </Form.Group>
        <Form.Group style={{padding:'10px 30px', display:'flex', alignItems:'center'}}>
          <Icon size="large" name="envelope" />
          <Form.Input style={{width:'225px'}} name="envelope" value="Email"/>
        </Form.Group>
        <Form.Group style={{padding:'10px 30px', display:'flex', alignItems:'center'}}>
          <Icon size="large" name="users" />
          <Form.Input style={{width:'225px'}} name="invite" value="Invite"/>
        </Form.Group>
        <Form.Group style={{padding:'10px 30px', display:'flex', alignItems:'center'}}>
          <Icon size="large" name="lock" />
          <Form.Input style={{width:'225px'}} name="password" value="Password"/>
        </Form.Group>
        <Button style={{padding:'20px', fontSize:'20px', position:'absolute', bottom:'-55px', left:'0px'}} fluid type="submit">Submit</Button>
      </Form>
    </MSidebar>
  )
}