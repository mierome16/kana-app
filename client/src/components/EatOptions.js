import React from 'react'
import { Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default props => {
  
    return (
      <div className='EatOptions'>
        <div>
          <h1>Pick your dining option</h1>
        </div>
        <div>
          <Link to='/reservation'><Button style={{background: '#8f0a03', color: 'white', fontSize: '17px', boxShadow: '2px 3px 8px black'}} toggle >
            Dine-in
          </Button></Link>
        </div>
        <div>
          <Link to='/order' ><Button toggle style={{background: '#8f0a03', color: 'white', fontSize: '17px', boxShadow: '2px 3px 8px black'}}>
            Pick-up
          </Button></Link>
        </div>
        <div>
          <Button toggle disabled >
            Delivery
          </Button>
          <h6>Coming soon</h6>
        </div>
      </div>
    )
  }
