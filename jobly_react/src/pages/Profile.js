import React,{useState,useEffect} from 'react'
import '../CSS/Profile.css'
import JoblyApi from "../api";
import { useJwt } from "react-jwt";
import uuid from 'react-uuid';



const Profile = ({userInfo,token}) => {
  
  const ITEM = {
    username: null,
    password: null,
    firstName:null,
    lastName: null,
    email: null,
  };
const [item,setItem]=useState(ITEM);
const [formData,setFormData]=useState(ITEM);
const { decodedToken, isExpired } = useJwt(token);
console.log(decodedToken)
const getInfo=async(username)=>{
  
    
  let res=JoblyApi.getInfoUser(username)
}



const handleChange = async (e) => {
  const { name, value } = e.target;
  setItem({ ...item, [e.target.name]: e.target.value });
  setFormData((formData) => ({
    ...formData,
    [name]: value,
  }));

};
// let username = userInfo?userInfo.username:""
const {username}=userInfo
console.log(username)


console.log(decodedToken)


const handleSubmit=async(e)=>{
  e.preventDefault();

  let username = userInfo?userInfo.username:""
  console.log(username,'username')
  setFormData(ITEM);
  try{
    let result= await JoblyApi.profile(username,formData)

    console.log(result)

  }catch(e){
    console.error(e)
  }

 
}





  return (
    <div className="Profile" key={uuid()}>
      <h3>PROFILE</h3>
      <form onSubmit={handleSubmit} className="Profile-form">
        <label>USERNAME</label>
        <input name="username" type='text' value={formData.username} onChange={handleChange}/>
        <label>PASSWORD</label>
        <input name="password" type='text' value={formData.password} onChange={handleChange}/>
        <label>FIRST NAME</label>
        <input name="firstName" type='text' value={formData.firstName} onChange={handleChange}/>
        <label>LAST NAME</label>
        <input name="lastName" type='text' value={formData.lastName} onChange={handleChange}/>
        <label>E-MAIL</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange}/>

      <button className='Profile-btn'>EDIT</button>
      </form>

    </div>
  )
}

export default Profile