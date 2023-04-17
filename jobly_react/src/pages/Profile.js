import React,{useState,useEffect} from 'react'
import '../CSS/Profile.css'
import JoblyApi from "../api";

const Profile = ({userInfo,data}) => {
  console.log(userInfo)
  console.log(data)
  const [dt,setDt]=useState(null)

  
  const ITEM = {
    username: null,
    password: null,
    firstName: null,
    lastName: null,
    email: null,
  };
const [item,setItem]=useState(ITEM);
const [formData,setFormData]=useState(ITEM);
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


const getUserInfo = async (username) => {
  console.log(username);

   try {
    let result=await JoblyApi.getInfoUser(username);
     console.log(result);
    //  setData(result);
     console.log(result, "result");
     console.log(data)
   } catch (e) {
     console.error(e);
   }
 };


useEffect(()=>{
  getUserInfo(username)
  
  },[username])
  console.log(dt)








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
    <div className="Profile">
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