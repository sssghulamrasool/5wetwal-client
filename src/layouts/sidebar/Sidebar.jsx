import React, { useState } from "react";
import adminlogo from "../../assets/images/logo-admin-5etwal.png";
import { Link, NavLink, useNavigate  } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./Sidebar.css";
const Sidebar = () => {
  const navigate = useNavigate()
  const [recycleList, SetRecyleList] = useState(false);
  const { ToggleSidebar } = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();

  const hanldeRecyclePop = () => {
    SetRecyleList(!recycleList);
  };
  const handelLogout=(event)=>{
    event.preventDefault();
    localStorage.removeItem("Token")
    navigate('/')
    navigate(0)
  }

  return (
    <>
      <aside
        className={
          ToggleSidebar ? "gr--main--sidebar " : "gr--main--sidebar responsive"
        }
      >
        <Link to="/" className="branl--link">
          <img src={adminlogo} alt="admin" className="img-fluid" />
          <h3 className="admin--logo--title">5Etwal</h3>
        </Link>
        <div className="sidebar mt-3">
          <nav>
            <ul className="gr--nav-sidebar">
              <li className="nav--sidebar--item">
                <NavLink className="link" to="/dashboard">
                  <i className="fa-solid fa-gauge-high"></i>
                  <p>dashboard</p>
                </NavLink>
              </li>
              <li className="nav--sidebar--item">
                <NavLink className="link" to="/users">
                  <i className="fa-solid fa-users"></i>
                  <p>users</p>
                </NavLink>
              </li>
              <li className="nav--sidebar--item">
                <NavLink className="link" to="/posts">
                  <i className="fa-solid fa-list"></i>
                  <p>posts</p>
                </NavLink>
              </li>
              <li className="nav--sidebar--item">
                <NavLink className="link" to="/reports">
                  <i className="fa-solid fa-list"></i>
                  <p>reports</p>
                </NavLink>
              </li>
              <li className="nav--sidebar--item recycle--btn">
                <div
                  className={recycleList ? "link active" : "link"}
                  onClick={hanldeRecyclePop}
                >
                  <i className="fa-solid fa-recycle"></i>
                  <p className="btn--op">
                    recycle bin <i className="fa-solid fa-angle-left "></i>
                  </p>
                </div>

                <ul
                  className={
                    recycleList
                      ? "recycle--bin--list open"
                      : "recycle--bin--list"
                  }
                >
                  <li className="nav--sidebar--item">
                    <NavLink to="/recyclebin/users" className="link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Users</p>
                    </NavLink>
                  </li>
                  <li className="nav--sidebar--item">
                    <NavLink to="/recyclebin/posts" className="link ">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Posts</p>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav--sidebar--item">
                <NavLink className="link" to="/change-password">
                  <i className="fa-solid fa-lock"></i>
                  <p>change password</p>
                </NavLink>
              </li>

              <li className="nav--sidebar--item">
                <Link className="link" onClick={handelLogout}>
                  <i className="fa-solid fa-table"></i>
                  <p>logout</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      {ToggleSidebar && (
        <div
          className="asidebar--overlay"
          onClick={() => dispatch({ type: "TOGGLESIDEBAR" })}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
