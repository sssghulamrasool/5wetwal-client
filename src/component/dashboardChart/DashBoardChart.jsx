import axios from "axios";
import React, { useEffect, useState } from "react";
import BarChart from "../barChart/BarChart";
import LineChartDemo from "../lineChart/LineChart";

const DashBoardChart = ( {totalPosts, totalUsers}) => {
  const [montlyPost, setMonthlyPost] = useState([]);
  const [montlyUser, setMonthlyUser] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Token"));
    axios
      .get(
        "https://5setwalbackend-production.up.railway.app/api/admin/dashboard-graph",
        {
          headers: {
            "x-auth-token": token,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setMonthlyPost(response.data.postByMonthData);
        setMonthlyUser(response.data.userByMonthData);
        setloading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {loading ? (
        <>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <LineChartDemo montlyPost={montlyPost}  totalPosts={totalPosts}/>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <BarChart montlyUser={montlyUser}  totalUsers={totalUsers}/>
          </div>
        </>
      ) : null}
    </>
  );
};

export default DashBoardChart;
