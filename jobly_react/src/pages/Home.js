import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Home.css";

const Home = ({ log, setErrMsg,userInfo }) => {
  setErrMsg("");
  return (
    <div className="Home" >
      <div className="Home-back" >
        <div className="Home-border" >
          <h2>JOBLY</h2>
          <h2>All the jobs in one, convenient place.</h2>

          <div className={!log ? "Home-btn" : "hide"}>
            <Link to="/login">
              <span className="Home-login">LOGIN</span>
            </Link>
            <Link to="/signup">
              <span className="Home-signup">SIGNUP</span>
            </Link>
          </div>

          <div  className={log ? "Home-after" : "hide"}>
            <h3>Welcome Back!{userInfo}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
