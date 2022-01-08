import React from "react";
import MerchanHeader from "../MerchanHeader";

const CreateParcel = () => {
  return (
    <div>
      <MerchanHeader></MerchanHeader>
      <div className="row w-100">
        <div className="col-md-8 p-4">
          <h3>নতুন পার্সেল তৈরি করুন</h3>
          <hr class="w-25" />
          <p class="p-3 border bg-light">
            দুপুর ৩ টার পর দেয়া পার্সেল রিকোয়েস্ট পরদিন পিক হবে
          </p>
        </div>

        <div className="col-md-4"></div>
      </div>
      <div className="row mt-4 w-100">
        <ul
          class="nav nav-pills mb-4 d-flex justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item " role="presentation">
            <button
              class="nav-link active btn btn-outline-danger "
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
              class="nav-link btn btn-outline-danger"
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
              class="nav-link btn btn-outline-danger"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
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
              </div>
              <div className="col-md-4 bg-light"></div>
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
              <div className="fullTable  ">
                <table class="table table-striped">
                  <tbody>
                    <tr className="App ">
                      <td>Create date</td>
                      <td>Pick up name </td>
                      <td>ID</td>
                      <td>Shop</td>
                      <td>Customers Details</td>
                      <td>Status</td>
                      <td>Actions</td>
                    </tr>
                  </tbody>
                </table>

                <table class="table border ">
                  <h1>No data</h1>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateParcel;
