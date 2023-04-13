import React, { useEffect,useState } from 'react'
import JoblyApi from "../api";
import JobDetail from './JobDetail';
import { useParams } from 'react-router-dom';
import '../CSS/CompanyDetail.css'

const CompanyDetail = () => {
  const {handle}=useParams()
  const [handleSearch,sethandleSearch]=useState(null)
  const [jobs,setJobs]=useState(null)

  async function searchByHandle(handle){
    try{
      let result = await JoblyApi.getCompany(handle)
      sethandleSearch(result)
      if(handleSearch){
        setJobs(handleSearch.jobs)
      }
     

    }catch(e){
      console.error(e)
    }
  }

  useEffect(()=>{
    searchByHandle(handle)
  },[handle])
console.log(handleSearch)
  console.log(jobs)
  return (
    <div className='CompanyDetail' style={{
      backgroundImage: "url(./img/bkg.avif)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width:'100vw',
      height:'100vh',
      
    }}>
      <div  className='CompanyDetail-list'>
        <div className='CompanyDetail-box'>
        <h3><bold><strong>HANDLE: </strong></bold>{handleSearch?.handle}</h3>
        <h4><bold><strong>NAME: </strong></bold>{handleSearch?.name}</h4>
        <h4><bold><strong>DESCRIPTION: </strong></bold> {handleSearch?.description}</h4>
        <div>
          <h3>JOBS</h3>
        {jobs?.map((item)=>(<JobDetail id={item.id} title={item.title} salary={item.salary} equity={item.equity}/>))}
        </div>
        </div>
        <div>
         
      
        </div>

      </div>
      
    </div>
  )
}

export default CompanyDetail