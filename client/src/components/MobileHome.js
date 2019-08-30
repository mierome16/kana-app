import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
    return (
        <div className="mhpage">
            <header className="mhheader">
                <Link to="/login"><button>Log in</button></Link>
                <Link to="/register"><button>Sign up</button></Link>
            </header>
            <div className="mhlogo"></div>
            <Link to="/about-kana"><div className="aboutkana">About Kana</div></Link>
            
        </div>
    )
}
