import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import {toggleMeal} from '../actions/meal.actions'

export default props => {
  const [active, setActive] = useState('')
  function handleClick() {
    toggleMeal(props.meal)
    active === '' ? setActive('5px solid #8f0a03') : setActive('')
  }

  return (
    <Button fluid className="button" id='meal-button' disabled={props.disabled} style={{border: active}} toggle onClick={handleClick}>
      <img src={props.img} alt={props.meal} />
      <p>{props.meal}</p>
    </Button>
  )
}