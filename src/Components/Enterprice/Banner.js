import React from 'react';

const Banner = () => {
    return (
        <>
      <div className="col-md-8 p-0 m-0 ad-part ">
        <img
          class="video-tag"
          src="https://redx.com.bd/images/provide-services/line-haul.webp"
          alt=""
        />
        <div class="overlay"></div>
        
        <div className="row position-absolute adtext text-white px-1">
        <h1 class="p-4 ">
        দেশ সেরা <span style={{ color: "red" }}>এন্টারপ্রাইজ</span> লজিস্টিকস পৌঁছাবে আপনার লক্ষ্যে
          
        </h1>
        
        
        <div class="">
        <h5> &#10004; দেশব্যাপী লজিস্টিক্স নেটওয়ার্ক </h5>
        <h5> &#10004; দেশব্যাপী লজিস্টিক্স নেটওয়ার্ক </h5>
        <h5> &#10004; দেশব্যাপী লজিস্টিক্স নেটওয়ার্ক </h5>
        <h5>  সরাসরি আমাদের সেলস টিম কে কল করুনঃ <i class="bi bi-telephone-fill text-danger"> +8801320-990096 </i> </h5>
        </div>
        </div>
        
      </div>
      <div className="col-md-4 p-0 m-0 App">
      <div className=" login-part ">
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
            <span class="ext">+880</span>
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
            <input class="track-input" placeholder='ট্রাকিং আইডি দিন' type="text" />
          </span>
          <span>
            <button class="track-button" type="button">
            ট্রাক
            </button>
          </span>
        </div>
        </div>

      </div>
    </>
    );
};

export default Banner;