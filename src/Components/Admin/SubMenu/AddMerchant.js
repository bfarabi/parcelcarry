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
            <div className="row mb-2 bg-white">
            
              <div className="d-flex justify-content-between p-3">
              <h5>Merchant List</h5>
                <button className="btn btn-success  " type="submit">Add Merchant</button>
              </div>
              <div className="col-md-6"></div>
              <div className="col-md-6">
              Search:  
                <input className="text-align-end ms-2 form-control" type="text" name="" id="" />
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
