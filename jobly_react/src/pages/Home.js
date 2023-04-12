import React from 'react'
import  {Link} from "react-router-dom"
import '../CSS/Home.css';
const Home = () => {
  return (
    <div className='Home'>
      <h2>JOBLY</h2>
      <p>All the jobs in one, convenient place.</p>
      <div className='Home-btn'>
        <Link to='/login'>
          <span>Login</span>
        </Link>
        <Link to='/signup'>
          <span>Sign Up</span>
        </Link>

      </div>

    </div>
  )
}

export default Home