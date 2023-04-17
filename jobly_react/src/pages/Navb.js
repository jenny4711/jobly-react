import React from "react";
import { Link,useNavigate } from "react-router-dom";
import uuid from 'react-uuid';

import "../CSS/navbar.css";

const Navb = ({ log, logOut,data }) => {
  const navigate=useNavigate()
  const logOutKey = (e) => {
    if (e.target.className === "logout") {
      logOut();
      navigate('/login')
 
    }
   
  };
  return (
    <nav className="Nav" key={uuid()}>
      <div className="Navb-right" key={uuid()}>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/profile">
        <span>{log?data:""}</span>
        </Link>
     
      </div>

      <div className="Navb-left" key={uuid()}>
      
        <Link to="/login">
          <span className={log ? "logout" : "login"} onClick={logOutKey}>
            {log ? "LOG-OUT" : "LOG-IN"}
          </span>
        </Link>
        <Link to="/signup">
          <span className={log ? "hide" : ""}> Sign Up</span>
        </Link>
        <Link to="/companies">
          <span className={!log ? "hide" : ""}> Companies</span>
        </Link>

        <Link to="/jobs">
          <span className={!log ? "hide" : ""}> Jobs</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navb;
