import React from 'react'
import '../CSS/JobCard.css'

const JobCard = ({id,title,salary,equity,companyName}) => {
  return (
    <div className='JobCard'>
   
      <div key={id} className='JobCard-ul'>
        <h4><bold><strong>TITLE:</strong>Title:</bold>{title}</h4>
        <h6 className='JobCard-li'><bold><strong>COMPANY:</strong></bold> {companyName}</h6>
        <h6><bold><strong>SALARY: </strong></bold>{!salary?"":`$ ${salary}`}</h6>
        <h6><bold><strong>EQUITY</strong></bold>{equity}</h6>
       

      </div>
    </div>
  )
}

export default JobCard