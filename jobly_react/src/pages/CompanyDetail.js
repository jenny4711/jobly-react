import React, { useEffect, useState } from "react";
import JoblyApi from "../api";
import JobDetail from "./JobDetail";
import { useParams } from "react-router-dom";
import "../CSS/CompanyDetail.css";

const CompanyDetail = ({dt,setErrMsg}) => {
  const { handle } = useParams();
  const [handleSearch, sethandleSearch] = useState(null);
  const [jobs, setJobs] = useState(null);
console.log(dt)
  async function searchByHandle(handle) {
    try {
      let result = await JoblyApi.getCompany(handle);
      sethandleSearch(result);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    searchByHandle(handle);
  }, [handle]);

  useEffect(() => {
    if (handleSearch) {
      setJobs(handleSearch.jobs);
    }
  }, [handleSearch]);
  console.log(handleSearch);
  console.log(jobs);
  return (
    <div className="CompanyDetail">
      <div className="CompanyDetail-list">
        <div className="CompanyDetail-box">
          <h3>
            <bold>
              <strong>HANDLE: </strong>
            </bold>
            {handleSearch?.handle}
          </h3>
          <h4>
            <bold>
              <strong>NAME: </strong>
            </bold>
            {handleSearch?.name}
          </h4>
          <h4>
            <bold>
              <strong>DESCRIPTION: </strong>
            </bold>{" "}
            {handleSearch?.description}
          </h4>
          <div className='companyDetail-job'>
            <h3 className='companyDetail-h3'>JOBS</h3>
            {jobs && jobs.length > 0 ? (
              jobs.map((item) => (
                <JobDetail
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  salary={item.salary}
                  equity={item.equity}
                  dt={dt}
                  setErrMsg={setErrMsg}
                />
              ))
            ) : (
              <p>No Jobs Available</p>
            )}
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default CompanyDetail;
