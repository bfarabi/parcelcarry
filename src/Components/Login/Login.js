import React from "react";
import { Link } from "react-router-dom";
import Header from './../Header/Header';

const Login = () => {
  return (
      <>
      <Header></Header>
    <div class="row w-100">
      <div className="col-md-6 p-5">
        <h2>Welcome!</h2>
        <p class="m">
          Enter your phone number to login or create new account and hit
          “Continue” to get an OTP.
        </p>
        <form action="">
          <div className="signUp-form-field">
            <picture class="flag">
              <source
                media="(width: 86px, height: 50px)"
                srcset="https://redx.com.bd/images/bangladesh-flag.png"
              />
              <img src="https://redx.com.bd/images/bangladesh-flag.png"></img>
            </picture>
            <span class="ext">+880</span>
            <input
              name="phone"
              type="number"
              placeholder="ফোন নাম্বার"
              value=""
            />
          </div>
          <Link to ="/dashboard">
          <button class="signupBtn" type="submit">
            Continue
          </button>
          </Link>
          
        </form>
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
            <div className="carousel-item active App my-3" data-bs-interval="10000">
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
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
