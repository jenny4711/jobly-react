import React from "react";

import "../CSS/Pagination.css";
const Pagination = ({ perPage, totalPosts, paginate,searchOn }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={searchOn?'hide':''}>
      <ul className="Pagination-ul">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
