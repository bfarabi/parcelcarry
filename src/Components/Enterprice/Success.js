import React from "react";
import './Enterprice.css';

const Success = () => {
  return (
    <>
      <div className="row w-100 bg-light m-0 p-0">
        <div className="col-md-5">
          <img
            class="m-3 w-75"
            src="https://redx.com.bd/images/revamp/merchant-success-story.png"
            alt=""
          />
        </div>

        <div className="col-md-7 p-5">
          <h1 style={{ fontWeight: "bold", padding: "2rem" }}>
            মার্চেন্টদের সফলতার গল্প
          </h1>
          <h5>আমাদের ডিস্ট্রিবিউশনে পার্সেল ক্যারি গুরুত্বপূর্ণ সহযোগী</h5>
          <p class="p-4">
            লজিস্টিকস এবং ডিস্ট্রিবিউশন ম্যানেজমেন্টে পার্সেল ক্যারি একটি অসম্ভব
            রকমের জনপ্রিয় নাম। বিগত কয়েকমাস ধরে পার্সেল ক্যারির সাথে আমরা কাজ
            করছি। এই স্বল্প সময়ের মধ্যেই র‍্যাংগস ইন্ডাস্ট্রিজ লিমিটেডের পণ্য
            ডিস্ট্রিবিউশন ও ডেলিভারির জন্য পার্সেল ক্যারি আমাদের কাছে সবচেয়ে
            বিশ্বস্ত হয়ে উঠেছে। আশা করি, পার্সেল ক্যারির সাথে এই সম্পর্ক আরও
            দীর্ঘমেয়াদী এবং ব্যবসায়িকভাবে সফল হয়ে উঠবে।
          </p>
          <h5>সালমান এ খান</h5>
        </div>
      </div>

      {/* Contact form area */}

      <div className="row w-100 my-5 ">
        <div className="col-md-8">
          <h1 style={{ fontWeight: "bold", padding: "2rem" }}>
            আমাদের সাথে যোগাযোগ করুন
          </h1>


          <form action="#">
            <div className="row w-100 ">
              <div className="col-md-6">
                <div class=" text-start m-4 ">
                  <label for="exampleFormControlInput1" class="form-label d-block">
                    আপনার নাম
                  </label>
                  <input
                    type="email"
                    class="form-control-lg"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div class=" text-start m-4 ">
                  <label for="exampleFormControlInput1" class="form-label d-block">
                  আপনার ইমেইল লিখুন
                  </label>
                  <input
                    type="email"
                    class="form-control-lg"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div class=" text-start m-4 ">
                  <label for="exampleFormControlInput1" class="form-label d-block">
                  
                  ফোন নাম্বার
                  </label>
                  <input
                    type="email"
                    class="form-control-lg"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div class=" text-start m-4 ">
                  <label for="exampleFormControlInput1" class="form-label d-block">
                    কোম্পানির নাম
                  </label>
                  <input
                    type="email"
                    class="form-control-lg"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>
              

            </div>

            <div class="mb-3 text-start w-75 p-4">
              <label for="exampleFormControlTextarea1" class="form-label">
                আপনার প্রয়োজন সম্পর্কে আমাদের জানান
              </label>
              <textarea
                placeholder="বিস্তারিত লিখুন "
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                required
              ></textarea>
            </div>

            <button type="submit" class="mb-3 btn btn-danger">
              {" "}
              সাবমিট{" "}
            </button>
          </form>
        </div>

        <div className="col-md-4 ">
          <img
            class="driver-img w-75 "
            src="https://redx.com.bd/images/revamp/contact-us-image2.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Success;
