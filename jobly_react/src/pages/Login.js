import React from 'react'
import '../CSS/App.css';
const Login = () => {
  return (
    <div className='Login'>
<form className='Login-form'>
  <label>USERNAME</label>
  <input type='text'/>
  <label>PASSWORD</label>
  <input type='text'/>
  <button className='Login-btn'>SUBMIT</button>
</form>

    </div>
  )
}

export default Login