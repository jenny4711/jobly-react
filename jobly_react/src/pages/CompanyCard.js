import React from 'react'
import '../CSS/CompanyCard.css'

const CompanyCard = ({handle,description,loading}) => {
  if(loading){
    return <h2>Loading...</h2>
  }
  return (
    <div className='CompanyCard'>

   
 <h3>{handle}</h3>
 <h4>{description}</h4>

    </div>
  )
}

export default CompanyCard