import React from 'react';
import AdminHeader from './../../AdminHeader';
import AdminMenu from './../../AdminMenu';
import AdminFooter from './../../AdminFooter';


const EditProfile = () => {
    return (
        <div class="wrapper ">
      <AdminHeader></AdminHeader>
      <AdminMenu></AdminMenu>
      <div className="content-wrapper ">
        <div className="content-header px-0">
          <div className="container fluid">
            <h2 className=" text-dark">Edit</h2>
            <div className="row bg-white">
              <div className="col-md-12">
                <div className="card card-info">
                  <div
                    className="card-body"
                    data-select2-id={15}
                    style={{ display: "block" }}
                  >
                    <div
                      className="col-md-offset-1 col-md-10 "
                      data-select2-id={14}
                    >
                      <div className="card card-primary" data-select2-id={13}>
                        <form role="form" action="">
                          <div className="card-body" data-select2-id={11}>
                            <div className="form-group">
                              <label htmlFor="name">Name</label>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder=""
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="address">Phone</label>
                              <input
                                type="text"
                                name="address"
                                id="address"
                                className="form-control"
                                placeholder=""
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="address">Email</label>
                              <input
                                type="text"
                                name="address"
                                id="address"
                                className="form-control"
                                placeholder=""
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="address">Address</label>
                              <input
                                type="text"
                                name="address"
                                id="address"
                                className="form-control"
                                placeholder=""
                                required
                              />
                            </div>
                            
                            
                          </div>
                          <div className="card-footer">
                            <button
                              type="submit"
                              className="btn btn-success m-1"
                            >
                              Submit
                            </button>
                            <button type="reset" className="btn btn-primary">
                              Reset
                            </button>
                          </div>
                        </form>
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

export default EditProfile;