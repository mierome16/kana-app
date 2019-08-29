import React, {useEffect} from 'react'
import {Link} from "react-router-dom"
import {useSelector} from 'react-redux'
import { Button } from 'semantic-ui-react'

import MealButton from './MealButton'



export default props => {
  const selectedMeals = useSelector(appState => appState.dietReducer.selectedMeals)
  console.log(selectedMeals)
  
  const meals = [
    {name: 'Coffee', img:'/Icons/coffee.png'},
    {name: 'Breakfast', img:'/Icons/breakfast.png'},
    {name: 'Brunch', img:'/Icons/brunch.png'},
    {name: 'Lunch', img:"/Icons/lunch.png" },
    {name: 'Dinner', img:'/Icons/dinner.png'}
  ]

  return (
    <div className="MealOptions">
      <div className='top'>
        <h2>What are you in the mood for?</h2>
      </div>

      <div className='meals'>
        {meals.map((meal, i) => (
          <div key={'meal' + i} id={meal.name} className='meal'>
          <MealButton meal={meal.name} img={meal.img} active={selectedMeals.find(selectedMeal => selectedMeal === meal.name)} />
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