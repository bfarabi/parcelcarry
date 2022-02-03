import React from "react";
import AdminHeader from "../AdminHeader";
import AdminMenu from "../AdminMenu";

const ChargePack = () => {
  return (
    <>
      <AdminHeader></AdminHeader>
      <AdminMenu></AdminMenu>
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid pe-0">
            <div className="main-content-container container-fluid ">
              <div className="page-header row no-gutters py-4">
                <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
                  <h3 class="page-title">Charge package manage</h3>
                </div>
              </div>

              <div className="row">
                <div className="col-md-5 ">
                  <div className="card w-100">
                    <div className="card-body">
                      <h4 className=" ">add package</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <div class="form-group">
                          <label for="exampleFormControlSelect1">
                            Charge list
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
                          <label for="exampleFormControlSelect1">
                            {" "}
                            Charge Rate
                          </label>
                          <input
                            class="form-control"
                            id="exampleFormControlSelect1"
                            type="text"
                          ></input>
                        </div>

                        <div className="card-body table-responsive p-0">
                          <table class="table">
                            <tbody>
                              <tr>
                                <th scope="col">SL#</th>
                                <th scope="col">
                                  All <input type="checkbox" name="" id="" />{" "}
                                </th>
                                <th scope="col">Weight Name</th>
                                <th scope="col">Charge</th>
                              </tr>
                            
                              <tr>
                                <th>1</th>
                                <th>
                                  <input type="checkbox" name="" id="" />
                                </th>
                                <td>1 to 2 KG</td>
                                <td>
                                  <input
                                    class="form-control"
                                    id="exampleFormControlSelect1"
                                    type="text"
                                    value="0"
                                  ></input>
                                </td>
                              </tr>
                              <tr>
                                <th>2</th>
                                <th>
                                  <input type="checkbox" name="" id="" />
                                </th>
                                <td>1 to 2 KG</td>
                                <td>
                                  <input
                                    class="form-control"
                                    id="exampleFormControlSelect1"
                                    type="text"
                                    value="0"
                                  ></input>
                                </td>
                              </tr>
                              <tr>
                                <th>3</th>
                                <th>
                                  <input type="checkbox" name="" id="" />
                                </th>
                                <td>1 to 2 KG</td>
                                <td>
                                  <input
                                    class="form-control"
                                    id="exampleFormControlSelect1"
                                    type="text"
                                    value="0"
                                  ></input>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <a href="#" className="btn btn-success">
                          save
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-7">
                  <div className="card w-100" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h3 className=" ">Package list</h3>
                    </div>

                    <div className="card-body table-responsive p-0">
                      <table class="table">
                      <tbody>
                          <tr>
                            <th scope="col">SL#</th>
                            <th scope="col">Package Name</th>
                            <th scope="col">Charge Rate</th>
                            <th scope="col">Weight and Charge</th>
                            <th scope="col w-100">Action</th>
                          </tr>
                        
                        
                          <tr>
                            <th>1</th>
                            <td>Dhaka</td>
                            <td>100</td>
                            <td>
                              <ul>
                                <li>2 to 3 KG | 40</li>
                                <li> 1 to 2 KG | 20 </li>

                                <li>Below to 1 KG | 0</li>
                              </ul>
                            </td>
                            <td>
                              <i className="bi-pencil-square bg-warning text-white px-1 py-0 rounded m-1 "></i>
                              <i className="bi-trash bg-danger text-white px-1 py-0 rounded m-1"></i>
                            </td>
                          </tr>
                          <tr>
                            <th>2</th>
                            <td>Narayonganj</td>
                            <td>120</td>
                            <td>
                              <ul>
                                <li>2 to 3 KG | 40</li>
                                <li> 1 to 2 KG | 20 </li>

                                <li>Below to 1 KG | 0</li>
                              </ul>
                            </td>
                            <td>
                              <i className="bi-pencil-square bg-warning text-white px-1 py-0 rounded ms-1"></i>
                              <i className="bi-trash bg-danger text-white px-1 py-0 rounded m-1 "></i>
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
    </>
  );
};

export default ChargePack;
