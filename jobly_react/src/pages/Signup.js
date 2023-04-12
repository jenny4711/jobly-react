import React from 'react'

const Signup = () => {
  return (
    <div className='Signup'>
<form className='Signup-form'>
<label>USERNAME</label>
  <input type='text'/>
  <label>PASSWORD</label>
  <input type='text'/>



  <label>FIRST NAME</label>
  <input type='text'/>
  <label>LAST NAME</label>
  <input type='text'/>
  <label>E-MAIL</label>
  <input type='text'/>
  <button className='Signup-btn'>SUBMIT</button>
</form>

    </div>
  )
}

export default Signup