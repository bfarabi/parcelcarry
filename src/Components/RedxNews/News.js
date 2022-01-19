import React from "react";
import { Link } from "react-router-dom";
import "./News.css";
import SingleNews from "./SingleNews";

const News = () => {
  return (
    <div className="container">
      <div class="row  partner-bg">
        <div className="col-md-6 p-5 text-white ">
          <h1>পার্সেল ক্যারির পার্টনার হোন আজই</h1>
          <h6>সাইন-আপ করুন করুন মাত্র দুই মিনিটে</h6>
        </div>
        <div className="col-md-6 p-5">
          <Link to="login">
            <button class="signupBtn" type="submit">
              সাইন আপ করুন
            </button>
          </Link>
        </div>
      </div>

      <div className="row my-4">
        <h1 class="">মিডিয়াতে পার্সেল ক্যারি</h1>
      </div>
      <div className="row my-3 d-flex justify-content-center">
        <SingleNews></SingleNews>
        <SingleNews></SingleNews>
        <SingleNews></SingleNews>
        <SingleNews></SingleNews>
        <SingleNews></SingleNews>
        <SingleNews></SingleNews>
      </div>
    </div>
  );
};

export default News;
