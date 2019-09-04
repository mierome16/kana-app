import React, { useEffect } from 'react' 
import { useSelector } from 'react-redux'
import { getMenuItems } from '../actions/meal.actions'
import { Link } from 'react-router-dom'

export default props => {
  const foodItems = useSelector(appState => appState.dietReducer.allItems)
  const selectedDiets = useSelector(appState => appState.dietReducer.selectedDiets)

  console.log(foodItems)
   useEffect(() => {
      //stackedCards()
      if(selectedDiets.length === 0){
        getMenuItems('none')

      } else {
      getMenuItems(selectedDiets)
      }
     
      }, [])

  return (
    <Link to="/swipe">I got the items</Link>
      )
}