import React from "react";
import AdminHeader from "../../AdminHeader";
import AdminMenu from "../../AdminMenu";
import AdminFooter from "./../../AdminFooter";

const ChangePass = () => {
  return (
    <div class="wrapper">
      <AdminHeader></AdminHeader>
      <AdminMenu></AdminMenu>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row  mb-2 py-4">
             
                <div className="col-12">
                  <div className="card">
                    <div className="card-header bg-white">
                      <h3>Change Password</h3>
                    </div>
                    <div className="card-body">
                      <form
                        className="form-material form-horizontal"
                        action=""
                        method="POST"
                        encType="multipart/form-data"
                      >
                        <input
                          type="hidden"
                          name="_token"
                          
                        />{" "}
                        <div className="form-group row">
                          <label className="col-md-3 ambitious-center">
                            <h5>
                              Current Password{" "}
                              <b className="ambitious-crimson" />
                            </h5>
                          </label>
                          <div className="col-md-8">
                            <input
                              className="form-control ambitious-form-loading"
                              name="current-password"
                              id="current-password"
                              type="password"
                              placeholder="Type Your Current Password Here"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 ambitious-center">
                            <h5>
                              New Password <b className="ambitious-crimson" />
                            </h5>
                          </label>
                          <div className="col-md-8">
                            <input
                              className="form-control ambitious-form-loading"
                              name="new-password"
                              id="new-password"
                              type="password"
                              placeholder="Type Your New Password Here"
                            />
                            <small id="name" className="form-text text-muted">
                              6 Characters Long
                            </small>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-md-3 ambitious-center">
                            <h5>
                              Confirm Password{" "}
                              <b className="ambitious-crimson" />
                            </h5>
                          </label>
                          <div className="col-md-8">
                            <input
                              className="form-control ambitious-form-loading"
                              name="new-password_confirmation"
                              id="new-password-confirm"
                              type="password"
                              placeholder="Type Your Confirm Password Here"
                            />
                            <small id="name" className="form-text text-muted">
                              6 Characters Long
                            </small>
                          </div>
                        </div>
                        <br />
                        <div className="form-group row">
                          <label className="col-md-3 col-form-label" />
                          <div className="col-md-8">
                            <input
                              type="submit"
                              defaultValue="Submit"
                              className="btn btn-outline btn-info btn-lg"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
             

            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
      </div>
      <AdminFooter></AdminFooter>
    </div>
  );
};

export default ChangePass;
