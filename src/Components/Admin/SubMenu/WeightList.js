import React from 'react';
import AdminHeader from '../AdminHeader';
import AdminMenu from '../AdminMenu';

const WeightList = () => {
    return (
        <>
      <AdminHeader></AdminHeader>
      <AdminMenu></AdminMenu>
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <div className="main-content-container container-fluid px-4">
              <div className="page-header row no-gutters py-4">
                <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
                  <h3 class="page-title">Weight lists manage</h3>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h4 className=" ">Manage Role</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        
                        <div class="form-group">
                          <label for="exampleFormControlSelect1">Weight Name</label>
                          <input
                            class="form-control"
                            id="exampleFormControlSelect1"
                            type="text"
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
                      <hr />
                    </div>

                    <div className="card-body table-responsive p-0">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">#SL</th>
                            <th scope="col">Weight List</th>
                            
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>1</th>
                            <td>1 to 2 KG</td>
                            
                            <td>
                              <i className="bi-pencil-square bg-warning text-white px-1 py-0 rounded"></i>
                              <i className="bi-trash bg-danger text-white px-1 py-0 rounded ms-1"></i>
                            </td>
                          </tr>
                          <tr>
                            <th>2</th>
                            <td>2 to 3 KG</td>
                            
                            <td>
                              <i className="bi-pencil-square bg-warning text-white px-1 py-0 rounded"></i>
                              <i className="bi-trash bg-danger text-white px-1 py-0 rounded ms-1"></i>
                            </td>
                          </tr>
                          <tr>
                            <th>3</th>
                            <td>2 to 3 KG</td>
                            
                            <td>
                              <i className="bi-pencil-square bg-warning text-white px-1 py-0 rounded"></i>
                              <i className="bi-trash bg-danger text-white px-1 py-0 rounded ms-1"></i>
                            </td>
                          </tr>
                          <tr>
                            <th>4</th>
                            <td>2 to 3 KG</td>
                            
                            <td>
                              <i className="bi-pencil-square bg-warning text-white px-1 py-0 rounded"></i>
                              <i className="bi-trash bg-danger text-white px-1 py-0 rounded ms-1"></i>
                            </td>
                          </tr>
                          <tr>
                            <th>5</th>
                            <td>2 to 3 KG</td>
                            
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
    </>
    );
};

export default WeightList;