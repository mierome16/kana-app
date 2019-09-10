import React, {useEffect} from 'react'
import {Link} from "react-router-dom"
import {useSelector} from 'react-redux'
import { Button, Input } from 'semantic-ui-react'
import DietButton from './DietButton'
import { getDiets } from '../actions/meal.actions'
import MSidebar from './Sidebar'


export default props => {
  const selectedDiets = useSelector(appState => appState.mealReducer.selectedDiets)
  const diets = useSelector(appState => appState.mealReducer.diets)
  
  useEffect(() => {
    getDiets()
  }, [])


  return (
    <div className="Profile">
      <MSidebar>
      <div className='top'>
        <h1 style={{textTransform: 'capitalize'}}>Welcome {localStorage.getItem('username')}!</h1>
        <h2>Let's set up your preferences..</h2>
      </div>
      
      <div className='location'>
        <Input icon='search' type='text' placeholder='enter either address, city or zipcode' style={{'marginTop':'5px','width':'95%'}}></Input>
      </div>

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
