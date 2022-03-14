import React from "react";
import { Link } from "react-router-dom";
import MerchanHeader from "../MerchanHeader";
import "./CreateParcel.css";

const CreateParcel = () => {
  return (
    <div>
      <MerchanHeader></MerchanHeader>
      <div className="container">
      <div className=" row w-100  m-0">
        <div className="col-md-8 p-4">
          <h3>নতুন পার্সেল তৈরি করুন</h3>
          <hr class="w-25" />
          <p class="p-3 border bg-light">
            দুপুর ৩ টার পর দেয়া পার্সেল রিকোয়েস্ট পরদিন পিক হবে
          </p>
        </div>

        <div className="col-md-4"></div>
      </div>
      <div className="row  mt-4 w-100 m-0">
        <ul class="nav nav-pills mb-4 p-3" id="pills-tab" role="tablist">
          <li class="nav-item " role="presentation">
            <button
              class="nav-link active btn "
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              সিঙ্গেল পার্সেল অ্যাড করুন
            </button>
          </li>
          <li class="nav-item mx-2" role="presentation">
            <button
              class="nav-link btn "
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              একাধিক আপলোড
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link btn "
              id="pills-import-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-import"
              type="button"
              role="tab"
              aria-controls="pills-import"
              aria-selected="false"
            >
              শপআপ ইমপোর্ট
            </button>
          </li>
        </ul>

        <div class="tab-content fullDiv" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="row  ">
              <div className="col-md-8 p-3">
                <h4>কাস্টমার ইনফর্মেশন</h4>

                <div class="row g-2 my-4 w-100">
                  <div class="col-md">
                    <div class="form-floating ">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInputGrid"
                        placeholder="name"
                      />
                      <label for="floatingInputGrid">নাম </label>
                    </div>
                  </div>
                  <div class="col-md">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInputGrid"
                        placeholder="name@example.com"
                        value=""
                      />
                      <label for="floatingInputGrid">Shop invoice ID</label>
                    </div>
                  </div>
                  <div class="col-md">
                    <div class="form-floating">
                      <input
                        type="number"
                        class="form-control"
                        id="floatingInputGrid"
                        placeholder="name@example.com"
                        value=""
                      />
                      <label for="floatingInputGrid">ফোন নাম্বার </label>
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="form-floating ">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInputGrid"
                        placeholder="name"
                      />
                      <label for="floatingInputGrid">ঠিকানা </label>
                    </div>
                  </div>
                </div>

                <h4>ডেলিভারি ইনফর্মেশন</h4>
                <div class="row g-2 my-4 w-100">
                  <div class="col-md-6">
                    <div class="form-floating ">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInputGrid"
                        placeholder="name"
                      />
                      <label for="floatingInputGrid">পার্সেলের ওজন </label>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-floating">
                      <select
                        class="form-select"
                        id="floatingSelectGrid"
                        aria-label="Floating label select example"
                      >
                        <option selected> select </option>
                        <option>ঢাকা </option>
                        <option>কুমিল্লা </option>
                        <option>দিনাজপুর </option>
                        <option>রাজশাহী </option>
                      </select>
                      <label for="floatingSelectGrid">ডেলিভারি এলাকা </label>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-floating ">
                      <input
                        type="number"
                        class="form-control"
                        id="floatingInputGrid"
                        placeholder="name"
                      />
                      <label for="floatingInputGrid">
                        ক্যাশ কালেকশন অ্যামাউন্ট
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating ">
                      <input
                        type="number"
                        class="form-control"
                        id="floatingInputGrid"
                        placeholder="name"
                      />
                      <label for="floatingInputGrid">
                        পণ্যের বিক্রয় মূল্য
                      </label>
                    </div>
                  </div>

                  <div class="col-md-6 border d-flex">
                    <div class="p-2">
                      <input type="checkbox" class="m-2 " id="" value="" />
                      <label for="">Fragile </label>
                    </div>
                    <div class="p-2">
                      <input type="checkbox" class="m-2 " id="" value="" />
                      <label for="">Liquid </label>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-floating">
                      <select
                        class="form-select"
                        id="floatingSelectGrid"
                        aria-label="Floating label select example"
                      >
                        <option selected> select </option>
                        <option>1 </option>
                        <option>2 </option>
                        <option>3 </option>
                        <option>4 </option>
                        <option>5 </option>
                      </select>
                      <label for="floatingSelectGrid">
                        প্রোডাক্ট ক্যাটাগরি
                      </label>
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="form-group ">
                      <label for="exampleFormControlTextarea3">
                        অতিরিক্ত নির্দেশনা (যেমন পার্সেল ডিটেলস, ডেলিভারি
                        ইত্যাদি)
                      </label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea3"
                        rows="4"
                      ></textarea>
                    </div>

                    <div class="p-3">
                      <input
                        type="checkbox"
                        class="m-1 "
                        id="product"
                        value=""
                      />
                      <label for="product">
                        <small>
                          দয়া করে আপনার পণ্যটির বিক্রয় মূল্য উল্লেখ করুন।
                          আপনার পার্সেলটি হারিয়ে গেলে বা ক্ষতিগ্রস্থ হলে এর
                          ভিত্তিতে ক্ষতিপূরণের পরিমাণ নির্ধারণ করা হবে।
                        </small>{" "}
                      </label>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-between px-5">
                  <button class="btn btn-danger px-5" type="submit">
                    Cancel
                  </button>
                  <a href="/invoice" class="btn btn-danger px-5" >
                    Submit
                  </a>
                </div>
              </div>
              

              <div className="col-md-4 bg-light p-4 ">
                <h4>Parcel Carry</h4>
                <p>আপনার পিকআপ এড্রেস:</p>
                <p>Kadamtali, Keraniganj, Dhaka</p>
                <hr class="w-100" />
                <h4>আপনার পিকআপ এড্রেস থেকে ডেলিভারি চার্জ</h4>
                <p>ক্যাশ কালেকশন : 00 TK</p>
                <p>ডেলিভারি চার্জ : 00 TK </p>
                <p>সিওডি চার্জ : 00 TK</p>
                <hr class="w-100" />
                <h4>সর্বমোট পরিমান: 00 TK</h4>
              </div>
            </div>
          </div>

          {/* paid amount part */}

          <div
            class="tab-pane fade halfDiv"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="row justify-content-center ">
              <div className="col-md-8 p-4">
                <div className="row p-3">
                  <div className="col-md-6">
                    <h5>আমাদের আপলোড প্রসেস দেখুন</h5>
                    <p>
                      আপনার আপলোড প্রসেস সহজ করার জন্য, আপলোড প্রসেসে কিছু
                      পরিবর্তন আনা হয়েছে
                    </p>
                    <p class="text-danger"> Download our sample file</p>
                    <p class="text-warning">
                      {" "}
                      আরও তথ্য জানার জন্য টিউটোরিয়াল দেখে নিন
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img
                      class="w-100"
                      src="https://mybangla24.com/static/img/blog/courier-services-bangladesh.webp"
                      alt=""
                    />
                  </div>
                </div>
                <h4>আপনার এক্সেল ফাইল আপলোড করুন</h4>

                <form method="post" action="#" id="#">
                  <div class="form-group files color">
                    <label>Upload Your File </label>
                    <input type="file" class="form-control" multiple="" />
                  </div>
                </form>
                
                <div class="d-flex justify-content-between py-5 px-5">
                  <button class="btn btn-danger px-5" type="submit">
                    Cancel
                  </button>
                  <button class="btn btn-danger px-5" type="submit">
                    Next
                  </button>
                </div>
              </div>

              <div className="col-md-4 bg-light p-4 ">
                <h4>Parcel Carry</h4>
                <p>আপনার পিকআপ এড্রেস:</p>
                <p>Kadamtali, Keraniganj, Dhaka</p>
                <hr class="w-100" />
                <h4>আপনার পিকআপ এড্রেস থেকে ডেলিভারি চার্জ</h4>
                <p>ক্যাশ কালেকশন : 00 TK</p>
                <p>ডেলিভারি চার্জ : 00 TK </p>
                <p>সিওডি চার্জ : 00 TK</p>
                <hr class="w-100" />
                <h4>সর্বমোট পরিমান: 00 TK</h4>
              </div>
            </div>
          </div>

          <div
            class="tab-pane fade halfDiv"
            id="pills-import"
            role="tabpanel"
            aria-labelledby="pills-import-tab"
          >
            <div className="row justify-content-center ">
              <div className="col-md-8 border App">
                <img
                  class="w-25 m-3 "
                  src="https://redx.com.bd/images/noimport.png"
                  alt=""
                />
                <h4>কোন অর্ডার নেই</h4>
                <p>শপআপ স্টোর থেকে বর্তমানে কোনো অর্ডার নেই।</p>
                <button class="signupBtn w-50" type="submit">
                  Create single parcel
                </button>
                
              </div>

              <div className="col-md-4 bg-light p-4 ">
                <h4>Parcel Carry</h4>
                <p>আপনার পিকআপ এড্রেস:</p>
                <p>Kadamtali, Keraniganj, Dhaka</p>
                <hr class="w-100" />
                <h4>আপনার পিকআপ এড্রেস থেকে ডেলিভারি চার্জ</h4>
                <p>ক্যাশ কালেকশন : 00 TK</p>
                <p>ডেলিভারি চার্জ : 00 TK </p>
                <p>সিওডি চার্জ : 00 TK</p>
                <hr class="w-100" />
                <h4>সর্বমোট পরিমান: 00 TK</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CreateParcel;
