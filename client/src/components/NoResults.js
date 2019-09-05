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
      <div className='textbox'>
        <h1>..Empty Stomach..</h1>
        <h3>No results found. Try widening your search criteria.</h3>
      </div>
      <Link to='/profile'><button>Back to profile</button></Link>
    </div>
  )
}