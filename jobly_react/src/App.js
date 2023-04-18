import React, { useState, useEffect } from "react";
import uuid from 'react-uuid';
import useLocalStorage from "./useLocalStorage";
import { Routes, Route } from "react-router-dom";
import Navb from "./pages/Navb";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import {
  PrivateRoutes,
  PrivateRoutesCD,
  PrivateRoutesJB,
  PrivateRoutesPF,
} from "./PrivateRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/App.css";
import JoblyApi from "./api";
import Alert from "react-bootstrap/Alert";

function App() {
  const [log, setLog] = useState(false);
  const [token, setToken] = useLocalStorage('token',"");
  const [data, setData] = useState(null);
  const [errMsg, setErrMsg] = useState("");
  const [userInfo, setUserInfo] = useState(null);

console.log(token)
  const logOut = () => {
    setToken("");
    setLog(false);
    localStorage.removeItem("token", token);
  };

  const signUp = async (newData) => {
    try {
      const result = await JoblyApi.signUp(newData);

      setToken(result);
      return { success: true };
    } catch (e) {
      console.error(e);
      setErrMsg(e);
      return { success: false };
    }
  };

  const logIn = async (userData) => {
    try {
      const result = await JoblyApi.login(userData);
    console.log(result)
      setToken(result);
      setErrMsg("");
      setUserInfo(userData);
    
      return { success: true };
    } catch (e) {
      console.error(e);
      setErrMsg(e);
      return { success: false };
    }
  };



  return (
    <div
    key={uuid()}
      className="App"
      style={{
        backgroundImage: "url(./img/bkg.avif)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navb
        log={log}
        logOut={logOut}
        data={userInfo ? userInfo.username : ""}
      />

      {errMsg && errMsg.length > 0
        ? errMsg.map((e) => (
            <Alert
              className={errMsg ? "" : "hide"}
              key="danger"
              variant="danger"
            >
              {e}
            </Alert>
          ))
        : ""}

      <Routes>
        <Route
          path="/"
          element={
            <Home
              log={log}
              setErrMsg={setErrMsg}
              data={userInfo ? userInfo.username : ""}
            />
          }
        />
        <Route
          path="/companies/"
          element={<PrivateRoutes log={log} setErrMsg={setErrMsg} />}
        />
        <Route
          path="/companies/:handle"
          element={<PrivateRoutesCD log={log} />}
        />
        <Route path="/jobs" element={<PrivateRoutesJB log={log} />} />
        <Route
          path="/login"
          element={
            <Login
              setData={setData}
              logIn={logIn}
              setLog={setLog}
              token={token}
              data={data}
              setToken={setToken}
            />
          }
        />
        <Route
          path="/signup"
          element={<Signup setLog={setLog} signUp={signUp} />}
        />
        <Route
          path="/profile"
          element={
            <PrivateRoutesPF
              log={log}
              data={data}
              userInfo={userInfo ? userInfo : ""}
              token={token}
           
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
