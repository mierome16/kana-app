import React, {useEffect} from 'react'
import {Link} from "react-router-dom"
import {useSelector} from 'react-redux'
import { Button } from 'semantic-ui-react'
import DietButton from './DietButton'
import { getDiets } from '../actions/meal.actions'
import { getMenuItems } from '../actions/meal.actions'
import MSidebar from './Sidebar'


export default props => {
  const allItems = useSelector(appState => appState.mealReducer.allItems)
  const selectedDiets = useSelector(appState => appState.mealReducer.selectedDiets)
  const selectedMeals = useSelector(appState => appState.mealReducer.selectedMeals)
  const user = useSelector(appState => appState.authReducer.user)
  const diets = useSelector(appState => appState.mealReducer.diets)
  
  console.log(user)
  useEffect(() => {
    getDiets()
    // getMenuItems(selectedDiets, selectedMeals)
  }, [])


  return (
    <div className="Profile">
      <MSidebar>
      <div className='top'>
        <h1 style={{textTransform: 'capitalize'}}>Welcome {localStorage.getItem('user')}!</h1>
        <h2>Let's set up your preferences..</h2>
      </div>
      
      {/* <div className='location'>
        <label>Set your Home location</label>
        <Input icon='search' type='text' placeholder='enter either address, city or zipcode' style={{'marginTop':'10px','width':'90%'}}></Input>
      </div> */}

      <div className='diet'>
        {diets.map((diet, i) => (
          <div key={'diet' + i}>
          <DietButton diet={diet.name} img={diet.img} disabled={diet.disabled} active={selectedDiets.find(selectedDiet => selectedDiet === diet.name) !== undefined}/>
          </div>
          ))}
      </div> 

      <div className='save'>

        <Link to='/meal'>
          <Button fluid id="save" type='Submit' >Continue</Button>
        </Link>
      </div>
      </MSidebar>
    </div>
    
    
  )
}
