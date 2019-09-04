import React from 'react'
import { Button } from 'semantic-ui-react'
import {toggleMeal} from '../actions/meal.actions'

export default props => {

  function handleClick() {
    toggleMeal(props.meal)
  }

  return (
    <Button fluid className="button" id='meal-button' active={props.active} toggle onClick={handleClick}>
      <p>{props.meal}</p>
      <img src={props.img} alt={props.meal} />
    </Button>
  )
}