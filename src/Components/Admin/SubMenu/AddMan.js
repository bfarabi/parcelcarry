import React from 'react';
import AdminFooter from "../AdminFooter";
import AdminHeader from "../AdminHeader";
import AdminMenu from "../AdminMenu";

const AddMan = () => {
    return (
        <div class="wrapper ">
      <AdminHeader></AdminHeader>
      <AdminMenu></AdminMenu>
      <div className="content-wrapper ">
        <div className="content-header px-0">
          <div className="container fluid">
            <h2 className=" text-dark">Add Delivery Man</h2>
            <div className="row bg-white">
              <div className="col-md-12">
                <div className="card card-info">
                  <div
                    className="card-body"
                    data-select2-id={15}
                    style={{ display: "block" }}
                  >
                    <div
                      className="col-md-offset-1 col-md-10 "
                      data-select2-id={14}
                    >
                      <div className="card card-primary" data-select2-id={13}>
                        <form role="form" action="">
                          <div className="card-body" data-select2-id={11}>
                            <div className="form-group">
                              <label htmlFor="name">Name</label>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="Name"
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="address">Full Address</label>
                              <input
                                type="text"
                                name="address"
                                id="address"
                                className="form-control"
                                placeholder="Address"
                                required
                              />
                            </div>

                            <div className="row">
                              <div className="col-md-4 col-sm-12">
                                <div className="form-group">
                                  <label htmlFor="district_id">
                                    {" "}
                                    Districts{" "}
                                  </label>
                                  <select
                                    name="district_id"
                                    id="district_id"
                                    className="form-control select2 select2-hidden-accessible"
                                    style={{ width: "100%" }}
                                    tabIndex={-1}
                                  >
                                    <option value={0}>Select District</option>
                                    <option value={2}>Faridpur</option>
                                    <option value={3}>Gazipur</option>
                                    <option value={4}>Gopalganj</option>
                                    <option value={5}>Kishoreganj</option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--default"
                                    dir="ltr"
                                    data-select2-id={1}
                                    style={{ width: "100%" }}
                                  >
                                    <span
                                      className="dropdown-wrapper"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                              </div>
                              <div
                                className="col-md-4 col-sm-12"
                                data-select2-id={27}
                              >
                                <div
                                  className="form-group"
                                  data-select2-id={26}
                                >
                                  <label htmlFor="upazila_id">
                                    {" "}
                                    Thana/Upazila{" "}
                                  </label>
                                  <select
                                    name="upazila_id"
                                    id="upazila_id"
                                    className="form-control select2 select2-hidden-accessible"
                                    style={{ width: "100%" }}
                                    data-select2-id="upazila_id"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                  >
                                    <option value={0} data-select2-id={4}>
                                      Select Thana/Upazila
                                    </option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--default select2-container--below"
                                    dir="ltr"
                                    data-select2-id={3}
                                    style={{ width: "100%" }}
                                  >
                                    <span
                                      className="dropdown-wrapper"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                              </div>
                              <div
                                className="col-md-4 col-sm-12"
                                data-select2-id={9}
                              >
                                <div className="form-group" data-select2-id={8}>
                                  <label htmlFor="area_id"> Area </label>
                                  <select
                                    name="area_id"
                                    id="area_id"
                                    className="form-control select2 select2-hidden-accessible"
                                    style={{ width: "100%" }}
                                    data-select2-id="area_id"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                  >
                                    <option value={0} data-select2-id={6}>
                                      Select Area
                                    </option>
                                  </select>
                                  <span
                                    className="select2 select2-container select2-container--default select2-container--below"
                                    dir="ltr"
                                    data-select2-id={5}
                                    style={{ width: "100%" }}
                                  >
                                    <span
                                      className="dropdown-wrapper"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="form-group">
                              <label htmlFor="contact_number">
                                {" "}
                                Contact Number{" "}
                              </label>
                              <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                  <div className="input-group-text">+88</div>
                                </div>
                                <input
                                  type="text"
                                  name="contact_number"
                                  id="contact_number"
                                  className="form-control"
                                  placeholder="Contact Number"
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="contact_number">
                                {" "}
                                Date of Birth
                              </label>
                              <div className="input-group mb-2">
                                <input
                                  type="text"
                                  name="contact_number"
                                  id="contact_number"
                                  className="form-control"
                                  placeholder="Date of Birth"
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="Email"
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="image">Image </label>
                              <input
                                type="file"
                                name="image"
                                id="image"
                                className="form-control"
                                accept="image/*"
                                onchange="return filePreview(this)"
                              />
                              <div
                                id="preview_file"
                                style={{ marginTop: 10 }}
                              />
                            </div>

                            <div className="form-group">
                              <label htmlFor="contact_number">
                                {" "}
                                NID/Birth certificate:
                              </label>
                              <div className="input-group mb-2">
                                <input
                                  type="text"
                                  name="contact_number"
                                  id="contact_number"
                                  className="form-control"
                                  placeholder="NID/Birth certificate"
                                  required
                                />
                              </div>
                            </div>
                            <div class="mb-3">
                              <label
                                for="exampleFormControlTextarea1"
                                class="form-label"
                              >
                                Note
                              </label>
                              <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Write Your Note..."
                              ></textarea>
                            </div>
                          </div>
                          <div className="card-footer">
                            <button
                              type="submit"
                              className="btn btn-success m-1"
                            >
                              Submit
                            </button>
                            <button type="reset" className="btn btn-primary">
                              Reset
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
      </div>
      <AdminFooter></AdminFooter>
    </div>
    );
};

export default AddMan;