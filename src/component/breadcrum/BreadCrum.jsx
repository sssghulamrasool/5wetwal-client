import React from "react";
import { Link } from "react-router-dom";
import './BreadCrum.css';
const BreadCrum = (props) => {
    const {pageName,currentPage}=props;
  return (
    <>
      <div className="col-lg-6 col-md-6 col-sm-6">
        <div className="aw_dashboard_heading">
          <h2>{pageName}</h2>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 ">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb m-0">
            <li className="breadcrumb-item">
              <Link href="#">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {currentPage}
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default BreadCrum;
