import React, {useEffect} from 'react'
import {Link} from "react-router-dom"
import { Input } from 'semantic-ui-react'
import {useSelector} from 'react-redux'
import {getAllergyFreeItems, getMenuItems} from '../actions/diet.actions'

import DietButton from './DietButton'


export default props => {
  const selectedDiets = useSelector(appState => appState.dietReducer.selectedDiets)
  console.log(selectedDiets)
  const allItems = useSelector(appState => appState.dietReducer.allItems)
  
  const diets = [
    'Vegetarian',
    'Vegan',
    'Gluten-free',
    'Nuts-free',
    'Dairy-free',
    'Spicy',
    'Halal',
    'Kosher'
  ]

  function getFilteredItems() {
    allItems.filter(item => item.includes())
  }
  console.log(allItems)

  useEffect(() => {
    getMenuItems()
    
    }, [])
  
  
  

  return (
    <div className="Profile">
      <div className='top'>
        <h1>Welcome <i>name</i>!</h1>
        <h2>Let's set up your preferences..</h2>
      </div>
      
      <div className='location'>
        <label>Set your Home location</label>
        <Input icon='search' type='text' placeholder='enter either address, city or zipcode' style={{'width':'90%'}}></Input>
      </div>

      <div className='diet'>
        {diets.map((diet, i) => (
          <div key={'diet' + i}>
          <DietButton diet={diet} active={selectedDiets.find(selectedDiet => selectedDiet === diet)}/>
          </div>
          ))}
      </div> 

      <div className='save'>
        <Link to='/foodfinder'><button type='Submit' OnSubmit={getFilteredItems} >Continue</button></Link>
      </div>
    </div>
  )
}

//OnSubmit={getMenuItems}






