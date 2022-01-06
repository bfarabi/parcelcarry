import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../Images/Percel-Carry-logo.png";

const Header = () => {
  return (
    <div className="App border" style={{width:'100vw'}} >
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
                এন্টারপ্রাইজ
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text" to="/c2c">
                  সিটুসি
                </Link>
              </li>
            </ul>
            <ul class="navbar-nav m-auto ">
              <li class="nav-item languageBtn ">
                <a
                  class="nav-link active d-flex justify-content-between callingBtn "
                  aria-current="page"
                  href="tel:+09610007339"
                >
                  <img
                    class="phone-icon"
                    src="https://redx.com.bd/images/revamp/phone-icon.svg"
                    alt=""
                  />
                  <p>
                    কল করুন <span class="text-danger">+০৯৬১০০০৭৩৩৯ </span>
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <div class="loginBtn p-2">
                  <a  href="#">
                    {" "}
                    LOGIN
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <div class="languageBtn  p-3 ">
                  <img
                    src="https://redx.com.bd/images/revamp/language.svg"
                    alt=""
                  />
                  <p>BN</p>
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