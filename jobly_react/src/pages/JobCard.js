import React from 'react'
import '../CSS/JobCard.css'

const JobCard = ({id,title,salary,equity,companyHandle,companyName}) => {
  return (
    <div className='JobCard'>
   
      <div key={id} className='JobCard-ul'>
        <h4><bold><strong>TITLE:</strong>Title:</bold>{title}</h4>
        <span className='JobCard-li'><bold><strong>COMPANY:</strong></bold> {companyName}</span>
        <span><bold><strong>SALARY: </strong></bold>{!salary?"":`$ ${salary}`}</span>
        <soan><bold><strong>EQUITY</strong></bold>{equity}</soan>
       

      </div>
    </div>
  )
}

export default JobCard