import React, { useEffect, useState } from "react";
import "./Posts.css";
import BreadCrum from "../../component/breadcrum/BreadCrum";
import PostTable from "../../component/postTable/PostTable";
import axios from "axios";

const Posts = () => {
  const [postAllData, setPostAllData] = useState([]);
  const [postLoading,setPostLoading]=useState(false);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Token"));

    axios
      .get("https://5setwalbackend-production.up.railway.app/api/admin/post", {
        headers: { "x-auth-token": token, "Content-Type": "application/json" },
      })
      .then((resp) => {
        if (resp.data.success === 1) {
          setPostAllData(resp.data.data);
          setPostLoading(true);
        }
      }).catch((err)=>{
        console.log(err);
      })
  }, []);

  return (
    <>
      <section className="aw_posts">
        <div className="container-fluid">
          <div className="row aw_posts_top">
            <BreadCrum pageName="Posts" currentPage="Posts" />
          </div>
          <div className="row">
            {postLoading &&  <PostTable postAllData={postAllData}/>}
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
