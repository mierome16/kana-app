import React, {useEffect} from 'react'
import {Link} from "react-router-dom"
import {useSelector} from 'react-redux'
import { Button } from 'semantic-ui-react'
import {getMeals} from '../actions/meal.actions'
import MSidebar from './Sidebar'
import MealButton from './MealButton'


export default props => {
  const meals = useSelector(appState => appState.mealReducer.meals)
  const selectedMeals = useSelector(appState => appState.mealReducer.selectedMeals)
  const selectedDiets = useSelector(appState => appState.mealReducer.selectedDiets)
  
  useEffect(() => {
    getMeals()
  }, [])

  return (
    
    <div className="MealOptions">
    <MSidebar>
      <div className='top'>
        <h2>What are you in the mood for?</h2>
      </div>

      <div className='meals'>
        {meals.map((meal, i) => (
          <div key={'meal' + i} id={meal.name} className='meal'>
          <MealButton meal={meal.name} img={meal.img} active={selectedMeals.find(selectedMeal => selectedMeal === meal.name) !== undefined} />
          </div>
          ))}
      </div> 
          
      <div className='save'>
        <Link to='/swipe'>
          <Button fluid id="save" type='Submit' >Continue</Button>
        </Link>
      </div>
      </MSidebar>

    </div>
  )
}