import React from "react";
import BreadCrum from "../../component/breadcrum/BreadCrum";
import ReportsTable from "../../component/reportsTable/ReportsTable";
import "./Reports.css";

const Reports = () => {
  return (
    <>
      <section className="aw_reports">
        <div className="container-fluid">
          <div className="row aw_reports_top">
            <BreadCrum pageName="Reports" currentPage="Reports" />
          </div>
          <div className="row">
               <ReportsTable/> 
          </div>
        </div>
      </section>
    </>
  );
};

export default Reports;
