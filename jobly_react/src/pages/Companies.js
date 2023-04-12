import React, { useState, useEffect } from "react";
import "../CSS/Companies.css";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import Pagination from "./Pagination";
// import ErrorBoundary from '../ErrorBoundary';

const CompanyList = () => {
  const [companies, setCompanies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerpage] = useState(5);
  const [search, setSearch] = useState("");

  const searchByName = (e) => {
    if (e.key === "Enter") {
      const keyword = e.target.value;
      setSearch(keyword);
    }
  };
 

  useEffect(() => {
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
    getList();
  }, [search]);


  // get current posts
  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentPosts = companies?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="Companies">
      <h1>Companies</h1>
      <div>
        <input
          onKeyDown={(e) => searchByName(e)}
          className="Companies-input"
          type="text"
        />
      </div>

      {currentPosts?.map((item) => (
        <span>
          <CompanyCard
            handle={item.handle}
            description={item.description}
            loading={loading}
          />
        </span>
      ))}

      <Pagination perPage={perPage} totalPosts={50} paginate={paginate} />
    </div>
  );
};

export default CompanyList;
