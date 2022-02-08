import React from 'react';
import AdminFooter from '../AdminFooter';
import AdminHeader from '../AdminHeader';
import AdminMenu from '../AdminMenu';

const Allinvoice = () => {
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

                      <th scope="col">Invoice ID</th>
                      <th scope="col">Client's Name</th>
                      <th scope="col">Client's Address</th>
                      <th scope="col">Invoices Date</th>
                      <th scope="col">Due Date</th>
                      <th scope="col">Invoices Description</th>
                      <th scope="col">Amounts</th>
                      <th scope="col">Due</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
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
                      <th scope="row">01</th>
                        <td>Billal Farabi</td>
                        <td>Dhaka, Bangladesh</td>
                        <td>2021-12-25 </td>
                        <td>2021-12-25 </td>
                        <td>This is invoice description</td>
                        <td>110</td>
                        <td>30</td>
                        <td>Pending</td>
                      <td className="d-flex">
                        <i class="bi bi-pencil-square text-warning m-1"></i>
                        <i class="fas fa-eye text-primary m-1"></i>
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

export default Allinvoice;