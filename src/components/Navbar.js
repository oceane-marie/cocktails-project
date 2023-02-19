import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../rabbit'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='rabbit' className='logo'/>
        </Link>
        <ul className='nav-links'>
          <li>
            <Link>Home</Link>
          </li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
