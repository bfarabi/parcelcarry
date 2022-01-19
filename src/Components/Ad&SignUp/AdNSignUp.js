import React from "react";
import "./AdNSign.css";

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
          দেশজুড়ে সবচেয়ে বড় লজিস্টিকস নেটওয়ার্ক{" "}
          <span style={{ color: "red" }}>৬৪ জেলায় এবং ৪৯৩ থানায়</span>{" "}
        </h1>
      </div>

      <div className="col-md-4 p-0 m-0 ">
      
        <div className="login-part">
          <h6 style={{ color: "white" }}>
            বিনামুল্যে সাইন-আপ করুন মাত্র দুই মিনিটে
          </h6>
          <form action="">
            <div className="signUp-form-field">
              <picture class="flag">
                <source
                  media="(width: 86px, height: 50px)"
                  srcset="https://redx.com.bd/images/bangladesh-flag.png"
                />
                <img src="https://redx.com.bd/images/bangladesh-flag.png"></img>
              </picture>
              <span class="ext m-1">+880</span>
              <input
                name="phone"
                type="number"
                placeholder="ফোন নাম্বার"
                value=""
              />
            </div>
            <button class="signupBtn" type="submit">
              সাইন-আপ
            </button>
          </form>
          <div class="or-section">
            <span>
              <p style={{ color: "white" }}>অথবা,</p>
            </span>
          </div>
          <h6 style={{ color: "white" }}>ট্রাক মুভমেন্ট স্ট্যাটাস</h6>
          <div>
            <span>
              <input
                class="track-input"
                placeholder="ট্রাকিং আইডি দিন"
                type="text"
              />
            </span>
            <span>
              <button class="track-button" type="button">
                ট্রাক
              </button>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdNSignUp;
