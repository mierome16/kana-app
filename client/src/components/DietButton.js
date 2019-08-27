import React from 'react'
import { Button } from 'semantic-ui-react'
import {toggleDiet} from '../actions/diet.actions'

export default props => {

  function handleClick() {
    toggleDiet(props.diet)
  }

  return (
      <Button active={props.active} toggle onClick={handleClick}>{props.diet}</Button>
  )
}