import React, { useState } from "react";
import "../CSS/App.css";
import { useNavigate } from "react-router-dom";

const Login = ({ setData, setLog, token, data,logIn,setToken }) => {
  const ITEM = {
    username: null,
    password: null,
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
    console.log(data);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    setFormData(ITEM);
    let res=await logIn(formData);
    if (res.success === true) {
      console.log(res)
      setLog(true);
    
      navigate("/");
    } else {
      setLog(false);
    }

    console.log(token);
  };

  return (
    <div
   
      className="Login-back"
      style={{
        backgroundImage: "url(./img/bkg.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="Login">
        <form className="Login-form" onSubmit={handleSubmit}>
          <label>USERNAME</label>
          <input
        
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <label>PASSWORD</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button className="Login-btn">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
