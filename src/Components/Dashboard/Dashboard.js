import React from "react";
import MerchanHeader from "../MerchantHeader/MerchanHeader";

import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";

const Dashboard = () => {
  const [value, setValue] = React.useState([null, null]);

  return (
    <div>
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

          <div className="col-md-8">
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
            </form>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateRangePicker
                startText="Start"
                endText="End"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} />
                  </React.Fragment>
                )}
              />
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
