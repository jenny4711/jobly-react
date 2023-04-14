import React, { useState, useEffect } from "react";
import useLocalStorage from './useLocalStorage'
import { Routes, Route } from "react-router-dom";
import Navb from "./pages/Navb";
import Home from "./pages/Home";
import Companies from "./pages/Companies";
import CompanyDetail from "./pages/CompanyDetail";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/App.css";
import JoblyApi from "./api";
import Alert from "react-bootstrap/Alert";

function App() {
  const [log, setLog] = useState(false);
  const [token, setToken] = useLocalStorage("token","");
  const [data, setData] = useState(null);
  const [errMsg, setErrMsg] = useState("");
  console.log(data);
console.log(data)
  const signUp = async () => {
    try {
      const result = await JoblyApi.signUp(data);
      setToken(result);
      setErrMsg("");
    } catch (e) {
      console.error(e);
      setErrMsg(e);
    }
  };

  const logIn = async () => {
    try {
      const result = await JoblyApi.login(data);
      setToken(result);
      setErrMsg("");
    } catch (e) {
      console.error(e);
      setErrMsg(e);
    }
  };

  console.log(token);
  useEffect(() => {
    signUp(data);
  }, [data]);

  useEffect(() => {
    logIn(data);
  }, [data]);
  console.log(token)
  return (
    <div
      className="App"
      style={{
        backgroundImage: "url(./img/bkg.avif)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
      }}
    >
      <Navb log={log} setLog={setLog} />

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
        <Route path="/" element={<Home log={log} setErrMsg={setErrMsg} />} />
        <Route path="/companies/" element={<Companies setErrMsg={setErrMsg} />} />
        <Route path="/companies/:handle" element={<CompanyDetail />} />
        <Route path="/jobs" element={<Jobs setErrMsg={setErrMsg}/>} />
        <Route
          path="/login"
          element={
            <Login
              setData={setData}
              setLog={setLog}
              token={token}
              data={data}
            />
          }
        />
        <Route
          path="/signup"
          element={<Signup setData={setData} setLog={setLog} token={token} />}
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
