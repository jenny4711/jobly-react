import React, { useState, useEffect } from "react";
import "../CSS/Companies.css";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import Pagination from "./Pagination";
import uuid from 'react-uuid';

const Companies= () => {
  const [companies, setCompanies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerpage] = useState(5);
  const [searchOn, setSearchOn] = useState(false);

  const searchByName = async (e) => {
    if (e.key === "Enter") {
      const keyword = e.target.value;
      await getList(keyword);
      setSearchOn(true);
    }
  };

  async function getList(search) {
    try {
      setLoading(true);
      let result = await JoblyApi.getCompanies(search);
      setCompanies(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
   
    getList();
  }, []);

  // get current posts
  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentPosts = companies?.slice(indexOfFirstPost, indexOfLastPost);

  // get pageNumber
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="Companies" key={uuid()}>
      <div className="Companies-top" key={uuid()}>
        <h1>Companies</h1>
        <input
          onKeyDown={(e) => searchByName(e)}
          className="Companies-input"
          type="text"
          placeholder="Search"
        />
      </div>

      {currentPosts?.map((item) => (
        <div key={uuid()}>
          <CompanyCard
            handle={item.handle}
            description={item.description}
            loading={loading}
          />
        </div>
      ))}

      <Pagination
        perPage={perPage}
        totalPosts={50}
        paginate={paginate}
        searchOn={searchOn}
      />
    </div>
  );
};

export default Companies;
