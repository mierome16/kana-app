import React from 'react' 
import { Form, Icon, Header } from 'semantic-ui-react'
import shortid from 'shortid'
import MSidebar from './Sidebar'
import { Link } from 'react-router-dom'
export default props => {
 
  return (
    <MSidebar>
      <div id="user-pic">
        <div className="profile-pic"></div>
        <h1 style={{textTransform:'capitalize', color:'white', textAlign: 'center', marginTop:5}}>{localStorage.getItem('user')}</h1>
      </div>
      <Header style={{padding:'10px 0px', textAlign:'center', margin:'auto'}} as="h4">View account settings and group invite code</Header>
      <Form style={{paddingLeft: 30}}>
        <Form.Group style={{padding:'10px 30px', display:'flex', alignItems:'center'}}>
          <Icon size="large" name="user" />
          <Form.Input style={{width:'225px'}} name="username" value={localStorage.getItem('user')}/>
        </Form.Group>
        <Form.Group style={{padding:'10px 30px', display:'flex', alignItems:'center'}}>
          <Icon size="large" name="mobile alternate" />
          <Form.Input style={{width:'225px'}} name="phone" value="702-123-4567"/>
        </Form.Group>
        <Form.Group style={{padding:'10px 30px', display:'flex', alignItems:'center'}}>
          <Icon size="large" name="envelope" />
          <Form.Input style={{width:'225px'}} name="envelope" value={localStorage.getItem('user')+ '@punchcode.org'}/>
        </Form.Group>
        <Form.Group style={{padding:'10px 30px', display:'flex', alignItems:'center'}}>
          <Icon size="large" name="users" />
          <Form.Input style={{width:'225px'}} name="invite" value={localStorage.getItem('user') + shortid.generate() }/>
        </Form.Group>
        <Form.Group style={{padding:'10px 30px', display:'flex', alignItems:'center'}}>
          <Icon size="large" name="lock" />
          <Form.Input style={{width:'225px'}} name="password" value="********"/>
        </Form.Group>
      </Form>
        <Link to="/dashboard"><div className="submit-form" >Update Settings</div></Link>
    </MSidebar>
  )
}