import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col text-end">
            <span
              className="icon "
              onClick={() => dispatch({ type: "TOGGLESIDEBAR" })}
            >
              <i className="fa-solid fa-bars"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
