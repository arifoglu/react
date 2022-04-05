import React from 'react'
import { Link } from 'react-router-dom'


const Navbars = () => {
  return (
    <nav className="navbar">
        <h1>New PAGE</h1>
        <div className="links" >
            <Link to='/'>Home</Link>
            <Link to='/create'>New Blog</Link>
        </div>
    </nav>
  )
}

export default Navbars
