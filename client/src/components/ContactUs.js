import React from 'react';
import { Input, Button, Modal } from 'semantic-ui-react'
import MSidebar from './Sidebar'


export default props => {
  
  function handleSubmit(e) {
    e.preventDefault()
  }
  

  return (
    <div className='contactus'> 
      <MSidebar >
        <form className='contactform'>
      
          <div id='title'>
            <h1>Contact us</h1>
          </div>
          <div className='inputs'>
            <Input id='inputs' focus placeholder='Name' />
            <Input id='inputs' focus placeholder='Email address' />
            <Input id='inputs' focus placeholder='Phone number' />

            <textarea id='textarea' placeholder="Tell us more" rows="5"></textarea>
          </div>      
        </form>
     </MSidebar>
     <Modal id='modal' trigger =
        {<Button fluid id="save" onClick={e => handleSubmit(e) }>Submit</Button>}
        header='Thank you!'
        content='Your form has been submitted succesfully! We will get back to you soon'
        actions={[{ key: 'done', content: 'Done', positive: true}]}
      />
    </div>
  );
}
