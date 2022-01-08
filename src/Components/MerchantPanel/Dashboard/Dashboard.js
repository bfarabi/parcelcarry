import React from "react";
import MerchanHeader from "../MerchanHeader";
import Summary from "./Summary";

const Dashboard = () => {
  return (
    <div className="w-100">
      <MerchanHeader></MerchanHeader>
      <div className="row w-100 App">
        <p class="border shadow p-3 bg-body rounded">
          <span>
            <img
              className=""
              src="https://redx.com.bd/images/money.svg"
              alt=""
            />
          </span>{" "}
          অভিনন্দন! আপনি ShopUp থেকে ৳60000 পর্যন্ত এডভান্স পেমেন্ট নিতে পারবেন,
          আজই এপ্লাই করুন। বিস্তারিত এখানে &#8594;{" "}
          <span>
            {" "}
            <button type="submit" class="btn btn-success">
              {" "}
              Apply Now
            </button>{" "}
          </span>
        </p>
      </div>

      {/* welcome parcel carry section */}

      <div className="row bg-light w-100 p-4">
        <div className="row">
          <div className="col-md-4">
            <h2>স্বাগতম, Parcel Carry</h2>
            <hr />
          </div>

          <div className="col-md-8 ">
            <form>
              <div class="form-group">
                <label for="exampleFormControlSelect1"></label>
                <select class="p-3 " id="exampleFormControlSelect1">
                  <option selected>All pickup location</option>
                  <option>ঢাকা </option>
                  <option>কুমিল্লা </option>
                  <option>দিনাজপুর </option>
                  <option>রাজশাহী </option>
                </select>
              </div>
              <h3>Select Date</h3>
              <div class="input-group py-3 ">
              
                <input type="date" class="p-3" value="2022-01-01" />
                <div class="input-group-addon mx-2 mt-3" >to</div>
                <input type="date" class="p-3" value="2022-01-01" />
              </div>
            </form>
           
          </div>
        </div>

        <div className="row p-4">
          <p>Overview of your order summary</p>
          <Summary></Summary>
          <Summary></Summary>
          <Summary></Summary>
          <Summary></Summary>
          <Summary></Summary>
          <Summary></Summary>
        </div>

        <div className="row p-4 my-3">
          <p>Overview of your order summary</p>
          <Summary></Summary>
          <Summary></Summary>
          <Summary></Summary>
          <Summary></Summary>
          <Summary></Summary>
          <Summary></Summary>
          <p>কল করুন @ ০৯৬১০০০৭৩৩৯ | কোন প্রশ্ন আছে? FAQ দেখে নিন</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
