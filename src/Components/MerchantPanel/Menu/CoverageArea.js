import React from "react";
import MerchanHeader from "../MerchanHeader";

const CoverageArea = () => {
  return (
    <>
      <MerchanHeader />
      <div className="container">
        <div className="row mt-4">
        <h5 className="ps-4">Inside Dhaka</h5>
          <form class="form-inline py-3">
          

            <div class="form-group mx-sm-3 mb-2">
              <input
                type="text"
                class="form-control"
                placeholder="Inside area"
              />
            </div>
            <div class="form-group mx-sm-3 mb-2">
              <input
                type="text"
                class="form-control"
                placeholder="Area or District"
              />
            </div>
            
          </form>
        </div>
        <div className=" justify-content-center table-responsive-md">
        <table class="table table-bordered ">
                  <tbody>
                    <tr className="App  ">
                      <td>District</td>
                      <td>Area </td>
                      <td>Post code</td>
                      <td>Home Delivery</td>
                      <td>lockdowon</td>
                      <td>Charge</td>
                      <td>Charge</td>
                      <td>Charge</td>
                      <td>COD Charge</td>
                    </tr>
                    <tr className="App ">
                      <td>Dhaka</td>
                      <td>Gulshan </td>
                      <td>1212</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>60</td>
                      <td>70</td>
                      <td>80</td>
                      <td>0%</td>
                    </tr>
                    <tr className="App  ">
                      <td>Dhaka</td>
                      <td>Gulshan </td>
                      <td>1212</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>60</td>
                      <td>70</td>
                      <td>80</td>
                      <td>0%</td>
                    </tr>
                    <tr className="App  ">
                      <td>Dhaka</td>
                      <td>Gulshan </td>
                      <td>1212</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>60</td>
                      <td>70</td>
                      <td>80</td>
                      <td>0%</td>
                    </tr>
                    <tr className="App  ">
                      <td>Dhaka</td>
                      <td>Gulshan </td>
                      <td>1212</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>60</td>
                      <td>70</td>
                      <td>80</td>
                      <td>0%</td>
                    </tr>
                    <tr className="App  ">
                      <td>Dhaka</td>
                      <td>Gulshan </td>
                      <td>1212</td>
                      <td>Yes</td>
                      <td>No</td>
                      <td>60</td>
                      <td>70</td>
                      <td>80</td>
                      <td>0%</td>
                    </tr>
               
                  </tbody>
                </table>
                </div>
      </div>
    </>
  );
};

export default CoverageArea;
