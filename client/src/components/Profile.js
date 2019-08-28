import React, {useEffect} from 'react'
import {Link} from "react-router-dom"
import { Input } from 'semantic-ui-react'
import {useSelector} from 'react-redux'
import { Button } from 'semantic-ui-react'
import {getAllergyFreeItems, getMenuItems} from '../actions/diet.actions'

import DietButton from './DietButton'


export default props => {
  const selectedDiets = useSelector(appState => appState.dietReducer.selectedDiets)
  console.log(selectedDiets)
  const allItems = useSelector(appState => appState.dietReducer.allItems)
  
  const diets = [
    {name: 'Vegetarian', disabled: false, img:'/Icons/vegetarian.png' },
    {name: 'Vegan', disabled: false, img:'/Icons/vegan.png'},
    {name: 'Gluten_free', disabled: false, img:'/Icons/GF.png'},
    {name: 'Nut_free', disabled: false, img:'/Icons/nutfree.png'},
    {name: 'Dairy_free', disabled: false, img:'/Icons/dairyFree.png'},
    {name: 'Spicy', disabled: false, img:'/Icons/spicy.png'},
    {name: 'Halal', disabled: true, img:'/Icons/halal.png'},
    {name: 'Kosher', disabled: true, img:'/Icons/kosher.png'}
  ]

  return (
    <div className="Profile">
      <div className='top'>
        <h1>Welcome <i>name</i>!</h1>
        <h2>Let's set up your preferences..</h2>
      </div>
      
      <div className='location'>
        <label>Set your Home location</label>
        <Input icon='search' type='text' placeholder='enter either address, city or zipcode' style={{'marginTop':'10px','width':'90%'}}></Input>
      </div>

      <div className='diet'>
        {diets.map((diet, i) => (
          <div key={'diet' + i}>
          <DietButton diet={diet.name} img={diet.img} disabled={diet.disabled} active={selectedDiets.find(selectedDiet => selectedDiet === diet.name)}/>
          </div>
          ))}
      </div> 

      <div className='save'>
        <Link to='/foodfinder'>
          <Button fluid id="save" type='Submit' >Continue</Button>
          </Link>
      </div>
    </div>
  )
}








