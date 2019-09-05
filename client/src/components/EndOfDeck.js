import React from 'react'
import {Link} from 'react-router-dom'
import {jokes} from './Loading'


export default props => {
  const joke = jokes[Math.floor(Math.random()*jokes.length)]

  return (
    <div className="noresults">
      <div className='joke'>
        <p className='joke-q'>{joke.q}</p>
        <p className='joke-a fadeIn'>{joke.a}</p>
      </div>
      <Link to='/swipe' style={{color: 'white', fontWeight: 'lighter'}}>
        <div className='textbox'>
          <h1>You've seen it all!</h1>
          <h3>Click to start over and don't be so picky this time, ok?</h3>
        </div>
      </Link>
    </div>
  )
}