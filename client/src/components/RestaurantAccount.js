import React from 'react'
import { Link } from 'react-router-dom'

export default props => {


    return (
        <div id="resprofilepage">
            <div className="resproheader">
                <Link to="/restaurant-home"><h2>Kana</h2></Link>
                <div>
                    <button>Logout</button>
                    <button>My Restaurant</button>
                </div>
            </div>
            <div className="resproaddress">
                <h3>Restaurant Name</h3>
                <h5>1234 Restaurant St Las Vegas, NV 89031</h5>
            </div>
            <div className="profileoptions">
                <div className="inventory">
                <Link to="/restaurant-inventory">
                    <h1>My Inventory</h1></Link>
                </div>
                
                <div className="statbox">
                <Link to="/restaurant-statistics">
                    <h1>Restaurant Statistics</h1></Link>
                </div>
                
                <div className="additem">
                <Link to="/restaurant-additem"><h1>Add a Menu Item</h1></Link>
                </div>
            </div>
            <footer className="resprofooter">

            </footer>
        </div>
    )
}
