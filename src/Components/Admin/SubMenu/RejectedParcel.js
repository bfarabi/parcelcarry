import React from 'react';
import AdminHeader from "../AdminHeader";
import AdminMenu from "../AdminMenu";
import AdminFooter from './../AdminFooter';

import { Link } from 'react-router-dom';


const RejectedParcel = () => {
    return (
      <div class="wrapper">
      <AdminHeader></AdminHeader>
      <AdminMenu></AdminMenu>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <h2 className=" text-dark">Parcel </h2>
            <div className="row  mb-2 bg-white">

              <div className="d-flex justify-content-between p-3">
                <h5>Rejected parcel</h5>
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
                <table class="table table-bordered table-responsive-lg">
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
                      <td>Invoice ID</td>
                      <td>Shop Name</td>
                      <td> Customer Details</td>
                      <td>Delivery Area</td>
                      <td>Cash Collection</td>
                      <td>Delivery Charge</td>
                      <td>Total Amount</td>
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
                      <td>4321</td>
                      <td>Parcel carry</td>
                      
                      <td>banani, Dhaka</td>
                      <td>Dhaka</td>
                      
                      <td>90</td>
                      <td>120</td>
                      <td>150</td>
                      <td>Rejected</td>
                      <td className="d-flex">
                      
                      <Link to="/admin/edit-parcel"> <i class="bi bi-pencil-square m-1 bg-warning px-1 rounded"></i></Link>
                      <Link to="/invoice"> <i class="fas fa-eye m-1 bg-primary p-1 rounded "></i></Link>
                      <i class="bi bi-trash m-1 bg-danger px-1 rounded"></i>
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

export default RejectedParcel;