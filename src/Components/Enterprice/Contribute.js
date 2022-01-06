import React from "react";

const Contribute = () => {
  return (
    <>
      <div class="row m-2">
        <div className="col-md-6">
          <h1 style={{ fontWeight: "bold", padding: "2rem" }}>
            গ্লোবাল ফুটওয়্যার ব্র্যান্ড ব্যবসায়িক প্রসারে আমাদের অবদান
          </h1>
          <p>
            প্রধান ডিস্ট্রিবিউশন হাব থেকে দেশব্যাপী ফ্র্যাঞ্চাইজি ও আউটলেটে পণ্য
            ডেলিভারি করে থাকে পার্সেল ক্যারি।
          </p>
          <div class="d-flex p-3 m-3 mx-5">
            <p> ৮০+ ফ্র্যাঞ্চাইজি ও আউটলেটে পণ্য পৌঁছায় পার্সেল ক্যারি</p>
            <p> ৮০+ ফ্র্যাঞ্চাইজি ও আউটলেটে পণ্য পৌঁছায় পার্সেল ক্যারি</p>
          </div>
        </div>

        <div className="col-md-6">
          <img
            class="w-100"
            src="https://redx.com.bd/images/revamp/BataShow.webp"
            alt=""
          />
        </div>
      </div>

      {/* transport area  */}

      <div className="row my-5">
        <h1 className=" my-4" style={{ fontWeight: "bold", padding: "2rem" }}>
          আপনার লক্ষ্যে পৌঁছাতে আমাদের রয়েছে বিভিন্ন সাইজের ট্রান্সপোর্ট ভেহিকেল
        </h1>

        <ul
          class="nav nav-pills mb-4 d-flex justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active "
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Open
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Covered
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="row">
              <div className="col-md-4">
                <div className="single-div border m-2">
                  <img class="my-3"
                    src="https://redx.com.bd/images/revamp/vehicle/9-feet-open-pickup.png"
                    alt=""
                  />
                  <h6>১৪ ফিট খোলা ট্রাক</h6>
                  <p>৮ টন ধারণ সম্পন্ন</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-div border m-2">
                  <img class="my-3"
                    src="https://redx.com.bd/images/revamp/vehicle/9-feet-open-pickup.png"
                    alt=""
                  />
                  <h6>১৪ ফিট খোলা ট্রাক</h6>
                  <p>৮ টন ধারণ সম্পন্ন</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-div border m-2">
                  <img class="my-3"
                    src="https://redx.com.bd/images/revamp/vehicle/9-feet-open-pickup.png"
                    alt=""
                  />
                  <h6>১৪ ফিট খোলা ট্রাক</h6>
                  <p>৮ টন ধারণ সম্পন্ন</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="row">
              <div className="col-md-4">
                <div className="single-div border m-2">
                  <img class="my-3"
                    src="https://redx.com.bd/images/revamp/vehicle/9-feet-open-pickup.png"
                    alt=""
                  />
                  <h6>১৪ ফিট খোলা ট্রাক</h6>
                  <p>৮ টন ধারণ সম্পন্ন</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-div border m-2">
                  <img class="my-3"
                    src="https://redx.com.bd/images/revamp/vehicle/9-feet-open-pickup.png"
                    alt=""
                  />
                  <h6>১৪ ফিট খোলা ট্রাক</h6>
                  <p>৮ টন ধারণ সম্পন্ন</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-div border m-2">
                  <img class="my-3"
                    src="https://redx.com.bd/images/revamp/vehicle/9-feet-open-pickup.png"
                    alt=""
                  />
                  <h6>১৪ ফিট খোলা ট্রাক</h6>
                  <p>৮ টন ধারণ সম্পন্ন</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contribute;
