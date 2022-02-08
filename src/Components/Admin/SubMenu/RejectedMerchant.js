import React from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from "../AdminHeader";
import AdminMenu from "../AdminMenu";
import AdminFooter from './../AdminFooter';

const RejectedMerchant = () => {
    return (
        <div class="wrapper">
      <AdminHeader></AdminHeader>
      <AdminMenu></AdminMenu>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <h2 className=" text-dark">Merchants</h2>
            <div className="row  mb-2 bg-white">
              <div className="d-flex justify-content-between p-3">
                <h5>Rejected Merchant</h5>
                <div
                  className="btn-group m-1"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" class="btn btn-success ms-1">
                    Copy
                  </button>
                  <button type="button" class="btn btn-success ms-1">
                    CSV
                  </button>
                  <button type="button" class="btn btn-success ms-1">
                    Excel
                  </button>
                  <button type="button" class="btn btn-success ms-1">
                    PDF
                  </button>
                  <button type="button" class="btn btn-success ms-1">
                    Print
                  </button>
                </div>
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
                    <td>
                        <div class="form-check ">
                          <input
                            class="form-check-input "
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                        </div>
                        </td>
                      <td>#SL</td>
                      <td>ID</td>
                      <td>Full Name</td>
                      <td>Shop Name</td>
                      <td>Account type</td>
                      <td>Phone</td>
                      <td>Email</td>
                      <td>Product type</td>
                      <td>Shop Address</td>
                      <td>Pickup Area</td>
                      <td>FB/web URL</td>
                      <td>Status</td>
                      <td>Action</td>
                    </tr>
                   
                    <tr className="App bg-light ">
                    <td>
                        <div class="form-check ">
                          <input
                            class="form-check-input "
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                        </div>
                        </td>
                      <td>01</td>
                      <td>232</td>
                      <td>Bill gates</td>
                      <td>Parcel carry</td>
                      <td>00</td>
                      <td>01626262626</td>
                      <td>ParcelCarry@gmail.com</td>
                      
                      <td>00</td>
                      <td>Banani</td>
                      <td>banani</td>
                      <td>www.facebook.com</td>
                      <td>Active</td>
                      <td className="d-flex">
                      <Link to="/admin/edit-all-merchant"><i class="bi bi-pencil-square m-1"></i></Link>
                      <Link to='/admin/merchant-view'> <i className="fas fa-eye m-1 " ></i></Link>
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
      <AdminFooter></AdminFooter>
    </div>
    );
};

export default RejectedMerchant;