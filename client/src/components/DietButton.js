import React from 'react'
import { Button } from 'semantic-ui-react'
import {toggleDiet} from '../actions/diet.actions'

export default props => {

  function handleClick() {
    toggleDiet(props.diet)
  }

  return (
      <Button id='diet-button' disabled={props.disabled} active={props.active} toggle onClick={handleClick}>
        {/* <p>{props.diet}</p> */}
        <img src={props.img} alt={props.diet}></img>
      </Button>
  )
}