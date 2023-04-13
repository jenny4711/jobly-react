import React from 'react'
import '../CSS/CompanyCard.css'

const CompanyCard = ({handle,description,loading}) => {
  if(loading){
    return <h2>Loading...</h2>
  }
  return (
    <div className='CompanyCard'>

   
 <h4>{handle}</h4>
 <h6>{description}</h6>

    </div>
  )
}

export default CompanyCard