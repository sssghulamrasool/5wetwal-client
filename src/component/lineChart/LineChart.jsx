import React, { useEffect, useState } from "react";
import { Chart } from "primereact/chart";
import "./LineChart.css";
import axios from "axios";
const LineChartDemo = ( {montlyPost, totalPosts}) => {

  console.log('montlyPost', totalPosts)
  const [basicData] = useState({
    labels: ["JAN", "FEB", "MAR", "APR", "MAY","JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [
      {
        label: "Posts",
        data: montlyPost,
        fill: false,
        borderColor: "#42A5F5",
        // tension: 0.4,
      },
      // {
      //   label: "Second Dataset",
      //   data: [28, 48, 40, 19, 86, 27, 90],
      //   fill: false,
      //   borderColor: "#FFA726",
      //   tension: 0.4,
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

    let multiAxisOptions = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            display: false,
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          //   grid: {
          //     color: "black",
          //   },
        },
        y: {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            color: "#495057",
          },
          grid: {
            display: false,
          },
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          ticks: {
            color: "#495057",
          },
          grid: {
            drawOnChartArea: false,
            display: false,
          },
        },
      },
    };

    return {
      basicOptions,
      multiAxisOptions,
    };
  };

  const { basicOptions, multiAxisOptions } = getLightTheme();


  return (
    <div className="aw_line_chart_wrap">
      <div className="card">
        <div className="monthy_line_chart">
          <h5>Monthly Posts</h5>
          <a href="#"> View Report</a>
        </div>
        <div className="total_posts">
          <div className="total_ d-flex justify-content-between">
            <h6>{totalPosts}</h6>
            <p>
              <span>
                <i className="fa-solid fa-arrow-up"></i>
              </span>
              12.5%
            </p>
          </div>
          <div className="post_lastmonth">
            <p>Posts</p>
            <p>Since Last Month</p>
          </div>
        </div>
        <Chart type="line" data={basicData} options={basicOptions} />
        <div className="monthss">
          <div className="this_month">
            <span></span>
            <p>This Month</p>
          </div>
          {/* <div className="last_month">
            <span></span>
            <p>Last Month</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LineChartDemo;
