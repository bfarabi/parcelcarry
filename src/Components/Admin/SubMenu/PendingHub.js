import React from "react";
import AdminHeader from "../AdminHeader";
import AdminMenu from "../AdminMenu";
import AdminFooter from "./../AdminFooter";
import MalePhoto from "../../../Images/male.png";
import { Link } from 'react-router-dom';

const PendingHub = () => {
  return (
    <div class="wrapper">
      <AdminHeader></AdminHeader>
      <AdminMenu></AdminMenu>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <h2 className=" text-dark">Hub Manager</h2>
            <div className="row  mb-2 bg-white">
              <div className="d-flex justify-content-between p-3">
                <h5>Pending Hub Manager</h5>
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

              <div className="w-100   ">
                <table class="table table-bordered  table-responsive-lg ">
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
                      <td>Images</td>
                      <td>Full Name</td>
                      
                      <td>Contact Number</td>
                      
                      <td> Created Date </td>
                      
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
                      <td>3231</td>
                      <td>
                      <img
                          className=" w-25 profile-user-img img-fluid img-circle"
                          src={MalePhoto}
                          alt
                        />
                      </td>
                      <td>Bill gates</td>
                     
                      <td>+8801600000000</td>
                      <td>02/02/2022</td>
                     
                      
                      <td>Pending</td>
                      <td className="d-flex" >
                      <Link to="/admin/edit-view"><p class=" m-1 bg-primary p-2 fw-bold rounded">Confirm</p></Link>
                       {/* <Link to="/admin/hub-view"> <i class="fas fa-eye text-primary m-1"></i></Link> */}
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

export default PendingHub;
