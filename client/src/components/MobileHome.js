import React from 'react'
import { Link } from 'react-router-dom'
import MSidebar from './Sidebar';

export default props => {
    return (
        <div>
            
            <div className="mhpage">
                <MSidebar>
                {/* <header className="mhheader">
                    <Link to="/login"><button>Log in</button></Link>
                    <Link to="/register"><button>Sign up</button></Link>
                </header> */}
                <div className="mhlogo"></div>
                <Link to="/about-kana"><div className="aboutkana">About us</div></Link>
                </MSidebar>
            </div>   
            
        </div>
        
    )
}
