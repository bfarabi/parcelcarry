import React from "react";
import "./News.css";
import SingleNews from "./SingleNews";

const News = () => {
  return (
    <>
      <div className="container">
      <div class="row mx-4 partner-bg">
        <div className="col-lg-6 p-5 text-white ">
          <h1>পার্সেল ক্যারির পার্টনার হোন আজই</h1>
          <h6>সাইন-আপ করুন করুন মাত্র দুই মিনিটে</h6>
        </div>
        <div className="col-lg-6 p-5">
          <button class="signupBtn" type="submit">
            সাইন আপ করুন
          </button>
        </div>
      </div>
      </div>
      <div className="container my-5">
      <div className="row">
      <h1 class="m-5">মিডিয়াতে পার্সেল ক্যারি</h1>
      </div>
      <div className="row mx-5 d-flex justify-content-center">
      <SingleNews></SingleNews>
      <SingleNews></SingleNews>
      <SingleNews></SingleNews>
      <SingleNews></SingleNews>
      <SingleNews></SingleNews>
      <SingleNews></SingleNews>
        
      </div>
      </div>
    </>
  );
};

export default News;
