import React from 'react';
import AdminHeader from '../AdminHeader';
import AdminMenu from '../AdminMenu';
import AdminFooter from "../AdminFooter";

const DelivaryArea = () => {
    return (
        <>
      <AdminHeader></AdminHeader>
      <AdminMenu></AdminMenu>
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <div className="main-content-container container-fluid px-4">
              <div className="page-header row no-gutters py-4">
                <div class="col-12 col-sm-4  text-sm-left mb-0">
                  <h3 class="page-title">Delivery Area</h3>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h4 className=" ">Add Area</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <div class="form-group">
                          <label for="exampleFormControlSelect1">
                            Area Name
                          </label>
                          <select
                            class="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option selected>Please select District</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label for="exampleFormControlSelect1">Percent</label>
                          <input
                            class="form-control"
                            id="exampleFormControlSelect1"
                            type="text"
                            value="0"
                          ></input>
                        </div>
                        <a href="#" className="btn btn-success">
                          save
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-8">
                  <div className="card w-100" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h3 className=" ">Charge list</h3>
                    </div>

                    <div className="card-body table-responsive p-0">
                      <table class="table">
                      <tbody>
                          <tr>
                            <th scope="col">#SL</th>
                            <th scope="col">Area Name</th>
                            <th scope="col"> Rate</th>
                            <th scope="col">Action</th>
                          </tr>
                        
                        
                          <tr>
                            <th>1</th>
                            <td>Dhanmondi</td>
                            <td>10</td>
                            <td>
                              <i className="bi-pencil-square bg-warning text-white px-1 py-0 rounded"></i>
                              <i className="bi-trash bg-danger text-white px-1 py-0 rounded ms-1"></i>
                            </td>
                          </tr>
                          <tr>
                            <th>2</th>
                            <td>Gulsan</td>
                            <td>2</td>
                            <td>
                              <i className="bi-pencil-square bg-warning text-white px-1 py-0 rounded"></i>
                              <i className="bi-trash bg-danger text-white px-1 py-0 rounded ms-1"></i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <AdminFooter></AdminFooter>
    </>
    );
};

export default DelivaryArea;