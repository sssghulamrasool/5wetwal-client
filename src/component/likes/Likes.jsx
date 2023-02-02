import React from "react";
import "./Likes.css";
import BreadCrum from "../breadcrum/BreadCrum";
import LikesTable from "../likesTable/LikesTable";

const Likes = () => {
  return (
    <>
      <section className="aw_likes">
        <div className="container-fluid">
          <div className="row aw_like_top">
            <BreadCrum pageName="Likes" currentPage="Likes" />
          </div>
          <div className="row">
            <LikesTable />
          </div>
        </div>
      </section>
    </>
  );
};

export default Likes;
