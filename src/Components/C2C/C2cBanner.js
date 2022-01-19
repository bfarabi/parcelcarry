import React from "react";

const C2cBanner = () => {
  return (
    <div className="w-100">
      <div className="row banner-bg m-0 p-0">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <h1 style={{ fontWeight: "bold", padding: "2rem", color: "white" }}>
            আপনার কুরিয়ার ডেলিভারি হবে সর্বাধিক নিরাপত্তার সাথে
          </h1>
          <button type="submit" class="btn btn-danger ms-5">
            শপ লোকেশন দেখুন <i class="bi bi-chevron-right"></i>{" "}
          </button>
        </div>
      </div>

      {/* tracking searching area  */}

      <div className="row w-100 bg-dark m-0 p-0">
        <div className="col-md-6">
          <p className="text-white fw-bold pt-5 text-center">
            আমাদের অনলাইন ট্র্যাকিং সার্ভিস দিয়ে কুরিয়ার ট্র্যাক করুন
          </p>
        </div>

        <div className="col-md-6">
          <div className="p-5">
            <span>
              <input class="track-input" placeholder="আইডি দিন" type="text" />
            </span>
            <span>
              <button class="track-button" type="button">
                ট্রাক
              </button>
            </span>
          </div>
        </div>
      </div>

      {/* C2C service area */}

      <div className="row App p-5 w-100 m-0">
        <div className="col-md-3">
          <img
            class=""
            src="https://redx.com.bd/images/c2c/safety-first.svg"
            alt=""
          />
          <h5 class="fw-bold">নিরাপত্তাই প্রথম</h5>
          <p>আমাদের সেফটি প্রোটোকল নিশ্চিত করে আপনার সুরক্ষা</p>
        </div>
        <div className="col-md-3">
          <img
            class=""
            src="https://redx.com.bd/images/c2c/safety-first.svg"
            alt=""
          />
          <h5 class="fw-bold">নিরাপত্তাই প্রথম</h5>
          <p>আমাদের সেফটি প্রোটোকল নিশ্চিত করে আপনার সুরক্ষা</p>
        </div>
        <div className="col-md-3">
          <img
            class=""
            src="https://redx.com.bd/images/c2c/safety-first.svg"
            alt=""
          />
          <h5 class="fw-bold">নিরাপত্তাই প্রথম</h5>
          <p>আমাদের সেফটি প্রোটোকল নিশ্চিত করে আপনার সুরক্ষা</p>
        </div>
        <div className="col-md-3">
          <img
            class=""
            src="https://redx.com.bd/images/c2c/safety-first.svg"
            alt=""
          />
          <h5 class="fw-bold">নিরাপত্তাই প্রথম</h5>
          <p>আমাদের সেফটি প্রোটোকল নিশ্চিত করে আপনার সুরক্ষা</p>
        </div>
      </div>
    </div>
  );
};

export default C2cBanner;
