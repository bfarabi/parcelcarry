import React from "react";
import MerchanHeader from "../MerchanHeader";

const CreditHistory = () => {
  return (
    <div>
      <MerchanHeader />
      <div className="container">
        <div className="row  mt-4">
          <div className="col-md-4">
            <h5 className="px-1 py-3 text-bold">Credit Transaction History</h5>
            <p>পার্সেলের ডেলিভারি চার্জে ২০% ডিসকাউন্ট পেতে রেডেক্স ক্রেডিট ব্যবহার করুন</p>
            <hr className="w-50  px-1 pb-1 text-danger" />
          </div>
          <div className="col-md-8">
          <h5>Select Start and End Date</h5>
            <form class="form-inline py-3">
              <div class="form-group mx-sm-3 ">
                <input
                  type="date"
                  class="form-control"
                  placeholder="Inside area"
                />
              </div>
              <h4>to </h4>
              <div class="form-group mx-sm-3">
                <input
                  type="date"
                  class="form-control"
                  placeholder="Area or District"
                />
              </div>
              <button className="btn btn-outline-warning" type="submit">
                search
              </button>
            </form>
          </div>
        </div>
        <div className=" justify-content-center table-responsive-md">
          <table class="table  table-hover">
            <tbody>
              <tr className="App bg-light ">
                <td>Transaction ID</td>
                <td>Transaction Date</td>
                <td>Amount Type</td>
                <td>Amount Paid Out</td>
                
                
              </tr>
              <tr className="App ">
                <td>40</td>
                <td>Mar 05, 2021 </td>
                <td>Credit</td>
                <td > 120</td>
              </tr>
              <tr className="App ">
                <td>40</td>
                <td>Mar 05, 2021 </td>
                <td>Credit</td>
                <td > 120</td>
              </tr>
              <tr className="App ">
                <td>40</td>
                <td>Mar 05, 2021 </td>
                <td>Credit</td>
                <td > 120</td>
              </tr>
              <tr className="App ">
                <td>40</td>
                <td>Mar 05, 2021 </td>
                <td>Credit</td>
                <td > 120</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreditHistory;
