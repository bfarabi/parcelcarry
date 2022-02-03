import React from 'react';
import AdminHeader from "../AdminHeader";
import AdminMenu from "../AdminMenu";

const PendingParcel = () => {
    return (
        <div class="wrapper">
      <AdminHeader></AdminHeader>
      <AdminMenu></AdminMenu>
      {/* <div className="content-wrapper">
        <div className="content-header px-0">
          <div className="container fluid">
            <h2 className=" text-dark">Parcel</h2>
            <div className="row bg-white">
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

              <div className="row justify-content-center table-responsive-md  ">
                <table class="table table-bordered">
                  <tbody>
                    <tr className="App bg-light ">
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
                      <td>01</td>
                      <td>Bill gates</td>
                      <td>Parcel carry</td>
                      <td>00</td>
                      <td>01626262626</td>
                      <td>ParcelCarry @gmail.com</td>
                      
                      <td>00</td>
                      <td>Banani</td>
                      <td>banani</td>
                      <td>www. facebook.com</td>
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
            
          </div>
          
        </div>
      </div> */}
    </div>
    );
};

export default PendingParcel;