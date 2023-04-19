import React, { useState, useEffect } from "react";
import "../CSS/Jobs.css";
import JoblyApi from "../api";
import Pagination from "./Pagination";
import JobCard from "./JobCard";
import uuid from "react-uuid";

const Jobs = ({ dt, setErrMsg }) => {
  const [jobs, setJobs] = useState();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerpage] = useState(6);
  const [searchOn, setSearchOn] = useState(false);

  const searchByTitle = async (e) => {
    if (e.key === "Enter") {
      const keyword = e.target.value;
      await getJobList(keyword);
      setSearchOn(true);
    }
  };
  const getJobList = async (title) => {
    try {
      setLoading(true);
      let result = await JoblyApi.getJobs(title);
      setJobs(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobList();
  }, []);
  // get current posts
  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentPosts = jobs?.slice(indexOfFirstPost, indexOfLastPost);

  // get pageNumber
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div key={uuid()} className="Jobs-back">
      <div className="Jobs" key={uuid()}>
        <div className="Jobs-top" key={uuid()}>
          <h2>Jobs</h2>
          <input
            className="Jobs-input"
            type="text"
            placeholder="Search"
            onKeyDown={(e) => searchByTitle(e)}
          />
        </div>

        <div key={uuid()}>
          {currentPosts?.map((item) => (
            <JobCard
              id={item.id}
              title={item.title}
              salary={item.salary}
              equity={item.equity ? item.equity : ""}
              companyHandle={item.companyHandle}
              companyName={item.companyName}
              dt={dt}
              setErrMsg={setErrMsg}
            />
          ))}
        </div>

        <Pagination
          perPage={perPage}
          totalPosts={200}
          paginate={paginate}
          searchOn={searchOn}
        />
      </div>
    </div>
  );
};

export default Jobs;
