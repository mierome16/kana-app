import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default props => {
  
    return (
      <div className='EatOptions'>
        <div>
          <h1>Pick your dining option</h1>
        </div>
        <div>
          <Link to='/reservation'><Button color='green' toggle >
            Dine-in
          </Button></Link>
        </div>
        <div>
          <Link to='/order' ><Button toggle color='blue'>
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
