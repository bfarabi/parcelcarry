import React from "react";
import MerchanHeader from "./../MerchanHeader";

const AddShop = () => {
  return (
    <>
      <MerchanHeader />

      <div className="container">
        <div className="container-fluid">
          <div className="card-body  ">
            <div class="row g-2">
              <h4>Add My Shop</h4>
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInputGrid "
                    placeholder="name@example.com"
                    value="Payra Soft"
                  />
                  <label for="floatingInputGrid">Shop Name</label>
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
                  <label for="floatingInputGrid">Merchant Name</label>
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
                  
                </div>
              </div>

              <div className="col-md-6 mt-0">
                <label className="mb-0" htmlFor="bank_account_name">
                  Bank Account Name
                </label>
                <input
                  type="text"
                  name="bank_account_name"
                  id="bank_account_name"
                  className="form-control mt-0"
                  placeholder="Bank Account Name"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="bank_account_no">Bank Account Number</label>
                <input
                  type="text"
                  name="bank_account_no"
                  id="bank_account_no"
                  className="form-control"
                  placeholder="Bank Account Number"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="bank_account_no">Bank Name</label>
                <input
                  type="text"
                  name="bank_account_no"
                  id="bank_account_no"
                  className="form-control"
                  placeholder="Bank Name"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="bank_account_no">Bkash Number</label>
                <input
                  type="text"
                  name="bank_account_no"
                  id="bank_account_no"
                  className="form-control"
                  placeholder="Bkash Number"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="bank_account_no">Rocket Number</label>
                <input
                  type="text"
                  name="bank_account_no"
                  id="bank_account_no"
                  className="form-control"
                  placeholder=" Number"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="bank_account_no">Nagad Number</label>
                <input
                  type="text"
                  name="bank_account_no"
                  id="bank_account_no"
                  className="form-control"
                  placeholder=" Number"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="nid_card"> NID Card</label>
                <input
                  type="file"
                  name="nid_card"
                  id="nid_card"
                  className="form-control"
                  accept="image/*"
                  onchange="return filePreview(this, 'preview_file_nid_card')"
                />
                <div id="preview_file_nid_card" style={{ marginTop: 10 }}></div>
              </div>

              <div className="col-md-4">
                <label htmlFor="trade_license">Trade License</label>
                <input
                  type="file"
                  name="trade_license"
                  id="trade_license"
                  className="form-control"
                  accept="image/*"
                  onchange="return filePreview(this, 'preview_file_trade_license')"
                />
                <div
                  id="preview_file_trade_license"
                  style={{ marginTop: 10 }}
                ></div>
              </div>
              <div className="col-md-4">
                <label htmlFor="trade_license">TIN Certificate</label>
                <input
                  type="file"
                  name="trade_license"
                  id="trade_license"
                  className="form-control"
                  accept="image/*"
                  onchange="return filePreview(this, 'preview_file_trade_license')"
                />
                <div
                  id="preview_file_trade_license"
                  style={{ marginTop: 10 }}
                ></div>
              </div>
              
              <div className="text-center ">
                <button type="submit" className="btn btn-danger fw-bold">
                শপ যুক্ত করুন
                </button>
                
              </div>
            </div>
          </div>

          {/* /.container-fluid */}
        </div>
      </div>
    </>
  );
};

export default AddShop;
