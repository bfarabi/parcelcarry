import React from 'react';
import { Link } from "react-router-dom";
import AdminFooter from "../AdminFooter";
import AdminHeader from "../AdminHeader";
import AdminMenu from "../AdminMenu";


const EditParcel = () => {
    return (
        <div class="wrapper">
      <AdminHeader></AdminHeader>
      <AdminMenu></AdminMenu>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="card-body  ">
              <div class="row g-2">
                <h4>Edit Parcel</h4>
                
                
                <div class="row g-2 my-4 w-100">
                  <div class="col-md">
                    <div class="form-floating ">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInputGrid"
                        placeholder=""
                        value="Bill gates"
                      />
                      <label for="floatingInputGrid">Name </label>
                    </div>
                  </div>
                  <div class="col-md">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInputGrid"
                        placeholder="name@example.com"
                        value="4321"
                      />
                      <label for="floatingInputGrid">Shop Invoice ID</label>
                    </div>
                  </div>
                  <div class="col-md">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInputGrid"
                        placeholder="name@example.com"
                        value="+8801567890543"
                      />
                      <label for="floatingInputGrid">Phone number </label>
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="form-floating ">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInputGrid"
                        placeholder="name"
                        value="Banani, Dhaka"
                      />
                      <label for="floatingInputGrid">Address</label>
                    </div>
                  </div>
                </div>

                <h4> Delivery information</h4>
                <div class="row g-2 my-4 w-100">
                  <div class="col-md-6">
                    <div class="form-floating ">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInputGrid"
                        placeholder="name"
                      />
                      <label for="floatingInputGrid">Parcel weight </label>
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
                      <label for="floatingSelectGrid">Delivery Area </label>
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
                        Cash Collection Amount
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
                        Products sale price
                      </label>
                    </div>
                  </div>

                  <div class="col-md-6 border d-flex bg-white">
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
                        Product Category
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6 py-1">
                <label for="basic-url" className="mb-0">
                    STATUS
                  </label>
                  <select
                    class="form-select form-select-lg "
                    aria-label=".form-select-md example"
                  >
                    
                    <option value="1">Active</option>
                    <option selected value="2">Pending</option>
                    <option value="3">Rejected</option>
                  </select>
                </div>

                  
                </div>

                
                <div className="text-center ">
                  <button type="submit" className="btn btn-success fw-bold">
                    Submit
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
      <AdminFooter></AdminFooter>
    </div>
    );
};

export default EditParcel;