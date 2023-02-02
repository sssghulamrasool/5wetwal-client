import axios from "axios";
import React, { useEffect, useState } from "react";
import "./PasswordChange.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const PasswordChange = () => {
  const navigate = useNavigate();
  const [_token, setToken] = useState("");
  const [passwordList, setPasswordList] = useState({
    oldpassword: "",
    newpassword: "",
  });
  const hanldeChangePassword = (event) => {
    setPasswordList({
      ...passwordList,
      [event.target.name]: event.target.value,
    });
  };
  const passwordSubmit = (e) => {
    e.preventDefault();
    if (passwordList.newpassword.length >= 5) {
      const header = {
        "x-auth-token": _token,
        "Content-Type": "application/json",
      };
      const body = {
        old_password: passwordList.oldpassword,
        new_password: passwordList.newpassword,
      };

      axios
        .put(
          `${process.env.REACT_APP_MY_SECRET_KEY}/api/admin/chang-password`,
          body,
          {
            headers: header,
          }
        )
        .then((resp) => {
          console.log(resp.data.message);
          if (resp.data.success === 1) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${resp.data.message}`,
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/dashboard");
          }
        })
        .catch((err) => {
          if (err.response.data.success === 0) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${err.response.data.message}`,
            });
          }
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Minimum 5 Characters`,
      });
    }
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("Token"));

    setToken(token);
  }, []);
  return (
    <section className="PasswordChange">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12 m-auto col-12">
            <div className="card card-primary">
              <div className="card-header ">
                <h3 className="card-title">Password</h3>
              </div>
              <form
                className="change--passowrd--form"
                onSubmit={passwordSubmit}
              >
                <input type="hidden" name="_token" />

                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="">Old Password</label>
                    <input
                      type="password"
                      placeholder="Enter old password"
                      name="oldpassword"
                      className="form-control"
                      value={passwordList.oldpassword}
                      onChange={hanldeChangePassword}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">New Password</label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      name="newpassword"
                      className="form-control"
                      value={passwordList.newpassword}
                      onChange={hanldeChangePassword}
                    />
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary">submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PasswordChange;
