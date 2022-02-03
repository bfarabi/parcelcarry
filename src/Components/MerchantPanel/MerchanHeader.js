import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/Percel-Carry-logo.png";
import './MerchHeader.css';
import icon from "../../Images/parcel carry icon.png";

const MerchanHeader = () => {
  return (
    <div className="border-bottom w-100 bg-white">
      <div className=" container ">
        <nav class="navbar navbar-expand-lg navbar-light bg-white ">
          <div class="container-fluid">
            <Link class="navbar-brand w-50 " to="/">
              <img class='w-100 p-2' src={logo} alt=""  />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse " id="navbarText">
              <ul class="navbar-nav  mb-lg-0">
                <li class="nav-item">
                  <Link
                    class="nav-link active text-danger fw-bold"
                    aria-current="page"
                    to="/"
                  >
                    Track Parcel
                  </Link>
                </li>
              </ul>
              <ul class="navbar-nav d-flex justify-content-end align-items-center pt-2">
                <li class="nav-item">
                  <Link
                    class="nav-link active text"
                    aria-current="page"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active text" to="/parcels">
                    Parcels
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active text" to="/payments">
                    Payments
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active text" to="/coupon">
                    Coupon
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link active text" href="/admin">
                    admin
                  </a>
                </li>
                <li class="nav-item ">
                  <div class="">
                    <Link class="btn btn-outline-danger  fw-bold" to="/create">
                      Create Parcel
                    </Link>
                  </div>
                </li>
                
                <li class="nav-item dropdown w-25 ">
                  <p
                    class="nav-link  "
                    data-bs-toggle="dropdown"
                  >
                   <img className="w-25 m-0" src={icon} alt="" />
                   
                  </p>
                  
                  <ul class="dropdown-menu dropdown-menu-end fade-down">
                    <li>
                      <a class="dropdown-item" href="#">
                        <img className="w-25 p-1 mx-2" src={icon} alt="" />
                        Parcel Carry
                      </a>
                    </li>
                    <li><hr /></li>
                    <li>
                      <Link to="/my-shop" class="dropdown-item" >
                        My shop
                      </Link>
                    </li>
                    <li>
                      <Link to="/manage-location" class="dropdown-item" >
                        Manage pickup location
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop-setting" class="dropdown-item" >
                        Shop Setting
                      </Link>
                    </li>
                    <li>
                      <Link to="/coverage-area" class="dropdown-item" >
                        Coverage area
                      </Link>
                    </li>
                    <li>
                      <Link to="/credit-history" class="dropdown-item" >
                       Credit history
                      </Link>
                    </li>
                    <li>
                      <Link to="/tutorial" class="dropdown-item" >
                        Tutorials
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq" class="dropdown-item" >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Log Out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MerchanHeader;
