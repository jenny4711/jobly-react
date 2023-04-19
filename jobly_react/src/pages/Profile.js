import React from "react";
import "../CSS/Profile.css";
import { Navigate } from 'react-router-dom';
import JoblyApi from "../api";

const Profile = ({  userInfo, dt, setDt}) => {
  console.log(dt);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { username } = userInfo;
    let defaultDT = {
      firstName: dt.firstName,
      lastName: dt.lastName,
      email:dt.email,
      password: dt.password,
    };
    console.log(defaultDT, "dt");
    try {
      let res = await JoblyApi.profile(username, defaultDT);
      <Navigate to="/"/>
      console.log("IT has been saved!!!")
      return {success:true}
  
   
    } catch (e) {
      console.error(e);
    }
    setDt((d) => ({ ...d, password: "" }));
    console.log(dt);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDt((d) => ({
      ...d,
      [name]: value,
    }));
    console.log(e.target);
  };

  console.log(dt);

  return (
    <div className="Profile">
      <h3>PROFILE</h3>
      <form className="Profile-form" onSubmit={handleSubmit}>
        <label>USERNAME</label>
        <input
          name="username"
          type="text"
          value={dt.username}
          onChange={handleChange}
        />
        <label>PASSWORD</label>
        <input
          name="password"
          type="password"
          value={dt.password}
          onChange={handleChange}
        />

        <label>FIRST NAME</label>
        <input
          name="firstName"
          type="text"
          value={dt.firstName}
          onChange={handleChange}
        />
        <label>LAST NAME</label>
        <input
          name="lastName"
          type="text"
          value={dt.lastName}
          onChange={handleChange}
        />
        <label>E-MAIL</label>
        <input
          name="email"
          type="email"
          value={dt.email}
          onChange={handleChange}
        />

        <button className="Profile-btn">EDIT</button>
      </form>
    </div>
  );
};

export default Profile;
