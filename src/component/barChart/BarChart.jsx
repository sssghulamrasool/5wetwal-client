import React, { useState } from "react";
import { Chart } from "primereact/chart";
import "./BarChart.css";
const BarChart = ( {montlyUser, totalUsers}) => {

  console.log(montlyUser, 'bar chat montly')
  const [basicData] = useState({
    labels: ["JAN", "FEB", "MAR", "APR", "MAY","JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],

    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "#42A5F5",
        data:montlyUser,
        fill: true,

      },
      // {
      //   label: "My Second dataset",
      //   backgroundColor: "#FFA726",
      //   data: [28, 48, 40, 19, 86, 27, 90],
      // },
    ],
  });

  const getLightTheme = () => {
    let basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            display: false,
          },
        },
        y: {
          ticks: {
            color: "#495057",
          },
          grid: {
            display: false,
          },
        },
      },
    };

    return {
      basicOptions,
    };
  };

  const { basicOptions, multiAxisOptions } = getLightTheme();
  return (
    <>
      <div className="aw_line_chart_wrap">
        <div className="card">
          <div className="card_Bar">
            <h5>Monthly Users</h5>
          </div>
          <div className="total_posts">
            <div className="total_ d-flex justify-content-between">
              <h6>{totalUsers}</h6>
              <p>
                <span>
                  <i className="fa-solid fa-arrow-up"></i>
                </span>
                33.1%
              </p>
            </div>
            <div className="post_lastmonth">
              <p>Users</p>
              <p>Since Last Month</p>
            </div>
          </div>
          <Chart type="bar" data={basicData} options={basicOptions} />

          <div className="monthss">
            <div className="this_month">
              <span></span>
              <p>This Month</p>
            </div>
            <div className="last_month">
              <span></span>
              <p>Last Month</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarChart;
