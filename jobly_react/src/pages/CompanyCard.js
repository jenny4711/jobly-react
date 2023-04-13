import React, { useState, useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";
import "../CSS/CompanyCard.css";

const CompanyCard = ({ handle, description, loading }) => {

const navigate=useNavigate()
const goToDetail=()=>{
  navigate(`/companies/${handle}`)
}
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (


 
    <div onClick={goToDetail} className="CompanyCard">
   
 
      <h4>{handle}</h4>
     
      <h6>{description}</h6>
    </div>
   
  );
};

export default CompanyCard;
