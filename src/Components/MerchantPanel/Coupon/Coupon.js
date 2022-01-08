import React from "react";
import MerchanHeader from "../MerchanHeader";

const Coupon = () => {
  return (
    <div>
      <MerchanHeader></MerchanHeader>
      <div className="row w-100 ">
        <div className="col-md-8 p-5">
          <h4>Active coupon</h4>
          <hr class="w-25 text-danger " />
          <table class="table">
            <tbody>
              <tr className="align-middle bg-light">
                <td>Coupon Code</td>
                <td>coupon description</td>
                <td>Expires on</td>
                <td>coupon status</td>
              </tr>
            </tbody>
            <tbody>
              <tr className="align-middle">
                <td>WELCOME20</td>
                <td>
                  কোডটি ২১ থেকে ৩১শে মে এর মধ্যে ব্যবহার করলেই পাবেন ১০ দিনের
                  জন্য ২০% ছাড়।
                </td>
                <td>May 31, 2021</td>
                <td>Aborted</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-md-4 bg-light p-5">
          <h4>কুপন অ্যাড করুন</h4>
          <hr class="w-50 " />
          <form action="">
              <label htmlFor="coupon"> Coupon code</label> <br />
              <input class="form-control" type="text" name="coupon" id="coupon" />
              <button class="signupBtn"type="submit">Apply coupon</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
