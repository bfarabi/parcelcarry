import React from "react";
import { Link } from "react-router-dom";
import MalePhoto from "../../Images/male.png";

const AdminHeader = () => {
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#">
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/" className="nav-link">
              <i className="fas fa-globe mx-1"></i>
              Go to website
            </Link>
          </li>
        </ul>
        {/* SEARCH FORM */}
        <form className="form-inline ml-3">
          <div className="input-group input-group-sm">
            <input
              className="form-control form-control-navbar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </form>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Messages Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link " data-toggle="dropdown" href="#">
              <i className="far fa-comments bg-success p-1 rounded" />

              {/* <span className="badge badge-danger navbar-badge mx-3">3</span> */}
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  {/* <img
                    src="dist/img/user1-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 mr-3 img-circle"
                  /> */}
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Brad Diesel
                      <span className="float-right text-sm text-danger">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">Call me whenever you can...</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  {/* <img
                    src="dist/img/user8-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  /> */}
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      John Pierce
                      <span className="float-right text-sm text-muted">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">I got your message bro</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  {/* <img
                    src="dist/img/user3-128x128.jpg"
                    alt="User Avatar"
                    className="img-size-50 img-circle mr-3"
                  /> */}
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Nora Silvester
                      <span className="float-right text-sm text-warning">
                        <i className="fas fa-star" />
                      </span>
                    </h3>
                    <p className="text-sm">The subject goes here</p>
                    <p className="text-sm text-muted">
                      <i className="far fa-clock mr-1" /> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item dropdown-footer">
                See All Messages
              </a>
            </div>
          </li>

          {/* Notifications Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-bell bg-danger p-1 rounded" />
              {/* <span className="badge badge-warning navbar-badge">15</span> */}
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-item dropdown-header">
                15 Notifications
              </span>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fas fa-envelope mr-2" /> 4 new messages
                <span className="float-right text-muted text-sm">3 mins</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fas fa-users mr-2" /> 8 friend requests
                <span className="float-right text-muted text-sm">12 hours</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fas fa-file mr-2" /> 3 new reports
                <span className="float-right text-muted text-sm">2 days</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item dropdown-footer">
                See All Notifications
              </a>
            </div>
          </li>
          {/* customize */}

          <li className="nav-item dropdown">
            <a
              className="nav-link w-75 py-0"
              data-widget="control-sidebar"
              data-toggle="dropdown"
              data-slide="true"
              href="#"
            >
              <img className="w-25 " src={MalePhoto} alt="" />
              <span className="fw-bold" >Admin</span>
            </a>

            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right pt-0">
              <div className="d-flex w-100  p-2">
                <div className="dropdown-item w-50">
                  <img className="w-75" src={MalePhoto} alt="" />
                </div>
                <div className="w-50">
                  <p className="fw-bold">Admin</p>

                 <Link to="/admin/view-profile">
                 <button className="btn btn-rounded btn-danger btn-sm">
                    View profile
                  </button>
                 </Link> 
                </div>
              </div>
              <div className="dropdown-divider" />
              <Link to="/admin/view-profile"  className="dropdown-item">
                <i className="fas fa-user mr-1" /> My Profile
                </Link>
              <div className="dropdown-divider" />

              <Link to="/admin/account-setting" className="dropdown-item">
                <i className="fas fa-cogs mr-1" />Account Setting
              </Link>
              <div className="dropdown-divider" />
              <Link to="/admin/change-password" className="dropdown-item">
                <i className="fas fa-key mr-1" /> Change Password
              </Link>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fas fa-power-off mr-1" /> Log out
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminHeader;
