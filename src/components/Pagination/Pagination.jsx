import React from "react";
import "./Pagination.scss";

const Pagination = () => {
  return (
    <div className="pagination container">
      <div className="pagination__wrap">
        <p className="pagination__page pagination__page_active">1</p>
        <p className="pagination__page">2</p>
        <p className="pagination__page">3</p>
        <p className="pagination__page">4</p>
        <p className="pagination__page">...</p>
        <p className="pagination__page">10</p>
      </div>
    </div>
  );
};

export default Pagination;
