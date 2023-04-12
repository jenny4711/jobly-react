import React, { useState, useEffect } from "react";

import JoblyApi from "../api";


/** Show page with list of companies.
 *
 * On mount, loads companies from API.
 * Re-loads filtered companies on submit from search form.
 *
 * This is routed to at /companies
 *
 * Routes -> { CompanyCard, SearchForm }
 */

function CompanyList() {


  const [companies, setCompanies] = useState(null);
  useEffect(()=>{
    async function getList(name){
   let result=await JoblyApi.getCompanies(name) 
 setCompanies(result)
    }
    getList()
  },[])
console.log(companies)
 
  return (
      <div >
       
      </div>
  );
}

export default CompanyList;
