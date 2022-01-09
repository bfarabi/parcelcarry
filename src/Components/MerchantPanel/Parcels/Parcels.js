import React from "react";
import MerchanHeader from "./../MerchanHeader";
import SingleParcel from './SingleParcel';

const Parcels = () => {
  return (
    <div >
      <MerchanHeader></MerchanHeader>
      <div className=" p-3 w-100">
        <h3>Search by</h3>

        <div class="row g-3 my-2 w-100">
          <div class="col-md">
            <div class="form-floating">
              <select
                class="form-select"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
              >
                <option selected>All pickup location</option>
                <option>ঢাকা </option>
                <option>কুমিল্লা </option>
                <option>দিনাজপুর </option>
                <option>রাজশাহী </option>
              </select>
              <label for="floatingSelectGrid">select</label>
            </div>
          </div>

          <div class="col-md">
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInputGrid"
                placeholder="Tracking ID"
              />
              <label for="floatingInputGrid">Tracking ID</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating">
              <input
                type="email"
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
                type="email"
                class="form-control"
                id="floatingInputGrid"
                placeholder="name@example.com"
                value=""
              />
              <label for="floatingInputGrid">Phone number</label>
            </div>
          </div>
        </div>
        
        <div class="row g-3 my-2 w-100">
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
              <select
                class="form-select"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
              >
                <option selected>Date filter Type</option>
                <option>ঢাকা </option>
                <option>কুমিল্লা </option>
                <option>দিনাজপুর </option>
                <option>রাজশাহী </option>
              </select>
              <label for="floatingSelectGrid">select</label>
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

      <div className="row p-2 w-100">
        <div className="col-md-6">
          <h5>আপনার সব অর্ডার</h5>
          <hr class="w-50" />
          <small>Total parcels : 3246</small>
        </div>
        <div className="col-md-6">
          <p>
            <span class="text-danger">
              {" "}
              <i class="bi bi-printer"></i> Print level{" "}
              <i class="bi bi-download"></i> download parcel history
            </span>
          </p>
          <hr class="w-50" />
          {/* pagination */}
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a
                  class="page-link"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="row justify-content-center table-responsive-md ">
        
        <table class="table table-hover ">
            
            <tbody>
              <tr className="App bg-light " >
                <td><input className="form-check-input mx-2 p-2" type="checkbox" name="checkbox" id="" /></td>
                <td>Create date</td>
                <td>Pick up name </td>
                <td>ID</td>
                <td>Shop</td>
                <td>Customers Details</td>
                <td>Status</td>
                <td>Actions</td>
              </tr>
              
            </tbody>
          
        <SingleParcel></SingleParcel>
        <SingleParcel></SingleParcel>
        <SingleParcel></SingleParcel>
        <SingleParcel></SingleParcel>
        <SingleParcel></SingleParcel>
        </table>
        
      </div>
    </div>
  );
};

export default Parcels;
