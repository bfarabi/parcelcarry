import React from "react";
import AdminHeader from "../AdminHeader";
import AdminMenu from "../AdminMenu";

const MerchantView = () => {
  return (
    <div class="wrapper">
      <AdminHeader></AdminHeader>
      <AdminMenu></AdminMenu>
      <div className="content-wrapper">
        <div className="container-fluid">
          <div className="row p-3">

            <div className="col-md-3 ">
              <div className=" bg-white p-3 m-1">
                <h5 className="fw-bold pb-0 mb-0">Billal Farabi</h5>
                <p className="">
                  Dietrich PLC <br />
                  last login at ...
                </p>
              </div>
            </div>

            <div className="col-md-3  ">
              <div className=" row bg-white p-3 m-1 ">
                <div className="col">
                  <h5 className="fw-bold">Total Parcel</h5>
                  <h5 className="text-primary ">0</h5>
                </div>

                <div className="col text-center pt-3">
                  <i className="nav-icon fas fa-copy fs-5" />
                </div>
              </div>
            </div>
            <div className="col-md-3  ">
              <div className=" row bg-white p-3 m-1">
                <div className="col">
                  <h5 className="fw-bold">Total Price</h5>
                  <h5 className="text-primary ">0</h5>
                </div>

                <div className="col text-center pt-3">
                  <i className="nav-icon fas fa-copy fs-5" />
                </div>
              </div>
            </div>
            <div className="col-md-3  ">
              <div className=" row bg-white p-3  m-1">
                <div className="col">
                  <h5 className="fw-bold">Due invoice</h5>
                  <h5 className="text-primary ">0</h5>
                </div>

                <div className="col text-center pt-3">
                  <i className="nav-icon fas fa-copy fs-5" />
                </div>
              </div>
            </div>

            <div className="col-md-7 mt-3 ">
            
            <table class="table ms-1 p-3  mt-0 table-borderless bg-white">
            <h4 className="p-3"> Profile info</h4>
                  <tbody>
                    <tr className="  ">
                      <td>Full Name</td>
                      <td>Billal Farabi</td>
                     </tr>
                   
                    <tr className=" ">
                      <td>Email</td>
                      <td>Parcel@carry.gmail.com</td>
                    </tr>
                    <tr className=" ">
                      <td>Company</td>
                      <td>Name</td>
                    </tr>
                    <tr className=" ">
                      <td>Mobile</td>
                      <td>...</td>
                    </tr>
                    
                    <tr className=" ">
                      <td>Gender</td>
                      <td>Male</td>
                    </tr>
                    
                    <tr className=" ">
                      <td>Office Website</td>
                      <td>parcel.com</td>
                    </tr>
                    <tr className=" ">
                      <td>GST/VAT Number</td>
                      <td>000</td>
                    </tr>
                    <tr className=" ">
                      <td>State</td>
                      <td>...</td>
                    </tr>
                    <tr className=" ">
                      <td>City</td>
                      <td>...</td>
                    </tr>
                    <tr className=" ">
                      <td>Post code</td>
                      <td>...</td>
                    </tr>
                    <tr className=" ">
                      <td>Note</td>
                      <td>...</td>
                    </tr>
                    
                  </tbody>
                </table>
            </div>

            <div className="col-md-5 mt-3 ">
            <div class="bg-white text-center py-4">
            <h4 className="py-3">Project</h4>
            <p className="py-5">-Not enough data</p>
            </div>
            <div className="mt-2">
            <div class="bg-white text-center py-4">
            <h4 className="py-3">Invoice</h4>
            <p className="py-5">-Not enough data</p>
            </div>
            </div>
              
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
    </div>
  );
};

export default MerchantView;
