import "./DashboardInfo.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardInfo = ( {dashboardReport}) => {
  // const [dashboardReport, setDashboarReport] = useState({});
  // const [dashToken, setDashToken] = useState("");
  // const [found, setFound] = useState(false);
  // const header = {
  //   "x-auth-token": dashToken,
  //   "Content-Type": "application/json",
  // };
  // const dashBoardApi = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_MY_SECRET_KEY}/api/admin/dashboard`, {
  //       headers: header,
  //     })
  //     .then((resp) => {
  //       if (resp.data.success === 1) {
  //         setDashboarReport(resp.data.data);
  //         setFound(true);
  //         // console.log("asdfgsdfg", resp)
  //       }
  //     })
  //     .catch((err) => {
  //       // console.log(err, "An Error Occured");
  //     });
  // };
  // useEffect(() => {
  //   const token = JSON.parse(localStorage.getItem("Token"));
  //   setDashToken(token);
  //   dashBoardApi();
  // }, [dashToken, found]);
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="aw_small_box bg-warning">
          <div className="inner">
            <h3>{dashboardReport?.totalUsers}</h3>
            <p>Total Users</p>
          </div>
          <div className="icon">
            <i className="fa-solid fa-user-plus"></i>
          </div>
          <a href="#" className="aw_small_footer_box">
            More Info <i className="fa-sharp fa-solid fa-circle-right"></i>
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="aw_small_box bg-info">
          <div className="inner">
            <h3 className="aw_heading">{dashboardReport?.totalPosts}</h3>
            <p className="aw_users">Total Posts</p>
          </div>
          <div className="icon">
            <i className="fa-regular fa-image"></i>
          </div>
          <a href="#" className="aw_small_footer_box aw_white_te">
            More Info <i className="fa-sharp fa-solid fa-circle-right"></i>
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="aw_small_box bg-danger">
          <div className="inner">
            <h3 className="aw_heading">{dashboardReport?.totalActive}</h3>
            <p className="aw_users">Inactive Users</p>
          </div>
          <div className="icon">
            <i className="fa-solid fa-user"></i>
          </div>
          <a href="#" className="aw_small_footer_box aw_white_te">
            More Info <i className="fa-sharp fa-solid fa-circle-right"></i>
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="aw_small_box bg-success">
          <div className="inner">
            <h3 className="aw_heading">{dashboardReport?.totalInActive}</h3>
            <p className="aw_users">Active Users</p>
          </div>
          <div className="icon">
            <i className="fa-solid fa-user"></i>
          </div>
          <a href="#" className="aw_small_footer_box aw_white_te">
            More Info <i className="fa-sharp fa-solid fa-circle-right"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default DashboardInfo;
