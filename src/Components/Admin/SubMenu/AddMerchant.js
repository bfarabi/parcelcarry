import React from "react";
import AdminHeader from "../AdminHeader";
import AdminMenu from "../AdminMenu";

const AddMerchant = () => {
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

              <div className=" justify-content-center table-responsive-md ">
              
                <table class="table table-bordered">
                  <tbody>
                  <tr className="App align-middle bg-light ">
                      <td>ID</td>
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

export default AddMerchant;
