import React from 'react';
import AdminHeader from "../AdminHeader";
import AdminMenu from "../AdminMenu";
import AdminFooter from './../AdminFooter';
import MalePhoto from "../../../Images/male.png";
import { Link } from 'react-router-dom';

const RejectedHub = () => {
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
                  <h5> List</h5>
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
                      <td>Images</td>
                      <td>Full Name</td>
                      <td> Area</td>
                      
                      <td>Total Pickup</td>
                      <td> Total Delivery Man</td>
                      <td> Joining Date</td>
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
                      <td>banani</td>
                      
                      <td>00</td>
                      <td>00</td>
                      <td>02/02/2022</td>

                      <td>Rejected</td>
                      <td className="d-flex" >
                      <Link to="/admin/edit-view"><i class="bi bi-pencil-square text-warning m-1"></i></Link>
                        
                        <Link to="/admin/hub-view"> <i class="fas fa-eye text-primary m-1"></i></Link>
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

export default RejectedHub;