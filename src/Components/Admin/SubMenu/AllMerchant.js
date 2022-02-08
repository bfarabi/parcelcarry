import React from "react";
import { Link } from "react-router-dom";
import AdminFooter from "../AdminFooter";
import AdminHeader from "../AdminHeader";
import AdminMenu from "../AdminMenu";
import './Submenu.css';

const AllMerchant = () => {
  return (
    <div class="wrapper">
      <AdminHeader></AdminHeader>
      <AdminMenu></AdminMenu>
      <div className="content-wrapper">
        <div className="content-header px-1">
          <div className="container-fluid">
            <h2 className=" text-dark">merchants</h2>
            <div className="row  mb-2 bg-white">
              <div className="d-flex justify-content-between p-3">
                <h5>Merchant List</h5>
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
                      <td>ID</td>
                      <td> Name</td>
                      <td>Shop Name</td>
                      <td>Phone</td>
                      <td>Area</td>
                      <td>Total Parcel</td>
                      <td>Total Sales</td>
                      <td>Delivery Fee Paid</td>
                      <td>Unpaid Amount</td>
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
                      <td>221</td>
                      <td>Bill gates</td>
                      <td>Parcel carry</td>
                      <td>01626262626</td>
                      <td>banani</td>
                      <td>20</td>
                      <td>40</td>
                      <td>60</td>
                      <td>90</td>
                      <td>Active</td>
                      <td className="d-flex">
                        <Link to="/admin/edit-all-merchant">
                          <i class="bi bi-pencil-square m-1"></i>
                        </Link>
                        <Link to="/admin/merchant-view">
                          {" "}
                          <i className="fas fa-eye m-1 "></i>
                        </Link>
                        <i class="bi bi-trash m-1"></i>
                      </td>
                    </tr>
                    <tr className="App bg-light ">
                      <td scope="col">
                      <div class="form-check ">
                          <input
                            class="form-check-input "
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                         
                        </div>
                      </td>
                      <td>02</td>
                      <td>342</td>
                      <td>Bill Gates</td>
                      <td>Parcel carry</td>
                      <td>01626262626</td>
                      <td>banani</td>
                      <td>20</td>
                      <td>40</td>
                      <td>60</td>
                      <td>90</td>
                      <td>Active</td>
                      <td className="d-flex">
                        {" "}
                        <Link to="/admin/edit-all-merchant">
                          <i class="bi bi-pencil-square m-1"></i>
                        </Link>
                        <Link to="/admin/merchant-view">
                          {" "}
                          <i className="fas fa-eye m-1 "></i>
                        </Link>
                        <i class="bi bi-trash m-1"></i>
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

export default AllMerchant;
