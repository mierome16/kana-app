import React from 'react'
import {Link} from "react-router-dom"
import { Input, Button } from 'semantic-ui-react'


export default props => {
  const [active, setActive] = UseActive({})

  function handleClick() {
    setActive({
      ...active, 
    })
  }



  return (
    <div className="Profile">
      <div>
        <h1>Welcome <i>name</i>!</h1>
        <h2>Let's set up your preferences..</h2>
      </div>
      
      <div className='location'>
        <label>Set your Home location</label>
        <Input icon='search' type='text' placeholder='enter either address, city or zipcode' style={{'width':'90%'}}></Input>
      </div>

      <div className='diet'>
        <Button toggle active={active} onClick={handleClick}>
          Gluten Free
        </Button >
        <Button toggle active={active} onClick={handleClick}>
          Vegetarian
        </Button>
        <button>
          Vegan
        </button>
        <button>
          Spicy
        </button>
        <button>
          Nuts Free
        </button>
        <button>
          Dairy Free
        </button>
        <button disabled>
          Kosher
        </button>
        <button disabled>
          Halal
        </button>
      </div>

      <div className='save'>
        <Link to='/foodfinder'><button type='Submit'>Save</button></Link>
      </div>

    </div>
  )
}





