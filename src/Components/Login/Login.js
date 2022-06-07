import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./../Header/Header";

import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { authentication } from "../../firebase.config";

const Login = () => {
  let navigate = useNavigate();
  const countryCode = "+880";
  const [error, setError] = useState("");
  const [number, setNumber] = useState(countryCode);
  const [otp, setOtp] = useState("");
  const [expandForm, setExpandForm] = useState(false);

  const configureCaptcha = () => {
    // const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      authentication
    );
    return;
  };

  const getOtp = (e) => {
    e.preventDefault();
    setError("");
    if (number === " " || number === "+880" || number === undefined){
      return (
        setError("Please enter a valid Phone number"),
        setExpandForm(false)
      
      );
    }
    setExpandForm(true);
    configureCaptcha();
    const phoneNumber = number;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    // const auth = getAuth();
    signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("otp has been sent");
      })
      .catch((error) => {
        console.log("SMS not sent", error);
      });
  };

  const onSubmitOtp = (e) => {
    
    e.preventDefault();
    const code = otp;
    let confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/dashboard");
      })
      .catch((error) => {
       console.log(error);
       alert("Wrong OTP")
      });
  };

  return (
    <>
      <Header></Header>
      <div class="row w-100">
        <div className="col-md-6 p-5 text-center">
          <h2>Welcome!</h2>
          <p class="m">
            Enter your phone number with country code to login or create new account and hit
            “Send OTP” to get an OTP.
          </p>
        
          <form onSubmit={getOtp}>
            <div className="">
              
              <input
              className="form-control w-75 m-auto"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            <button class="signupBtn" type="submit">
              Send OTP
            </button>
            <div id="recaptcha-container"></div>
          </form>

          {expandForm === true ?
            <form onSubmit={onSubmitOtp}>
            <input
            className="form-control w-75 m-auto"
              name="otp"
              type="number"
              placeholder="OTP Number"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            
            <button class="signupBtn" type="submit">
              Confirm OTP
            </button>
            
          </form>

          :  <span class="text-danger fw-bold">{error}</span>
      }
     
          <p>
            By logging in you agree to our{" "}
            <span class="text-danger fw-bold">Terms & Conditions</span>{" "}
          </p>
          <hr class="straight-line" />
          <p>
            For partner account{" "}
            <span class="text-danger fw-bold">Login with password</span>{" "}
          </p>
        </div>

        {/* carousel section */}

        <div className="col-md-6 bg-light">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div
                className="carousel-item active App my-3"
                data-bs-interval="10000"
              >
                <img
                  src="https://redx.com.bd/images/parcel-tracking.png"
                  class=" w-75 my-2 "
                  alt="..."
                />
                <div className="m-2 p-2 ">
                  <h2>Get payment details</h2>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item App my-3" data-bs-interval="2000">
                <img
                  src="https://redx.com.bd/images/parcel-tracking.png"
                  class=" w-75 my-2 "
                  alt="..."
                />
                <div className="m-2 p-2 ">
                  <h2>Get payment details</h2>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item App my-3">
                <img
                  src="https://redx.com.bd/images/parcel-tracking.png"
                  class=" w-75 my-2 "
                  alt="..."
                />
                <div className="m-2 p-2 ">
                  <h2>Get payment details</h2>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
