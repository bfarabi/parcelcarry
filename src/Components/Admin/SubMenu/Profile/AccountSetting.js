import React from "react";
import AdminHeader from "../../AdminHeader";
import AdminMenu from "../../AdminMenu";
import AdminFooter from "./../../AdminFooter";
import './Setting.css';

const AccountSetting = () => {
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
                  <div className="card-header">
                    <h3>Account Setting Title</h3>
                  </div>
                  <div className="card-body">
                    <form
                      className="form-material form-horizontal"
                      action=""
                      
                    >
                      <input type="hidden" name="_token" />

                      <div className="form-group row">
                        <label className="col-md-3 ambitious-center">
                          <h5>
                            Name <b className="ambitious-crimson">*</b>
                          </h5>
                        </label>
                        <div className="col-md-8">
                          <input
                            className="form-control ambitious-form-loading"
                            name="name"
                            id="name"
                            Value=" Admin"
                            type="text"
                            placeholder="Type Your Name Here"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="form-group row">
                        <label className="col-md-3 ambitious-center">
                          <h5>
                            Email <b className="ambitious-crimson">*</b>
                          </h5>
                        </label>
                        <div className="col-md-8">
                          <input
                            className="form-control ambitious-form-loading"
                            name="email"
                            id="email"
                            Value="admin@gmail.com"
                            type="email"
                            placeholder="Type Your Email Here"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-md-3 ambitious-center">
                          <h4>Photo </h4>
                        </label>
                        <div className="col-md-9">
                          Max Dimension: 200 x 200, Max Size: 100kb, Allowed
                          format: png
                          <div className="dropify-wrapper">
                            <div className="dropify-message">
                              <span className="file-icon">
                                {" "}
                                <p>Drag and drop a file here or click</p>
                              </span>
                              <i className="fas fa-upload p-2"></i>

                              <p className="dropify-error">
                                Ooops, something wrong appended.
                              </p>
                            </div>
                            <div className="dropify-loader" />
                            <div className="dropify-errors-container">
                              <ul />
                            </div>
                            <input
                              id="photo"
                              className="dropify"
                              name="photo"
                              
                              type="file"
                              data-allowed-file-extensions="png jpg jpeg"
                              data-max-file-size="100K"
                            />
                            <button type="button" className="dropify-clear">
                              Remove
                            </button>
                            <div className="dropify-preview">
                              <span className="dropify-render" />
                              <div className="dropify-infos">
                                <div className="dropify-infos-inner">
                                  <p className="dropify-filename">
                                    <span className="file-icon" />{" "}
                                    <span className="dropify-filename-inner" />
                                  </p>
                                  <p className="dropify-infos-message">
                                    Drag and drop or click to replace
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <small id="name" className="form-text text-muted">
                            Leave Blank For Remain Unchanged
                          </small>
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-md-3 ambitious-center">
                          <h5>Phone</h5>
                        </label>
                        <div className="col-md-8">
                          <input
                            className="form-control ambitious-form-loading"
                            name="phone"
                            Value="01712000000"
                            id="phone"
                            type="text"
                            placeholder="Type Your Phone Here"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3 ambitious-center">
                          <h5>Address</h5>
                        </label>

                        <div className="col-md-8">
                          <div
                            id="edit_input_address"
                            className="ql-container ql-snow"
                          >
                            

                            <input
                            className="form-control ambitious-form-loading"
                            name="address"
                            Value="Dhaka, BD"
                            id="phone"
                            type="text"
                            placeholder="Type Your address Here"
                          />
                              
                           
                              
                            
                            
                            
                          </div>
                          
                        </div>
                      </div>
                    </form>
                  </div>
                  <br />
                  <div className="card-footer">
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

export default AccountSetting;
