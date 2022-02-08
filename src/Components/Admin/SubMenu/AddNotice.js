import React from "react";
import AdminHeader from "../AdminHeader";
import AdminMenu from "../AdminMenu";
import AdminFooter from "../AdminFooter";

const AddNotice = () => {
  return (
    <div class="wrapper">
      <AdminHeader></AdminHeader>
      <AdminMenu></AdminMenu>
      <div className="content-wrapper bg-white border">
        <div className="content-header">
          <div className="container-fluid ">
            <h2 className=" text-dark">Add Notice</h2>
            <div className="row   ">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <label htmlFor="heading">Heading</label>
                <input
                  className="form-control"
                  type="text"
                  name
                  id="heading"
                  placeholder="Heading"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <label htmlFor="s-heading">Sub Heading</label>
                <input
                  className="form-control"
                  type="text"
                  name
                  id="s-heading"
                  placeholder="Sub Heading"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <label htmlFor="title">Title</label>
                <input
                  className="form-control"
                  type="text"
                  name
                  id="title"
                  placeholder="Title"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <label htmlFor="notice-date">Notice Date</label>
                <input
                  className="form-control"
                  type="date"
                  name
                  id="notice-date"
                  placeholder="Notice Date"
                />
              </div>
              <div>
                <label htmlFor="status">Status</label>
                <input
                  className="form-control"
                  type="text"
                  name
                  id="status"
                  placeholder="Status"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                Notice Details
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Write Here..."
                ></textarea>
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

export default AddNotice;
