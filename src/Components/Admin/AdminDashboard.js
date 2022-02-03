import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const fontsize = {
    fontSize: "3rem",
    marginTop:'0.5rem'
  };
  const lineHeighting ={
    lineHeight: "1rem",
  };

  return (
    <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Dashboard</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                {/* <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard v1</li>
                </ol> */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
            
              <div className="col-lg-3 col-6  ">
                {/* small box */}
                <Link
                  to="all-merchant"
                  className="small-box bg-white shadow p-3  text-decoration-none"
                >
                  <div className="inner ">
                    <h3 >150</h3>
                    <h6 style={lineHeighting} >Merchants</h6>
                  </div>
                  <div className="icon ">
                    <i
                      style={fontsize}
                      className="ion ion-person-add text-primary"
                    />
                  </div>
                </Link>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <Link
                  to="all-hub"
                  className="small-box bg-white shadow p-3 text-decoration-none "
                >
                  <div className="inner ">
                    <h3>
                      53
                      {/* <suh6 style={{ fontSize: 20 }}>%</suh6> */}
                    </h3>
                    <h6 style={lineHeighting} >Hub Manager</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} className="ion ion-person-add text-warning" />
                  </div>
                </Link>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <Link
                  to="all-pickup"
                  className="small-box bg-white shadow p-3 text-decoration-none"
                >
                  <div className="inner">
                    <h3>44</h3>
                    <h6 style={lineHeighting} >Pickup Agent</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} className="ion ion-person-add text-secondary" />
                  </div>
                  
                </Link>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <Link to="all-man" className="small-box bg-white shadow p-3  text-decoration-none">
                  <div className="inner">
                    <h3>65</h3>
                    <h6 style={lineHeighting} >Delivery man</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} className="ion ion-person-add text-success" />
                  </div>
                  
                </Link>
              </div>
              <h3 className="mt-3">Parcel Information</h3>
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>210</h3>
                    <h6 style={lineHeighting} >Total Parcel</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} className="ion ion-bag text-success" />
                  </div>
                  
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>115</h3>
                    <h6 style={lineHeighting} >Today Parcel</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} className="ion ion-bag text-primary" />
                  </div>
                   
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>30</h3>
                    <h6 style={lineHeighting} >Pending Parcel</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} className="ion ion-bag text-warning" />
                  </div>
                   
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>65</h3>
                    <h6 style={lineHeighting} >Delivery in Progress</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} className="ion ion-stats-bars text-success" />
                  </div>
                   
                </div>
              </div>

              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>450</h3>
                    <h6 style={lineHeighting} >Delivered</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} className="ion ion-briefcase text-success" />
                  </div>
                   
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>50</h3>
                    <h6 style={lineHeighting} >Hold</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} className="ion ion-briefcase text-secondary" />
                  </div>
                   
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>33</h3>
                    <h6 style={lineHeighting} >Returning</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} className="ion ion-briefcase text-warning" />
                  </div>
                   
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>45</h3>
                    <h6 style={lineHeighting} >Rejected Parcel</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} className="ion ion-briefcase text-danger" />
                  </div>
                   
                </div>
              </div>
              {/* ./col */}

              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3 ">
                  <div className="inner">
                    <h3>40</h3>

                    <h6 style={lineHeighting}  class="w-75 ">Today Pickup Request </h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} className="ionicons ion-android-cart text-primary " />
                  </div>
                   
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>60</h3>
                    <h6 style={lineHeighting}  class="w-75 ">Today Pickup Done </h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} className="ionicons ion-android-cart text-success " />
                  </div>
                   
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>70</h3>
                    <h6 style={lineHeighting}  class="w-75 ">Today Pickup Pending</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} className="ionicons ion-android-cart text-warning " />
                  </div>
                   
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>80</h3>
                    <h6 style={lineHeighting}  class="w-75 ">Today Pickup Cancel</h6>
                  </div>
                  <div className="icon w-25">
                     <i style={fontsize} className="ionicons ion-android-cart text-danger " />
                  </div>
                   
                </div>
              </div>
              {/* ./col */}
              <h3 className="mt-3">Account Information</h3>
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>75</h3>
                    <h6 style={lineHeighting}  class="w-75 ">Today Parcel Amount </h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} className="ion ion-cash text-primary" />
                  </div>
                   
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>85</h3>
                    <h6 style={lineHeighting}  class="w-75 ">Unpaid Parcel Amount</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} className="ion ion-cash text-warning" />
                  </div>
                   
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>90</h3>
                    <h6 style={lineHeighting}  class="w-75 ">Total Paid Amount</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} className="ion ion-cash text-success" />
                  </div>
                   
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>110</h3>
                    <h6 style={lineHeighting}  class="w-75 ">Total Parcel Amount</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} className="ion ion-cash text-secondary" />
                  </div>
                   
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>210</h3>
                    <h6 style={lineHeighting}  class="w-75 ">Marchant Unpaid Amount</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} class="ionicons ion-cash text-danger"></i>
                  </div>
                   
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>120</h3>
                    <h6 style={lineHeighting}  class="w-75 ">Marchant Paid Amount</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} class="ionicons ion-cash text-success"></i>
                  </div>
                   
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>110 </h3>
                    <h6 style={lineHeighting}  class="w-75 ">Hum Manager Fee</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} class="ionicons ion-cash text-primary"></i>
                  </div>
                   
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner mx-1">
                    <h3>50</h3>
                    <h6 style={lineHeighting}  class="w-75 ">Delivery Man Fee</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} class="ionicons ion-cash text-primary"></i>
                  </div>
                   
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>40</h3>
                    <h6 style={lineHeighting} >Office Expenses</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} class="ionicons ion-cash text-primary"></i>
                  </div>
                   
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>30</h3>
                    <h6 style={lineHeighting} >Other expenses</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} class="ionicons ion-cash text-warning"></i>
                  </div>
                   
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>20</h3>
                    <h6 style={lineHeighting} >Total expenses</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} class="ionicons ion-cash text-warning"></i>
                  </div>
                   
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-white shadow p-3">
                  <div className="inner">
                    <h3>10</h3>
                    <h6 style={lineHeighting} >Total Income</h6>
                  </div>
                  <div className="icon">
                     <i style={fontsize} class="ionicons ion-cash text-success"></i>
                  </div>
                   
                </div>
              </div>
              {/* ./col */}
            </div>
            {/* /.row */}
            {/* Main row */}
            <div className="row">
              {/* Left col */}
              <section className="col-lg-7 connectedSortable">
                {/* Custom tabs (Charts with tabs)*/}

                {/* /.card */}
                {/* DIRECT CHAT */}

                {/*/.direct-chat */}
                {/* TO DO List */}
                {/* <div className="card"> */}
                {/* <div className="card-header">
                    <h3 className="card-title">
                       <i style={fontsize} className="ion ion-clipboard mr-1" />
                      To Do List
                    </h3>
                    <div className="card-tools">
                      <ul className="pagination pagination-sm">
                        <li className="page-item">
                          <a href="#" className="page-link">
                            «
                          </a>
                        </li>
                        <li className="page-item">
                          <a href="#" className="page-link">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a href="#" className="page-link">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a href="#" className="page-link">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a href="#" className="page-link">
                            »
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                {/* /.card-header */}
                {/* <div className="card-body">
                    <ul className="todo-list" data-widget="todo-list">
                      <li> */}
                {/* drag handle */}
                {/* <span className="handle">
                           <i style={fontsize} className="fas fa-ellipsis-v" />
                           <i style={fontsize} className="fas fa-ellipsis-v" />
                        </span> */}
                {/* checkbox */}
                {/* <div className="icheck-primary d-inline ml-2">
                          <input
                            type="checkbox"
                            defaultValue
                            name="todo1"
                            id="todoCheck1"
                          />
                          <label htmlFor="todoCheck1" />
                        </div> */}
                {/* todo text */}
                {/* <span className="text">Design a nice theme</span> */}
                {/* Emphasis label */}
                {/* <small className="badge badge-danger">
                           <i style={fontsize} className="far fa-clock" /> 2 mins
                        </small> */}
                {/* General tools such as edit or delete*/}
                {/* <div className="tools">
                           <i style={fontsize} className="fas fa-edit" />
                           <i style={fontsize} className="fas fa-trash-o" />
                        </div>
                      </li> */}
                {/* <li>
                        <span className="handle">
                           <i style={fontsize} className="fas fa-ellipsis-v" />
                           <i style={fontsize} className="fas fa-ellipsis-v" />
                        </span>
                        <div className="icheck-primary d-inline ml-2">
                          <input
                            type="checkbox"
                            defaultValue
                            name="todo2"
                            id="todoCheck2"
                            defaultChecked
                          />
                          <label htmlFor="todoCheck2" />
                        </div>
                        <span className="text">Make the theme responsive</span>
                        <small className="badge badge-info">
                           <i style={fontsize} className="far fa-clock" /> 4 hours
                        </small>
                        <div className="tools">
                           <i style={fontsize} className="fas fa-edit" />
                           <i style={fontsize} className="fas fa-trash-o" />
                        </div>
                      </li> */}
                {/* <li>
                        <span className="handle">
                           <i style={fontsize} className="fas fa-ellipsis-v" />
                           <i style={fontsize} className="fas fa-ellipsis-v" />
                        </span>
                        <div className="icheck-primary d-inline ml-2">
                          <input
                            type="checkbox"
                            defaultValue
                            name="todo3"
                            id="todoCheck3"
                          />
                          <label htmlFor="todoCheck3" />
                        </div>
                        <span className="text">
                          Let theme shine like a star
                        </span>
                        <small className="badge badge-warning">
                           <i style={fontsize} className="far fa-clock" /> 1 day
                        </small>
                        <div className="tools">
                           <i style={fontsize} className="fas fa-edit" />
                           <i style={fontsize} className="fas fa-trash-o" />
                        </div>
                      </li> */}
                {/* <li>
                        <span className="handle">
                           <i style={fontsize} className="fas fa-ellipsis-v" />
                           <i style={fontsize} className="fas fa-ellipsis-v" />
                        </span>
                        <div className="icheck-primary d-inline ml-2">
                          <input
                            type="checkbox"
                            defaultValue
                            name="todo4"
                            id="todoCheck4"
                          />
                          <label htmlFor="todoCheck4" />
                        </div>
                        <span className="text">
                          Let theme shine like a star
                        </span>
                        <small className="badge badge-success">
                           <i style={fontsize} className="far fa-clock" /> 3 days
                        </small>
                        <div className="tools">
                           <i style={fontsize} className="fas fa-edit" />
                           <i style={fontsize} className="fas fa-trash-o" />
                        </div>
                      </li> */}
                {/* <li>
                        <span className="handle">
                           <i style={fontsize} className="fas fa-ellipsis-v" />
                           <i style={fontsize} className="fas fa-ellipsis-v" />
                        </span>
                        <div className="icheck-primary d-inline ml-2">
                          <input
                            type="checkbox"
                            defaultValue
                            name="todo5"
                            id="todoCheck5"
                          />
                          <label htmlFor="todoCheck5" />
                        </div>
                        <span className="text">
                          Check your messages and notifications
                        </span>
                        <small className="badge badge-primary">
                          <i className="far fa-clock" /> 1 week
                        </small>
                        <div className="tools">
                          <i className="fas fa-edit" />
                          <i className="fas fa-trash-o" />
                        </div>
                      </li>
                      <li>
                        <span className="handle">
                          <i className="fas fa-ellipsis-v" />
                          <i className="fas fa-ellipsis-v" />
                        </span>
                        <div className="icheck-primary d-inline ml-2">
                          <input
                            type="checkbox"
                            defaultValue
                            name="todo6"
                            id="todoCheck6"
                          />
                          <label htmlFor="todoCheck6" />
                        </div>
                        <span className="text">
                          Let theme shine like a star
                        </span>
                        <small className="badge badge-secondary">
                          <i className="far fa-clock" /> 1 month
                        </small>
                        <div className="tools">
                          <i className="fas fa-edit" />
                          <i className="fas fa-trash-o" />
                        </div>
                      </li>
                    </ul> */}
                {/* </div> */}
                {/* /.card-body */}
                {/* <div className="card-footer clearfix">
                    <button type="button" className="btn btn-info float-right">
                      <i className="fas fa-plus" /> Add item
                    </button>
                  </div>
                </div> */}
                {/* /.card */}
              </section>
              {/* /.Left col */}
              {/* right col (We are only adding the ID to make the widgets sortable)*/}
              <section className="col-lg-5 connectedSortable">
                {/* Map card */}

                {/* /.card */}
                {/* solid sales graph */}

                {/* /.card */}
                {/* Calendar */}

                {/* /.card */}
              </section>
              {/* right col */}
            </div>
            {/* /.row (main row) */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </div>
  );
};

export default AdminDashboard;
