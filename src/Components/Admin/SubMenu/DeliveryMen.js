import React from "react";
import AdminFooter from "../AdminFooter";
import AdminHeader from "../AdminHeader";
import AdminMenu from "../AdminMenu";

const DeliveryMen = () => {
  return (
    <div class="wrapper">
      <AdminHeader></AdminHeader>
      <AdminMenu></AdminMenu>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col">
                <h1 className="m-0 text-dark">
                  welcome to add delivery men page
                </h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                {/* <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard v1</li>
                </ol> */}
              </div>
              {/* /.col */}
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

export default DeliveryMen;
