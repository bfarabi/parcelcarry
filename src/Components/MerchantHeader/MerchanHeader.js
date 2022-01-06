import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/Percel-Carry-logo.png";

const MerchanHeader = () => {
  return (
    <div className="App border w-100">
      <nav class="navbar navbar-expand-lg navbar-light bg-white ">
        <div class="container-fluid">
          <Link class="navbar-brand mx-3" to="/">
            <img class="w-75" src={logo} alt="" width="130" height="50" />
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
                  to="/enterprise"
                >
                  Track Parcel
                </Link>
              </li>
            </ul>
            <ul class="navbar-nav m-auto ">
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
                <Link class="nav-link active text" to="/parcel">
                  Parcel
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
                <div class="">
                  <Link class="btn btn-outline-danger fw-bold" to="/">
                    Create Parcel
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MerchanHeader;
