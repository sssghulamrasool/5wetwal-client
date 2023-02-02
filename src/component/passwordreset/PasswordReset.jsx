import React from "react";
import "./PasswordReset.css";
const PasswordReset = () => {
  return (
    <section className="passsowrd--reset">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-12 m-auto">
            {" "}
            <div className="password--reset">
              <div className="card">
                <div className="card-header text-center">
                  <label htmlFor="" className="form-label ">
                    Reset Password
                  </label>
                </div>
                <div className="card-body">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div class="form-group reset--password--form">
                      <input
                        type="hidden"
                        name="_token"
                        class="form-control"
                        value="5f47f7ff7df"
                      />
                      <div class="form-group row ">
                        <label
                          for="email"
                          class="col-md-4 col-12 col-form-label text-md-end text-left"
                        >
                          <strong> E-Mail Address</strong>
                        </label>

                        <div className="form-group col-md-6 col-12">
                          <input
                            type="email"
                            class="form-control "
                            name="email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 offset-md-4 p-0">
                        <button className="btn--reset--link">
                          Send Password Reset Link
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PasswordReset;
