import React from "react";

const Courier = () => {
  return (
    <div>
      <div className="row py-5 justify-content-center align-items-center">
        <div className="col-md-6">
          <img class="w-100"
            src="https://redx.com.bd/images/revamp/homepage-del-boy.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 ">
          <h1 style={{ fontWeight: "bold", padding: "2rem" }}>
            উপভোগ করুন সেরা ডেলিভারী চার্জ
          </h1>
          <p>
            আমরা কুরিয়ার সার্ভিস দিচ্ছি বাংলাদেশ জুড়ে। আকর্ষণীয় রেটে আমারদের
            সার্ভিস নিন
          </p>
        </div>
      </div>

      {/* delivery section */}

      <div className="row bg-dark p-4">
        <h1 style={{ fontWeight: "bold", padding: "2rem", color: "white" }}>
          PARCEL CARRY কুরিয়ার ডেলিভারি দিচ্ছে বাংলাদেশ জুড়ে ৬৪ টি জেলায়
        </h1>
        <p class="text-white m-2">
          নিচের যেকোনো লোকেশন থেকে কুরিয়ার বুক করুন, আমরা পৌঁছে দিবো বাংলাদেশের
          যেকোনো প্রান্তে
        </p>

        <div className="col-lg-6 col-md-6">
          <form>
            <div class="form-group">
              <label for="exampleFormControlSelect1"></label>
              <select class="form-control p-3" id="exampleFormControlSelect1">
                <option selected>জেলা নির্বাচন করুন</option>
                <option>ঢাকা </option>
                <option>কুমিল্লা </option>
                <option>দিনাজপুর </option>
                <option>রাজশাহী </option>
              </select>
            </div>
          </form>
        </div>
        <div className="col-lg-6 col-md-6">
          <form>
            <div class="form-group">
              <label for="exampleFormControlSelect1"></label>
              <select class="form-control p-3" id="exampleFormControlSelect1">
                <option selected> এলাকা নির্বাচন করুন</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </form>
        </div>
        <div className="col-md text-center py-3">
          <button class="track-button" type="button">
            সার্চ করুন
          </button>
        </div>
      </div>

      {/* our Testmonial */}

      <div className="row App my-4 text-center">
        <h1 style={{ fontWeight: "bold", padding: "2rem" }}>
          আমাদের কাস্টমার টেস্টিমনিয়াল
        </h1>
        <div class="row d-flex align-items-center justify-content-center">
          <div className="col-md-3 bg-light p-5 m-2">
            <img src="https://redx.com.bd/images/c2c/qoute.svg" alt="" />
            <p> খুব দ্রুত ডেলিভারি হয়েছে, আমি সার্ভিস নিয়ে সন্তুষ্ট। </p>
            <p class="fw-bold">আনিকা জাহিন</p>
          </div>
          <div className="col-md-3 bg-light p-5 m-2">
            <img src="https://redx.com.bd/images/c2c/qoute.svg" alt="" />
            <p> খুব দ্রুত ডেলিভারি হয়েছে, আমি সার্ভিস নিয়ে সন্তুষ্ট। </p>
            <p class="fw-bold">আনিকা জাহিন</p>
          </div>
          <div className="col-md-3 bg-light p-5 m-2">
            <img src="https://redx.com.bd/images/c2c/qoute.svg" alt="" />
            <p> খুব দ্রুত ডেলিভারি হয়েছে, আমি সার্ভিস নিয়ে সন্তুষ্ট। </p>
            <p class="fw-bold">আনিকা জাহিন</p>
          </div>
        </div>
      </div>

      {/* our delivery charge table */}

      <div className="row App my-5">
        <h1 style={{ fontWeight: "bold", padding: "2rem" }}>
          ডেলিভারি চার্জ দেখুন
        </h1>
        <p>প্রতিটি পার্সেল পাঠাতে কত খরচ হবে দেখে নিন</p>

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
              হোম ডেলিভারি
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
              হাব ডেলিভারি
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
            <div className="row justify-content-center ">
              <div className="fullTable w-75 ">
                <table class="table border ">
                  <thead>
                    <tr>
                      <th scope="col">AREA</th>
                      <th scope="col">DOCUMENT</th>
                      <th scope="col">PACKAGE</th>
                      <th scope="col">ADDITIONAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>শহরের ভিতর</td>
                      <td>Tk.30</td>
                      <td>Tk.60</td>
                      <td>Tk.15</td>
                    </tr>
                    <tr>
                      <td>শহরের ভিতর</td>
                      <td>Tk.30</td>
                      <td>Tk.60</td>
                      <td>Tk.15</td>
                    </tr>
                    <tr>
                      <td>শহরের ভিতর</td>
                      <td>Tk.30</td>
                      <td>Tk.60</td>
                      <td>Tk.15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div
            class="tab-pane fade halfDiv"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="row justify-content-center ">
              <div className="fullTable w-75 ">
                <table class="table border ">
                  <thead>
                    <tr>
                      <th scope="col">AREA</th>
                      <th scope="col">DOCUMENT</th>
                      <th scope="col">PACKAGE</th>
                      <th scope="col">ADDITIONAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>শহরের ভিতর</td>
                      <td>Tk.30</td>
                      <td>Tk.60</td>
                      <td>Tk.15</td>
                    </tr>
                    <tr>
                      <td>শহরের ভিতর</td>
                      <td>Tk.30</td>
                      <td>Tk.60</td>
                      <td>Tk.15</td>
                    </tr>
                    <tr>
                      <td>শহরের ভিতর</td>
                      <td>Tk.30</td>
                      <td>Tk.60</td>
                      <td>Tk.15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courier;
