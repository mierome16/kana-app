import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import {toggleDiet} from '../actions/meal.actions'

export default props => {
  const [active, setActive] = useState('')
  function handleClick() {
    toggleDiet(props.diet)
    active === '' ? setActive('5px solid #8f0a03') : setActive('')
  }

  return (
      <Button id='diet-button' disabled={props.disabled} style={{border: active}} toggle onClick={handleClick}>
        <img src={props.img} alt={props.diet}></img>
        <p>{props.diet}</p>
      </Button>
  )
}