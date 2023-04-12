import React from 'react'
import  {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../CSS/navbar.css';

const Navb = () => {
  return (
      <nav className='Nav'>
        <div className='Navb-right'>
          <Link to='/'>
            <span>Home</span>
          </Link>
        </div>

        <div className='Navb-left'>
          <Link to='/login'>
          <span>Login</span>

          </Link>
          <Link to='/signup'>
            <span> Sign Up</span>
           </Link>
           <Link to='/companies'>
            <span> Companies</span>
           </Link>
        </div>

      </nav>
  )
}

export default Navb