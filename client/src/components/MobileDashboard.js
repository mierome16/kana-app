import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
 return (
  <div className="mobiledashpage">
     <header>Kana</header>
    <div className="dashcontainer">
     <Link to="/user"><div className="myprofiledash"><h2>My Profile</h2></div></Link>
     <Link to="/profile"><div className="startorderdash"><h2>Start Order</h2></div></Link>
     <Link to="/orders"><div className="pastordersdash"><h2>Past Orders</h2></div></Link>
     <Link to="/favorites"><div className="favdash"><h2>Favorites</h2></div></Link>
    </div>
  </div>
 )
}
