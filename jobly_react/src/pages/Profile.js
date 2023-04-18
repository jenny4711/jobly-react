import React,{useState,useEffect} from 'react'
import '../CSS/Profile.css'
import JoblyApi from "../api";
import { useJwt } from "react-jwt";
import uuid from 'react-uuid';



const Profile = ({userInfo,token}) => {

  const [dt,setDt]=useState("")
  const ITEM = {
    username: dt.username,
    password: dt.password,
    firstName:dt.firstName,
    lastName: dt.lastName,
    email: dt.email,
  };


const [item,setItem]=useState(ITEM);
const [formData,setFormData]=useState({
  username: dt.username,
  password: "",
  firstName:dt.firstName,
  lastName: dt.lastName,
  email: dt.email,
});

const { decodedToken, isExpired } = useJwt(localStorage.token);

console.log(dt)
const getInfo=async()=>{
  const username= decodedToken.username

console.log(username)
  
  let res=await JoblyApi.getInfoUser(username)
  console.log(res)
  setDt(res)
}


useEffect(()=>{
getInfo()
},[])

const handleChange = async (e) => {
  const { name, value } = e.target;
  setDt(d=>({
    ...d,
    [name]:value,
  }))
};

console.log(dt)



const handleSubmit=async(e)=>{
  e.preventDefault();

 
  try{
    const username=userInfo.username
    let result= await JoblyApi.profile(username,dt)

    console.log(result,'update')

  }catch(e){
    console.error(e)
  }

 
}





  return (
    <div className="Profile" key={dt.username}>
      <h3>PROFILE</h3>
      <form className="Profile-form" onSubmit={handleSubmit}>
        <label>USERNAME</label>
        <input name="username" type='text' value={dt.username} onChange={handleChange}/>
        <label>PASSWORD</label>
        <input name="password" type='text' value={dt.password} onChange={handleChange} />
      
        <label>FIRST NAME</label>
        <input name="firstName" type='text' value={dt.firstName} onChange={handleChange}/>
        <label>LAST NAME</label>
        <input name="lastName" type='text' value={dt.lastName} onChange={handleChange}/>
        <label>E-MAIL</label>
        <input name="email" type="email" value={dt.email}onChange={handleChange} />

      <button className='Profile-btn'>EDIT</button>
      </form>

    </div>
  )
}

export default Profile