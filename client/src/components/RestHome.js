import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/resthome.css'

export default props => {
    return (
        <div className="resthomepage">
            <header className="rhheader">
                <h2>KANA</h2>
                <div>
                <Link to="/restaurant-login"><button>Log in</button></Link>
                <Link to="/restaurant-register"><button>Register</button></Link>
                </div>
            </header>
            <div className="rheading">
                <div className="joinkana">
                <h1>JOIN KANA</h1>
                <h3>Grow your restaurant business</h3>
                <p>Register today and allow others to discover your meals</p>
                <Link to="/restaurant-register"><button>Register</button></Link>
                </div>
            <div className="rescontainer">
                <div className="reslogo"></div>
                <div className="stepone">
                    <h2>Step 1:</h2>
                    <h5>Register for Kana</h5>
                    {/* <p></p> */}
                </div>
                <div className="steptwo">
                    <h2>Step 2:</h2>
                    <h5>Add menu items</h5>
                </div>
                <div className="stepthree">
                    <h2>Step 3:</h2>
                    <h5>Grow your business!</h5>
                </div>

            </div>
            </div>
        </div>
    )
}
