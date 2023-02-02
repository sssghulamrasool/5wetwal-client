import React from "react";
import BreadCrum from "../../component/breadcrum/BreadCrum";
import UserTable from "../../component/userTable/UserTable";
import "./User.css";
const User = () => {
  return (
    <>
      <section className="aw_user">
        <div className="container-fluid">
          <div className="row aw_user_top">
            <BreadCrum pageName="Users " currentPage="Users" />
          </div>
          <div className="row">
            <UserTable />
          </div>
        </div>
      </section>
    </>
  );
};

export default User;
