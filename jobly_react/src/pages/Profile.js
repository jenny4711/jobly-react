import React,{useState,useEffect} from 'react'
import '../CSS/Profile.css'
import JoblyApi from "../api";





const Profile = ({log,userInfo,token,dt,setDt}) => {
console.log(dt)






  const handleSubmit=async(e)=>{
    e.preventDefault();
    let {username}=userInfo
    console.log(username)
    try{
      let res= await JoblyApi.profile(username,dt)
      console.log(res,'saved')

    }catch (e){
      console.error(e)
    }


  }

  const handleChange=(e)=>{
    e.preventDefault();
    const {name,value}=e.target;
    setDt(d=>({
      ...d,
      [name]:value,
    }))
console.log(e.target)
    
  }

console.log(dt)







  return (
    <div className="Profile" >
      <h3>PROFILE</h3>
      <form className="Profile-form" onSubmit={handleSubmit} >
        <label>USERNAME</label>
        <input name="username" type='text' value={dt.username} onChange={handleChange}/>
        <label>PASSWORD</label>
        <input name="password" type='text' value={dt.password} onChange={handleChange}/>
      
        <label>FIRST NAME</label>
        <input name="firstName" type='text' value={dt.firstName} onChange={handleChange} />
        <label>LAST NAME</label>
        <input name="lastName" type='text' value={dt.lastName} onChange={handleChange}/>
        <label>E-MAIL</label>
        <input name="email" type="email" value={dt.email} onChange={handleChange}/>

      <button className='Profile-btn'>EDIT</button>
      </form>

    </div>
  )
}

export default Profile