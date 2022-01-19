import React from "react";
import MerchanHeader from "./../MerchanHeader";

const ShopSetting = () => {
  return (
    <>
      <MerchanHeader />
      <div className="container">
        <div className="row">
          <div className="col-md-4 py-5 ">
            <div className="p-3 pb-0 border rounded ">
              <p className="text-bold lh-1">পেমেন্ট মেথড</p>
              <p className="lh-1">আপনি কিভাবে পেমেন্ট পাবেন তা ম্যানেজ করুন</p>
            </div>
            <div className="p-3 pb-0 border rounded ">
              <p className="text-bold lh-1">নোটিফিকেশন সেটিংস

</p>
              <p className="lh-1">আপনি কিভাবে পেমেন্ট পাবেন তা ম্যানেজ করুন</p>
            </div>
            <div className="p-3 pb-0 border rounded ">
              <p className="text-bold lh-1">পাসওয়ার্ড চেঞ্জ করুন</p>
              <p className="lh-1">আপনি কিভাবে পেমেন্ট পাবেন তা ম্যানেজ করুন</p>
            </div>
          </div>
          <div className="col-md-8 py-5">
            <h1 className="px-2 py-3 text-bold">
              আপনার পেমেন্ট মেথড ম্যানেজ করুন
            </h1>
            <hr className="w-25 text-bold px-1 pb-1 text-danger" />
            <p>আপনার ডিফল্ট মেথড বিকাশের মাধ্যমে পেমেন্ট সিলেক্ট করা আছে</p>
            <table class="table ">
                <tbody  className="p-3">
                <tr>
                <td>Bkash Number</td>
                <td>01823432345</td>
                <td className="text-primary ">Number change</td>
            </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSetting;
