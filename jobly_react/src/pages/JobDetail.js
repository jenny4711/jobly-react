import React from 'react'
import '../CSS/JobDetail.css'

const JobDetail = ({id,title,salary,equity}) => {
 
  return (
    <div key={id} className='JobDetail'>
   <h5>TITLE: {title}</h5>
<h5>SALARY: ${salary}</h5>
<h5>EQUITY{equity}</h5>
      
    </div>
  )
}
export default JobDetail