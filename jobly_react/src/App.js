import React, { useState, useEffect } from "react";

import {Routes,Route,Navigate} from 'react-router-dom';
import Navb from './pages/Navb';
import Home from './pages/Home';
import Companies from './pages/Companies';
import CompanyDetail from './pages/CompanyDetail';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Jobs from './pages/Jobs';
import Profile from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/App.css';
import JoblyApi from './api';

function App() {
  return (
    <div className="App" style={{
      backgroundImage:"url(./img/bkg.avif)",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      width:"100vw",
      height:"100vh",

    }}>
      <Navb/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/companies/' element={<Companies/>}/>
        <Route path='/companies/:handle' element={<CompanyDetail/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>

        

      </Routes>
      
    </div>
  );
}

export default App;
