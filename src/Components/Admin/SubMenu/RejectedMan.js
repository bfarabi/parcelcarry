import React from 'react';
import AdminHeader from '../AdminHeader';
import AdminMenu from '../AdminMenu';

const RejectedMan = () => {
    return (
        <div class="wrapper">
      <AdminHeader></AdminHeader>
      <AdminMenu></AdminMenu>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <h2 className=" text-dark">merchants</h2>
            <div className="row  mb-2 bg-white">
              <div className="d-flex justify-content-between p-3">
                <h5>Merchant List</h5>
                <button className="btn btn-success  " type="submit">
                  Add Merchant
                </button>
              </div>
              <div className="col-md-6"></div>

              <div className="col-md-6 d-flex justify-content-end">
                <form class="row g-1 p-2  ">
                  <div class="col-auto">
                    <input type="text" class="form-control" />
                  </div>
                  <div class="col-auto">
                    <button type="submit" class="btn btn-primary">
                      Search
                    </button>
                  </div>
                </form>
              </div>

              <div className="w-100 justify-content-center   ">
                <table class="table table-bordered table-responsive">
                <tbody>
                      <tr className="App bg-light ">
                        <td>ID</td>
                        <td>Full Name</td>
                       <td>Phone</td>
                        <td>Email</td>
                        <td>experience</td>
                        <td>Area</td>
                        <td>Hub Manager</td>
                        <td>Pickup Agent</td>
                        <td>Images</td>
                        <td>Status</td>
                        <td>Action</td>
                      </tr>

                        <tr className="App bg-light ">
                        <td>01</td>
                        <td>Bill gates</td>
                        <td>01626262626</td>
                        <td>Parcel@gmail.com</td>
                        <td>00</td>
                        <td>banani</td>
                        <td>00</td>
                        <td>00</td>
                        <td>00</td>
                        <td>Active</td>
                        <td>
                          <i class="bi bi-pencil-square text-warning m-1"></i>
                          <i class="bi bi-trash text-danger m-1"></i>
                        </td>
                      </tr>
                      
                    </tbody>
                </table>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
      </div>
    </div>
    );
};

export default RejectedMan;