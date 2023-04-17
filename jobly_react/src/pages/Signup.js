import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({  setLog ,signUp}) => {
  const ITEM = {
    username: null,
    password: null,
    firstName: null,
    lastName: null,
    email: null,
  
  };

  const [formData, setFormData] = useState(ITEM);
  const [item, setItem] = useState(ITEM);
  const navigate = useNavigate();
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [e.target.name]: e.target.value });
    setFormData((formData) => ({
      ...formData,
      [name]: value,
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
        />
        <label>PASSWORD</label>
        <input
          name="password"
          type="text"
          value={formData.password}
          onChange={handleChange}
        />

        <label>FIRST NAME</label>
        <input
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label>LAST NAME</label>
        <input
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label>E-MAIL</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
  

        <button className="Signup-btn">SUBMIT</button>
      </form>
    </div>
  );
};

export default Signup;
