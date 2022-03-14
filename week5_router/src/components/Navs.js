import React from 'react'
import { Link } from 'react-router-dom'


const Navs = () => {
  return (
    <div id="navbar">
      <ul className="nav bg-info">
          <li className="nav-link">
           <Link to="/">HOME</Link> 
          </li>
          <li className="nav-link">
           <Link to="/About">ABOUT</Link>  
          </li>
          <li className="nav-link">
          <Link to="/Contact">CONTACT</Link>  
          </li>
        </ul>
    </div>
  )
}

export default Navs
