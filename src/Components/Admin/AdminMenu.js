import React from "react";
import { Link } from "react-router-dom";
import payrasoft from "../../Images/logo horizontal.png";
import logo from "../../Images/Percel-Carry-logo.png";
import icon from "../../Images/parcel carry icon.png";
import "./admin.css";

const AdminMenu = () => {
  return (
    <div>
      <aside className="main-sidebar sidebar-light-primary ">
        {/* Brand Logo */}
        <Link to="/" className="brand-link  pb-2 pt-1 ">
          <img
            // style={{ padding: "0.5rem" }}
            src={logo}
            alt="logo"
            className="w-100 bg-white "
          />
          {/* <span className="brand-text font-weight-light">Payra Soft</span> */}
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-2  pb-2 mb-3  admin-div">
            <div className="image">
              <img
                src={icon}
                className="img-circle bg-white elevation-2"
                alt=""
              />
            </div>
            <div className="info ">
              <a href="#" className="d-block text-decoration-none fw-bold mx-2">
                Admin
              </a>
            </div>

            <div className="crossBtn" data-widget="pushmenu">
              <i class="fas fa-times fs-3 text-danger"></i>
            </div>
          </div>

          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
              <li className="nav-item has-treeview menu-open">
                <Link to="/admin" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>Dashboard</p>
                </Link>
              </li>

              <li className="nav-item has-treeview">
                <a className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p>
                    Merchants
                    <i className="fas fa-angle-left right" />
                    {/* <span className="badge badge-info right">6</span> */}
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  {/* <li className="nav-item">
                    <Link to="/admin/addmerchant" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Merchants</p>
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link to="/admin/all-merchant" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>All Merchants</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/pending-merchant" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pending Merchants</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/rejected-merchant" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Rejected Merchants</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>All Shop</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-chart-pie" />
                  <p>
                    Parcel
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  {/* <li className="nav-item">
                    <a href="pages/charts/chartjs.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Parcel</p>
                    </a>
                  </li> */}

                  <li className="nav-item">
                    <Link to="/admin/parcel-list" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Parcel List</p>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/admin/parcel-list" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pending Parcel List</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/parcel-list" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Rejected Parcel</p>
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <a  className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Delivery in Progress</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a  className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Delivered</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a  className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Hold</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a  className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Returning </p>
                    </a>
                  </li> */}
                </ul>
              </li>

              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tree" />
                  <p>
                    Hub Manager
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/addhubmanger" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Hub Manager</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/pending-hub" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pending Hub Manager</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/rejected-hub" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Rejected Hub Manager</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/all-hub" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>All Hub Manager</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                    Pickup Agent
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/addPickup" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Pickup Agent </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/pending-pickup" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pending Pickup Agent</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/rejected-pickup" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Rejected Pickup Agent</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/all-pickup" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>All Pickup Agent</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    Delivery Man
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/add-delivery-man"  className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Delivery Man</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/pending-man" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pending Delivery Man</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/rejected-man" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Rejected Delivery Man</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/all-man" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>All Delivery Man</p>
                    </Link>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item has-treeview">
                <a  className="nav-link">
                  <i className="nav-icon far fa-envelope" />
                  <p>
                    Accounts
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a className="nav-link ">
                      <i className="far fa-circle nav-icon" />
                      <p>Account Overview</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/make-salary"  className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Make Payment</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a  className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Invoice</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/all-invoice"  className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>All Invoice</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/unpaid-invoice" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Unpaid Invoice</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/paid-invoice" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Paid Invoice</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/make-salary" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Payment History</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/income" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Income</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/Expenses"  className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Expenses</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/make-salary"  className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Make Salary</p>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-book" />
                  <p>
                    Delivery Area
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/examples/invoice.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Area</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/profile.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>View All Area</p>
                    </a>
                  </li>
                </ul>
              </li> */}

              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-file" />
                  <p>
                    Coupon
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/add-coupon" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Coupon</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/all-coupon" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>All Coupon</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-plus-square" />
                  <p>
                    Support
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/examples/login.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Support Request</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/register.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Completed Support</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-plus-square" />
                  <p>
                    Application
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/delivery-area" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Delivery Area</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/charge-list" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Charge List</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/weight-list" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Weight List</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/charge-package " className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Charge Package</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/delivery-option" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Delivery Option</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-calendar-alt" />
                  <p>
                    Notice board
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/add-notice" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Notice</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/all-notice" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>All Notice</p>
                    </Link>
                  </li>
                 
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Setting
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/examples/login.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Front End Section</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>Logout</p>
                </a>
              </li>

              {/* <li className="nav-header">MISCELLANEOUS</li>
              <li className="nav-item">
                <a href="https://adminlte.io/docs/3.0" className="nav-link">
                  <i className="nav-icon fas fa-file" />
                  <p>Documentation</p>
                </a>
              </li> */}
              {/* <li className="nav-header">MULTI LEVEL EXAMPLE</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Level 1</p>
                </a>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-circle" />
                  <p>
                    Level 1
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </a>
                  </li>
                  <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Level 2
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </a>
                  </li>
                </ul>
              </li> */}

              {/* <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Level 1</p>
                </a>
              </li>
              <li className="nav-header">LABELS</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-danger" />
                  <p className="text">Important</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-warning" />
                  <p>Warning</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-info" />
                  <p>Informational</p>
                </a>
              </li> */}
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default AdminMenu;
