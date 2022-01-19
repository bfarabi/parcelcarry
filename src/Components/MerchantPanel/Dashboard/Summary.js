import React from "react";

const Summary = () => {
  const orders = [
    {
      id: "1",
      title: " 100",
      description: "Total Parcel",
      img: "https://redx.com.bd/images/new-dashboard-icon/successful_delivery.svg ",
    },
    {
      id: "2",
      title: " 200",
      description: "Pending Parcel ",
      img: " https://redx.com.bd/images/new-dashboard-icon/orders_to_be_returned.svg",
    },
    {
      id: "3",
      title: " 300",
      description: "Parcel Delivered ",
      img: " https://redx.com.bd/images/new-dashboard-icon/orders_delivered.svg",
    },
    {
      id: "4",
      title: " 400",
      description: " Parcel Returned",
      img: "https://redx.com.bd/images/new-dashboard-icon/orders_returned.svg ",
    },
  ];
  return (
    <>
      {orders.map((order) => (
        <>
          <div className="col-md-4">
            <div className="m-1 bg-white px-3 d-flex">
              <img
                className=" w-25 p-2"
                src={order.img}
                alt=""
              />
              <div className=" p-2 ">
                <h2>{order.title}</h2>
                <p>{order.description}</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Summary;
