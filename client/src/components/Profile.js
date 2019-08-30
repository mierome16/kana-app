import React, {useEffect} from 'react'
import {Link} from "react-router-dom"
import { Input } from 'semantic-ui-react'
import {useSelector} from 'react-redux'

import { Button } from 'semantic-ui-react'

import DietButton from './DietButton'
import { sendDiets } from '../actions/diet.actions'


export default props => {
  const selectedDiets = useSelector(appState => appState.dietReducer.selectedDiets)
  const user = useSelector(appState => appState.authReducer.users)
  console.log(selectedDiets)
  
  const diets = [
    {name: 'Vegetarian', disabled: false, img:'/Icons/vegetarian.png' },
    {name: 'Vegan', disabled: false, img:'/Icons/vegan.png'},
    {name: 'Gluten-free', disabled: false, img:'/Icons/GF.png'},
    {name: 'Nut-free', disabled: false, img:'/Icons/nutfree.png'},
    {name: 'Dairy-free', disabled: false, img:'/Icons/dairyFree.png'},
    {name: 'Spicy', disabled: false, img:'/Icons/spicy.png'},
    {name: 'Halal', disabled: true, img:'/Icons/halal.png'},
    {name: 'Kosher', disabled: true, img:'/Icons/kosher.png'}
  ]

  // function handleSubmit(e) {
  //   sendDiets(selectedDiets)
  // }

  return (
    <div className="Profile">
      <div className='top'>
        <h1>Welcome {user[user.length - 1]}!</h1>
        <h2>Let's set up your preferences..</h2>
      </div>
      
      {/* <div className='location'>
        <label>Set your Home location</label>
        <Input icon='search' type='text' placeholder='enter either address, city or zipcode' style={{'marginTop':'10px','width':'90%'}}></Input>
      </div> */}

      <div className='diet'>
        {diets.map((diet, i) => (
          <div key={'diet' + i}>
          <DietButton diet={diet.name} img={diet.img} disabled={diet.disabled} active={selectedDiets.find(selectedDiet => selectedDiet === diet.name)}/>
          </div>
          ))}
      </div> 

      <div className='save'>

        <Link to='/swipe'>
          <Button fluid id="save" type='Submit' >Continue</Button>
        </Link>
      </div>
    </div>
  )
}
