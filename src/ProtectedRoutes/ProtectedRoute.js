import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const ProtectedRoute = (props) => {
  // console.log("groups :")
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    var x = localStorage.getItem("Token");
    if (x === undefined || x == null) {
      navigate("/");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
