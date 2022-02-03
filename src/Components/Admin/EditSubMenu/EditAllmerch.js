import React from "react";
import AdminHeader from "../AdminHeader";
import AdminMenu from "../AdminMenu";

const EditAllmerch = () => {
  return (
    <div class="wrapper">
      <AdminHeader></AdminHeader>
      <AdminMenu></AdminMenu>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="card-body  ">
              <div class="row g-2">
                <h4>Edit All Merchant</h4>
                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInputGrid "
                      placeholder="name@example.com"
                      value="Payra Soft"
                    />
                    <label for="floatingInputGrid">Company Name</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInputGrid "
                      placeholder="name@example.com"
                      value="Payra"
                    />
                    <label for="floatingInputGrid"> Name</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInputGrid "
                      placeholder="name@example.com"
                      value="Dhaka"
                    />
                    <label for="floatingInputGrid"> Full Address</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInputGrid "
                      placeholder="name@example.com"
                      value="Dhaka"
                    />
                    <label for="floatingInputGrid"> Business Address</label>
                  </div>
                </div>
                <div class="col-md-4">
                  <select
                    class="form-select form-select-md"
                    aria-label=".form-select-md example"
                  >
                    <option selected>District</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <select
                    class="form-select form-select-md"
                    aria-label=".form-select-md example"
                  >
                    <option selected>thana/Upazila</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <select
                    class="form-select form-select-md"
                    aria-label=".form-select-md example"
                  >
                    <option selected>Area</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <select
                    class="form-select form-select-md"
                    aria-label=".form-select-md example"
                  >
                    <option selected>Main Branch</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInputGrid"
                      placeholder="name@example.com"
                      value="+01836288648"
                    />
                    <label for="floatingInputGrid">Contact No</label>
                  </div>
                </div>

                <div class="col-md-6 mt-0">
                  <label for="basic-url" className="mb-0">
                    Facebook{" "}
                  </label>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      http://
                    </span>
                    <input
                      type="text"
                      id="basic-url"
                      class="form-control"
                      placeholder="Facebook url"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div class="col-md-6 mt-0">
                  <label for="basic-url" className="mb-0">
                    Website{" "}
                  </label>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      http://
                    </span>
                    <input
                      type="text"
                      id="basic-url"
                      class="form-control"
                      placeholder="Website url"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div class="col-md-6 mt-0">
                <label for="basic-url" className="mb-0">
                    Image
                  </label> 
                  <div class="input-group">
                  
                    <input
                      type="file"
                      class="form-control"
                      id="inputGroupFile04"
                      aria-describedby="inputGroupFileAddon04"
                      aria-label="Upload"
                    />
                    <button
                      class="btn btn-primary"
                      type="button"
                      id="inputGroupFileAddon04"
                    >
                      Button
                    </button>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInputGrid"
                      placeholder="name@example.com"
                      value="name@example.com"
                    />
                    <label for="floatingInputGrid">Email</label>
                  </div>
                </div>

                <div className="text-center ">
                  <button type="submit" className="btn btn-success fw-bold">
                    Update
                  </button>
                  <button type="reset" className="btn btn-warning ms-1">
                    Reset
                  </button>
                </div>
              </div>
            </div>

            {/* /.container-fluid */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAllmerch;
