import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import moment from 'moment'

export default props => {
  
    return (
      <div className='EatOptions'>
        <div>
          <h1>Success!</h1>
        </div>
        <div>
          <p>Your order has been successfully placed. A confirmation receipt has also been sent to your email</p>
        </div>
        <div>
          <h3>Confirmation Number: #123456</h3>
          <p>Order Placed: {moment(new Date()).format('LLL')}</p>
        </div>
      </div>
    )
  }
