import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../AdminHeader";
import AdminMenu from "../AdminMenu";
import AdminFooter from "./../AdminFooter";

const PendingParcel = () => {
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
                <h5></h5>
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
                      <td>pending</td>
                      <td className="d-flex">
                        <Link to="/admin/edit-parcel">
                          {" "}
                          <p class=" m-1 bg-primary p-2 fw-bold rounded">Confirm</p>
                        </Link>

                        <p
                          onClick={() => alert("Are you confirm to Delete?")}
                          class=" m-1 bg-danger p-2 fw-bold rounded"
                        >
                          {" "}
                          Delete
                        </p>
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

export default PendingParcel;
