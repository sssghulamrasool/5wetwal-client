import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const LoginProtected = (props) => {
  // console.log("groups :")
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    var x = localStorage.getItem("Token");
    if (x) {
      navigate("/dashboard");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
};

export default LoginProtected;
