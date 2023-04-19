import React, { useEffect, useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import uuid from 'react-uuid';

const Signup = ({  setLog ,signUp}) => {
  const ITEM = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    
  
  };
   
  const [formData, setFormData] = useState(ITEM);
  const [item, setItem] = useState(ITEM);
  const navigate = useNavigate();



  // useEffect(()=>{
  //   inputRef.current.focus()
   
  // })

  const handleChange=async (e)=>{
    const {name,value}=e.target;
    setItem({...item,[e.target.name]:e.target.value,});
    setFormData((formData)=>({
      ...formData,
      [name]:value,
    }));
   
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData(ITEM);
 let res = await signUp(formData)
    // setData(formData);
    console.log(res.success)
    if (res.success === true) {
      setLog(true);
      navigate("/");
    } else {
      setLog(false);
    }
  }


  return (
    <div className="Signup">
      <form className="Signup-form" onSubmit={handleSubmit}>
        <label>USERNAME</label>
        <input
          name="username"
          type="text"
          value={formData.username}
        
        
    
      onChange={handleChange}
      placeholder='USERNAME'
     
        />
        <label>PASSWORD</label>
        <input
          name="password"
          type="text"
          value={formData.password}
         onChange={handleChange}
         placeholder='PASSWORD'
        
       
        />

        <label>FIRST NAME</label>
        <input
          name="firstName"
          type="text"
          value={formData.firstName}
         onChange={handleChange}
         placeholder='FIRST NAME'
       
         
       
        />
        <label>LAST NAME</label>
        <input
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          placeholder='LAST NAME'
       
         
        />
        <label>E-MAIL</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='E-MAIL'
        
         
        />


  

        <button className="Signup-btn">SUBMIT</button>
      </form>
    </div>
  );
};

export default Signup;
