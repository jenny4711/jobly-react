import React from 'react'
import '../CSS/JobDetail.css'

const JobDetail = ({id,title,salary,equity}) => {
 
  return (
    <div key={id} className='JobDetail'>
   <h5>{title}</h5>
<h5>{salary}</h5>
<h5>{equity}</h5>
      
    </div>
  )
}
export default JobDetail