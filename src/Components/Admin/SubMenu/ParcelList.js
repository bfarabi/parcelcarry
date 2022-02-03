import React from 'react';
import AdminHeader from "../AdminHeader";
import AdminMenu from "../AdminMenu";

const ParcelList = () => {
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
                <h5>Parcel List</h5>
                <button className="btn btn-success  " type="submit">
                  Add 
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
                      <td>Customer Name</td>
                      <td> Customer Phone</td>
                      <td> Customer Address</td>
                      <td>District</td>
                      <td>Area</td>
                      <td>Total Charge</td>
                      <td>Status</td>
                      <td>Action</td>
                    </tr>
                    <tr className="App bg-light ">
                      <td>01</td>
                      <td>Parcel carry</td>
                      <td>01626262626</td>
                      <td>banani</td>
                      <td>Dhaka</td>
                      <td>Dhaka</td>
                      <td>90</td>
                      <td>Active</td>
                      <td><i class="bi bi-pencil-square m-1"></i>
                      <i class="bi bi-trash m-1"></i>
                      </td>
                    </tr>
                    <tr className="App bg-light ">
                      <td>02</td>
                      <td>Parcel carry</td>
                      <td>01626262626</td>
                      <td>banani</td>
                      <td>Dhaka</td>
                      <td>Dhaka</td>
                      <td>90</td>
                      <td>Active</td>
                      <td><i class="bi bi-pencil-square m-1"></i>
                      <i class="bi bi-trash m-1"></i>
                      </td>
                    </tr>
                    <tr className="App bg-light ">
                      <td>03</td>
                      <td>Parcel carry</td>
                      <td>01626262626</td>
                      <td>banani</td>
                      <td>Dhaka</td>
                      <td>Dhaka</td>
                      <td>90</td>
                      <td>Active</td>
                      <td><i class="bi bi-pencil-square m-1"></i>
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
    </div>
    );
};

export default ParcelList;