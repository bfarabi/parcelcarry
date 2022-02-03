import React from "react";
import MerchanHeader from "../MerchanHeader";
import SinglePayment from "./SinglePayment";

const Payments = () => {
  return (
    <div>
      <MerchanHeader></MerchanHeader>
      <div className="row w-100">
        <div className="col-md-4 p-3">
          <h4>Payments Summary</h4>
          <hr class="w-50" />
        </div>
        <div className="col-md-8">
          <div class="row g-3 my-2 w-100">
            <div class="col-md">
              <div class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInputGrid"
                  placeholder="name@example.com"
                  value=""
                />
                <label for="floatingInputGrid">invoice No</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating">
                <input
                  type="date"
                  class="form-control"
                  id="floatingInputGrid"
                  placeholder="Tracking ID"
                />
                <label for="floatingInputGrid">Date from</label>
              </div>
            </div>

            <div class="col-md">
              <div class="form-floating">
                <input
                  type="date"
                  class="form-control"
                  id="floatingInputGrid"
                  placeholder="name@example.com"
                  value=""
                />
                <label for="floatingInputGrid">Date To</label>
              </div>
            </div>

            <div class="col-md">
              <div class="form-floating">
                <button type="submit" class="btn btn-danger p-3">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row App mt-4 m-0 w-100">
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
              Disbursed Amount
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
              Paid amount
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
            <div className="row justify-content-center table-responsive-md ">
              
                <table class="table table-bordered">
                  <tbody>
                    <tr className="App align-middle bg-light ">
                      <td>Invoice ID</td>
                      <td>Invoice date </td>
                      <td>Cash Collection (Tk.)</td>
                      <td>Delivery Charge (Tk.)</td>
                      <td>Credits Used (Tk.)</td>
                      <td>Total Adjustment Amount (Tk.)</td>
                      <td>Total Adjustment Amount (Tk.)</td>
                      <td>Download</td>
                    </tr>
                  
                  <SinglePayment></SinglePayment>
                  <SinglePayment></SinglePayment>
                  <SinglePayment></SinglePayment>
                  <SinglePayment></SinglePayment>
                  <SinglePayment></SinglePayment>
                  <SinglePayment></SinglePayment>
                  </tbody>
                </table>
                
              
            </div>
          </div>

          {/* paid amount part */}

          <div
            class="tab-pane fade halfDiv"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="row justify-content-center table-responsive-md ">
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

export default Payments;
