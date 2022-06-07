import React from "react";
import "./AdNSign.css";
import { Link } from 'react-router-dom';

const AdNSignUp = () => {
  return (
    <div class="row w-100 p-0 m-0">
      <div className="col-md-8 p-0 m-0 position-relative">
        <img
          class="video-tag  "
          src="https://redx.com.bd/images/provide-services/line-haul.webp"
          alt=""
        />
        <div class="overlay "></div>
        <h1 class="video-text">
          Nationwide largest logistics network
          <span style={{ color: "red" }}>1192 areas covered</span>{" "}
        </h1>
      </div>

      <div className="col-md-4 p-0 m-0 ">
        <div className="login-part">
          <h6 style={{ color: "white" }}>
            SIGN UP FOR FREE. IT ONLY TAKES 2 MINUTES
          </h6>
          
            
           <Link to="/login">
           <button class="signupBtn" type="submit">
              Sign Up
            </button>
           </Link>
          
          <div class="or-section">
            <span>
              <p style={{ color: "white" }}>or,</p>
            </span>
          </div>
          <h6 style={{ color: "white" }}>TRACK MOVEMENT STATUS</h6>
          <div>
            <span>
              <input
                class="track-input"
                placeholder="Tracking ID"
                type="text"
              />
            </span>
            <span>
              <button class="track-button" type="button">
                Tracking
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdNSignUp;
