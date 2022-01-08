import React from "react";

const Summary = () => {
  return (
    <div className="col-md-4">
      <div className="m-1 bg-white px-3 d-flex">
        <img className=" w-25 p-2"
          src="https://redx.com.bd/images/new-dashboard-icon/credit.svg"
          alt=""
        />
        <div className=" p-2 ">
        <h2 >3000</h2>
        <p >Successful Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
