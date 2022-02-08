import React from "react";
import AdminHeader from "../../AdminHeader";
import AdminMenu from "../../AdminMenu";
import AdminFooter from "./../../AdminFooter";
import MalePhoto from "../../../../Images/male.png";
import { Link } from 'react-router-dom';


const ViewProfile = () => {
  return (
    <div class="wrapper">
      <AdminHeader></AdminHeader>
      <AdminMenu></AdminMenu>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row  mb-2 py-4">
              
                <div className="col-md-3">
                  <div className="card card-primary card-outline">
                    <div className="card-body box-profile">
                      <div className="text-center">
                        <img
                          className="profile-user-img img-fluid img-circle"
                          src={MalePhoto}
                          alt
                        />
                      </div>
                      <h3 className="profile-username text-center">Parcel carry</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Profile Info</h3>
                      <div className="card-tools">
                        <Link
                          to="/admin/edit-profile"
                          className="btn btn-info"
                        >
                          Edit
                        </Link>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <p>Admin</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <p>01712111222</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <p>admin@gmail.com</p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <p>Dhaka, BD</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default ViewProfile;
