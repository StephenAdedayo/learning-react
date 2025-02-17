import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    
   <nav className="navbar">
    <h1>The steve's Blog</h1>

    <div className="links">
        {/* <a href="/">Home</a>
        <a href="/create">New Blog</a> */}
        <Link to="/">Home</Link>
        <Link to="/create">Create A Blog</Link>
    </div>
   </nav>
  )
}

export default Navbar
