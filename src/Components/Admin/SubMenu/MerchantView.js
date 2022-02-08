import React from "react";
import AdminHeader from "../AdminHeader";
import AdminMenu from "../AdminMenu";
import AdminFooter from './../AdminFooter';
import { Link } from 'react-router-dom';

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
                  <i className="nav-icon fas fa-copy fs-5" />
                  
                </div>

                <div className="col text-center pt-3">
                <h4 className="text-primary ">0</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3  ">
              <div className=" row bg-white p-3 m-1">
                <div className="col">
                  <h5 className="fw-bold">Total Sales</h5>
                  <i className="nav-icon fas fa-copy fs-5" />
                </div>

                <div className="col text-center pt-3">
                  
                  <h4 className="text-primary ">0</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3  ">
              <div className=" row bg-white p-3  m-1">
                <div className="col">
                  <h5 className="fw-bold">Due Invoice</h5>
                  <i className="nav-icon fas fa-copy fs-5" />
                  
                </div>

                <div className="col text-center pt-3">
                <h4 className="text-primary ">0</h4>
                  
                </div>
              </div>
            </div>

            <div className="col-md-7 mt-3 ">
            
            <table class="table ms-1 p-3  mt-0 table-borderless bg-white">
            <h4 className="p-3 fw-bold"> Profile info</h4>
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
                      <td>Shop Name</td>
                      <td> parcel carry</td>
                    </tr>
                    <tr className=" ">
                      <td>Mobile</td>
                      <td>01711100011</td>
                    </tr>
                    
                    <tr className=" ">
                      <td>Address</td>
                      <td>banani, Dhaka</td>
                    </tr>
                    
                    <tr className=" ">
                      <td>Office Website</td>
                      <td>parcel.com</td>
                    </tr>
                    <tr className=" ">
                      <td>Facebook</td>
                      <td>www.fb.com/parcelcarry</td>
                    </tr>
                    <tr className=" ">
                      <td>Status</td>
                      <td>Active</td>
                    </tr>
                    <tr className=" ">
                      <td>Image</td>
                      <td>...</td>
                    </tr>
                    <tr className=" ">
                      <td>Bank Account Name</td>
                      <td>...</td>
                    </tr>
                    <tr className=" ">
                      <td>Bank Account number</td>
                      <td>...</td>
                    </tr>
                    <tr className=" ">
                      <td>Bank Name</td>
                      <td>...</td>
                    </tr>
                    <tr className=" ">
                      <td>Bkash Number</td>
                      <td>...</td>
                    </tr>
                    <tr className=" ">
                      <td>Rocket Number</td>
                      <td>...</td>
                    </tr>
                    <tr className=" ">
                      <td>Nagad Number</td>
                      <td>...</td>
                    </tr>
                    <tr className=" ">
                      <td>NID</td>
                      <td>...</td>
                    </tr>
                    <tr className=" ">
                      <td>Trade License</td>
                      <td>...</td>
                    </tr>
                    <tr className=" ">
                      <td>TIN Number</td>
                      <td>...</td>
                    </tr>
                    
                  </tbody>
                </table>
            </div>

            <div className="col-md-5 mt-3 ">
            <div class="bg-white  p-1">
            <h4 className="p-1 fw-bold">Last Parcel</h4>
            
            <div className="  table-responsive  ">
                <table class="table table-border">
                  
                  <thead>
                  <tr>
                  <td>#SL</td>
                  <td>Invoice ID</td>
                  <td>Customer Details</td>
                  <td>Status</td>
                  <td>Action</td>
                  
                  </tr>
                  </thead>

                  <tbody>
                  <tr>
                  <td>01</td>
                  <td>231</td>
                  
                  <td>Dhaka, Bangladesh</td>
                  <td className="text-success fw-bold">Active</td>
                  <td className="">
                        <Link to="/admin/merchant-view">
                         <i className="fas fa-eye m-1 bg-primary p-1 rounded "></i>
                        </Link>
                      </td>
                  </tr>
                  <tr>
                  <td>01</td>
                  <td>231</td>
                  
                  <td>Dhaka, Bangladesh</td>
                  <td className="text-success fw-bold">Active</td>
                  <td className="">
                        <Link to="/admin/merchant-view">
                         <i className="fas fa-eye m-1 bg-primary p-1 rounded "></i>
                        </Link>
                      </td>
                  </tr>
                  <tr>
                  <td>01</td>
                  <td>231</td>
                  
                  <td>Dhaka, Bangladesh</td>
                  <td className="text-success fw-bold">Active</td>
                  <td className="">
                        <Link to="/admin/merchant-view">
                         <i className="fas fa-eye m-1 bg-primary p-1 rounded "></i>
                        </Link>
                      </td>
                  </tr>
                  <tr>
                  <td>01</td>
                  <td>231</td>
                  
                  <td>Dhaka, Bangladesh</td>
                  <td className="text-success fw-bold">Active</td>
                  <td className="">
                        <Link to="/admin/merchant-view">
                         <i className="fas fa-eye m-1 bg-primary p-1 rounded "></i>
                        </Link>
                      </td>
                  </tr>
                  
                   
                  </tbody>
                </table>
                
                
              </div>

            </div>

            <div className="mt-2">
            <div class="bg-white p-1">
            <h4 className="p-1">Last Invoice</h4>

            <div className="  table-responsive  ">
                <table class="table table-border">
                  
                  <thead>
                  <tr>
                  <td>#SL</td>
                  <td>Invoice ID</td>
                  <td>Customer Details</td>
                  <td>Status</td>
                  <td>Action</td>
                  
                  </tr>
                  </thead>

                  <tbody>
                  <tr>
                  <td>01</td>
                  <td>231</td>
                  
                  <td>Dhaka, Bangladesh</td>
                  <td className="text-success fw-bold">Active</td>
                  <td className="">
                        <Link to="/admin/merchant-view">
                         <i className="fas fa-eye m-1 bg-primary p-1 rounded "></i>
                        </Link>
                      </td>
                  </tr>
                  <tr>
                  <td>01</td>
                  <td>231</td>
                  
                  <td>Dhaka, Bangladesh</td>
                  <td className="text-success fw-bold">Active</td>
                  <td className="">
                        <Link to="/admin/merchant-view">
                         <i className="fas fa-eye m-1 bg-primary p-1 rounded "></i>
                        </Link>
                      </td>
                  </tr>
                  <tr>
                  <td>01</td>
                  <td>231</td>
                  
                  <td>Dhaka, Bangladesh</td>
                  <td className="text-success fw-bold">Active</td>
                  <td className="">
                        <Link to="/admin/merchant-view">
                         <i className="fas fa-eye m-1 bg-primary p-1 rounded "></i>
                        </Link>
                      </td>
                  </tr>
                  <tr>
                  <td>01</td>
                  <td>231</td>
                  
                  <td>Dhaka, Bangladesh</td>
                  <td className="text-success fw-bold">Active</td>
                  <td className="">
                        <Link to="/admin/merchant-view">
                         <i className="fas fa-eye m-1 bg-primary p-1 rounded "></i>
                        </Link>
                      </td>
                  </tr>
                  
                   
                  </tbody>
                </table>
                
                
              </div>

            </div>
            </div>
              
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      <AdminFooter></AdminFooter>
    </div>
  );
};

export default MerchantView;
