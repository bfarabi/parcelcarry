import React from "react";
import MerchanHeader from "../MerchanHeader";
import "./Faq.css";

const FAQ = () => {
  return (
    <div>
      <MerchanHeader />
      <div className="container py-5">
      <div className="row ">
        <div className="col-md-4 ">
          <h2>আমাদের জিজ্ঞাসিত প্রশ্ন পড়ুন</h2>
          <div class="pt-1 ">
            <h5>সাধারণ</h5>
            <p>আপনার সাধারণ প্রশ্নগুলি</p>
          </div>
          <div class="pt-1 ">
            <h5>সাধারণ</h5>
            <p>আপনার সাধারণ প্রশ্নগুলি</p>
          </div>
          <div class="pt-1 ">
            <h5>সাধারণ</h5>
            <p>আপনার সাধারণ প্রশ্নগুলি</p>
          </div>
        </div>

        <div className="col-md-8 py-2">
        <h2 className="py-3 px-4">ছোট ব্যবসা</h2>
          
        <div className="col-lg ">
          <div class="mx-4">
            <div class="accordion" id="myAccordion">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    type="button"
                    class="accordion-button collapsed fw-bold"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    1. আপনাদের লজিস্টিকস চার্জ সম্পর্কে জানতে চাই?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#myAccordion"
                >
                  <div class="card-body">
                    <p>
                      যে কোন ব্যবসা বা ব্যক্তিগত প্রয়োজনে ডেলিভারি সংক্রান্ত
                      সেবা প্রদানের একটি পূর্ণাঙ্গ প্ল্যাটফর্ম পার্সেল ক্যারি। পার্সেল
                      ডেলিভারি, বাল্ক শিপমেন্ট, লাইন হল, ট্রাক ভাড়া,
                      লোডিং-আনলোডিং, ওয়্যারহাউজ, সার্ভিস হিসেবে লজিস্টিকস
                      সল্যুশন এবং প্রয়োজন অনুযায়ী কাস্টমাইজড সল্যুশনও দিয়ে থাকে
                      পার্সেল ক্যারি।.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    type="button"
                    class="accordion-button collapsed fw-bold"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOneone"
                  >
                    2. আপনাদের লজিস্টিকস চার্জ সম্পর্কে জানতে চাই?
                  </button>
                </h2>
                <div
                  id="collapseOneone"
                  class="accordion-collapse collapse"
                  data-bs-parent="#myAccordion"
                >
                  <div class="card-body">
                    <p>
                      যে কোন ব্যবসা বা ব্যক্তিগত প্রয়োজনে ডেলিভারি সংক্রান্ত
                      সেবা প্রদানের একটি পূর্ণাঙ্গ প্ল্যাটফর্ম পার্সেল ক্যারি। পার্সেল
                      ডেলিভারি, বাল্ক শিপমেন্ট, লাইন হল, ট্রাক ভাড়া,
                      লোডিং-আনলোডিং, ওয়্যারহাউজ, সার্ভিস হিসেবে লজিস্টিকস
                      সল্যুশন এবং প্রয়োজন অনুযায়ী কাস্টমাইজড সল্যুশনও দিয়ে থাকে
                      পার্সেল ক্যারি।.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    type="button"
                    class="accordion-button fw-bold"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                  >
                    3. আপনাদের লজিস্টিকস চার্জ সম্পর্কে জানতে চাই?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#myAccordion"
                >
                  <div class="card-body">
                    <p>
                      যে কোন ব্যবসা বা ব্যক্তিগত প্রয়োজনে ডেলিভারি সংক্রান্ত
                      সেবা প্রদানের একটি পূর্ণাঙ্গ প্ল্যাটফর্ম পার্সেল ক্যারি। পার্সেল
                      ডেলিভারি, বাল্ক শিপমেন্ট, লাইন হল, ট্রাক ভাড়া,
                      লোডিং-আনলোডিং, ওয়্যারহাউজ, সার্ভিস হিসেবে লজিস্টিকস
                      সল্যুশন এবং প্রয়োজন অনুযায়ী কাস্টমাইজড সল্যুশনও দিয়ে থাকে
                      পার্সেল ক্যারি।.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    type="button"
                    class="accordion-button collapsed fw-bold"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                  >
                    4. আপনাদের লজিস্টিকস চার্জ সম্পর্কে জানতে চাই?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#myAccordion"
                >
                  <div class="card-body">
                    <p>
                      যে কোন ব্যবসা বা ব্যক্তিগত প্রয়োজনে ডেলিভারি সংক্রান্ত
                      সেবা প্রদানের একটি পূর্ণাঙ্গ প্ল্যাটফর্ম পার্সেল ক্যারি। পার্সেল
                      ডেলিভারি, বাল্ক শিপমেন্ট, লাইন হল, ট্রাক ভাড়া,
                      লোডিং-আনলোডিং, ওয়্যারহাউজ, সার্ভিস হিসেবে লজিস্টিকস
                      সল্যুশন এবং প্রয়োজন অনুযায়ী কাস্টমাইজড সল্যুশনও দিয়ে থাকে
                      পার্সেল ক্যারি।.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         
        </div>
      </div>
      </div>
    </div>
  );
};

export default FAQ;
