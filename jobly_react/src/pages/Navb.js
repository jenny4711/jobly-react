import React from "react";
import { Link } from "react-router-dom";

import "../CSS/navbar.css";

const Navb = ({ log, setLog }) => {
  const logOutKey = (e) => {
    if (e.target.className === "logout") {
      setLog(false);
    }
    console.log(e.target.className, "target");
    console.log(e.key, "key");
  };
  return (
    <nav className="Nav">
      <div className="Navb-right">
        <Link to="/">
          <span>Home</span>
        </Link>
      </div>

      <div className="Navb-left">
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
