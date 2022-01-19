import React from 'react';

const Psummery = () => {
    const payments = [
        {
          id: "1",
          title: "Tk. 120",
          description: "Total Sales",
          img: "https://redx.com.bd/images/new-dashboard-icon/total_sales.svg ",
        },
        {
          id: "2",
          title: "Tk. 230",
          description: "Total Delivery Fee Paid ",
          img: " https://redx.com.bd/images/new-dashboard-icon/delivery_fees_collected.svg",
        },
        {
          id: "3",
          title: "Tk. 320",
          description: "Total Unpaid Amount ",
          img: " https://redx.com.bd/images/new-dashboard-icon/unpaid_amount.svg",
        },
        {
          id: "4",
          title: " Tk. 00",
          description: " Payment Processing",
          img: "https://redx.com.bd/images/new-dashboard-icon/payment_processing.svg ",
        },
      ];
    return (
        <>
      {payments.map((payment) => (
        <>
          <div className="col-md-4">
            <div className="m-1 bg-white px-3 d-flex">
              <img
                className=" w-25 p-2"
                src={payment.img}
                alt=""
              />
              <div className=" p-2 ">
                <h2>{payment.title}</h2>
                <p>{payment.description}</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
    );
};

export default Psummery;