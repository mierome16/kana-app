import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default props => {
    return (
        <div>
            
            <div className="mhpage">
                <div className="mhlogo"></div>
                <div className="mhlinks">
                <Link className="mhbutton" to="/login"><Button inverted>Log in</Button></Link>
                <Link className="mhbutton" to="/register"><Button inverted>Sign up</Button></Link>
                <Link className="mhbutton" to="/about"><Button id="about" inverted>About Kana</Button></Link>
                </div>
            </div>   
            
        </div>
        
    )
}
