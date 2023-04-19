import React from 'react'
import Companies from './pages/Companies'
import CompanyDetail from './pages/CompanyDetail'
import Jobs from './pages/Jobs'
import { Navigate } from 'react-router-dom'
import Profile from "./pages/Profile";

const PrivateRoutes = ({log,setErrMsg}) => {

  setErrMsg("")
  return log === true? <Companies/>:<Navigate to="/"/>;

  
}

const PrivateRoutesCD=({log})=>{
  return log === true?<CompanyDetail/>:<Navigate to="/"/>
  }

  const PrivateRoutesJB=({log})=>{
    return log === true?<Jobs/>:<Navigate to="/"/>
  }
  const PrivateRoutesPF=({log,userInfo,dt,setDt,setErrMsg})=>{
    return log === true?<Profile userInfo={userInfo} dt={dt} setDt={setDt} setErrMsg={setErrMsg} />:<Navigate to="/"/>
  }



export  { PrivateRoutes,PrivateRoutesCD,PrivateRoutesJB,PrivateRoutesPF}