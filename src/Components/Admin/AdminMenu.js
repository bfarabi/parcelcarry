import React from "react";
import { Link } from "react-router-dom";
import payrasoft from "../../Images/logo horizontal.png";
import logo from "../../Images/Percel-Carry-logo.png";
import icon from "../../Images/parcel carry icon.png";

const AdminMenu = () => {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to="/" className="brand-link pt-0 ">
          <img
            style={{ padding: "0.5rem" }}
            src={logo}
            alt="logo"
            className="w-100 bg-white elevation-3"
          />
          {/* <span className="brand-text font-weight-light">Payra Soft</span> */}
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={icon}
                className="img-circle bg-white elevation-2"
                alt=""
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Admin
              </a>
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
              {/* <li className="nav-item has-treeview menu-open">
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>Dashboard</p>
                </a>
              </li> */}

              {/* widgets with badge */}
              {/* <li className="nav-item">
                <a href="pages/widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Widgets
                    <span className="right badge badge-danger">New</span>
                  </p>
                </a>
              </li> */}
              {/* widgets with badge end*/}

              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p>
                    Merchants
                    <i className="fas fa-angle-left right" />
                    {/* <span className="badge badge-info right">6</span> */}
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/addmerchant" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Merchants</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="pages/layout/boxed.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>All Merchants</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/layout/fixed-sidebar.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Pending Merchants</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/layout/fixed-topnav.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Rejected Merchants</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/layout/fixed-footer.html"
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
                  <li className="nav-item">
                    <a href="pages/charts/chartjs.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Parcel</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/charts/flot.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pending Parcel List</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/charts/inline.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Parcel List</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/charts/inline.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Delivery in Progress</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="pages/UI/general.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Delivered</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/icons.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Hold</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/buttons.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Returning </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/sliders.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Rejected Parcel</p>
                    </a>
                  </li>
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
                    <a href="pages/UI/icons.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pending Hub Manager</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/buttons.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Rejected Hub Manager</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/sliders.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>All Hub Manager</p>
                    </a>
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
                    <a href="pages/forms/advanced.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pending Pickup Agent</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/forms/editors.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Rejected Pickup Agent</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/forms/editors.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>All Pickup Agent</p>
                    </a>
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
                    <a href="pages/tables/simple.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Delivery Man</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/tables/data.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pending Delivery Man</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/tables/jsgrid.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Rejected Delivery Man</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/tables/jsgrid.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>All Delivery Man</p>
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-header">EXAMPLES</li>
              <li className="nav-item">
                <a href="pages/calendar.html" className="nav-link">
                  <i className="nav-icon far fa-calendar-alt" />
                  <p>
                    Calendar
                    <span className="badge badge-info right">2</span>
                  </p>
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a href="pages/gallery.html" className="nav-link">
                  <i className="nav-icon far fa-image" />
                  <p>Gallery</p>
                </a>
              </li> */}

              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-envelope" />
                  <p>
                    Accounts
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/mailbox/mailbox.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Account Overview</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/mailbox/compose.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Make Payment</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/mailbox/read-mail.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Invoice</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/mailbox/read-mail.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>All Invoice</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/mailbox/read-mail.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Unpaid Parcel</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/mailbox/read-mail.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Paid Parcel</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/mailbox/read-mail.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Payment History</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/mailbox/read-mail.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Income</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/mailbox/read-mail.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Expenses</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/mailbox/read-mail.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Make Salary</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
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
              </li>

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
                    <a href="pages/examples/login.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Coupon</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/register.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>All Coupon</p>
                    </a>
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
                  <i className="nav-icon far fa-calendar-alt" />
                  <p>
                    Notice board
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/examples/login.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Notice</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/register.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Today Notice</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/register.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Notice</p>
                    </a>
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
