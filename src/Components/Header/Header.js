import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../Images/Percel-Carry-logo.png";

const Header = () => {
  return (
    <div className="App border w-100 p-0 m-0" >
      <nav class="navbar navbar-expand-lg navbar-light bg-white " >
        <div class="container-fluid">
          <Link class="navbar-brand mx-3" to='/'>
            <img class="w-75"
              src={logo}
              alt=""
              width="130"
              height="50"
            />
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
                <Link class="nav-link active text" aria-current="page" to="/enterprise">
                Enterprise
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text" to="/c2c">
                  C2C
                </Link>
              </li>
            </ul>
            <ul class="navbar-nav m-auto ">
              <li class="nav-item languageBtn d-flex justify-content-center ">
                <a
                  class="nav-link active d-flex justify-content-between callingBtn "
                  aria-current="page"
                  href="tel:+8801320-990096"
                >
                  <img
                    class="phone-icon"
                    style={{color:'#363A86'}}
                    src="https://redx.com.bd/images/revamp/phone-icon.svg"
                    alt=""
                  />
                  <p>
                    Call Us <span class="" style={{color:'#363A86'}} >+8801320-990096 </span>
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <div class="loginBtn p-3">
                  <Link class="btn btn-danger mt-2 fw-bold" to="/login">LOGIN</Link>
                </div>
              </li>
              
              <li class="nav-item">
                <div class="languageBtn   p-3 ">
                 
                  <Link class="nav-link active text" to="/dashboard">
                  <button type="button" class="btn btn-primary fw-bold">Dashboard</button>
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

export default Header;
