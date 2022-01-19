import React from "react";

const SingleLogics = () => {
  const logisticsService = [
    {
      id: "1",
      title: "৩ দিনে ডেলিভারি গ্যারান্টিড ",
      description:
        "মাত্র ৩ দিনে বাংলাদেশের যেকোনো প্রান্তে পার্সেল ডেলিভারির নিশ্চয়তা ",
      img: "https://redx.com.bd/images/revamp/fastest-delivery.svg ",
    },
    {
      id: "2",
      title: "ডোরস্টেপ পিকআপ ও ডেলিভারি ",
      description:
        "আপনার দরজা থেকে কাঙ্ক্ষিত গন্তব্যে পার্সেল পৌঁছে যাবে নির্বিঘ্নে ",
      img: " https://redx.com.bd/images/revamp/doorstep-pickup-delivery.svg",
    },
    {
      id: "3",
      title: "এসএমএস আপডেট ",
      description:
        "পার্সেল বুকিং এবং ডেলিভারির সময় পাবেন আপনার নিবন্ধিত মোবাইল নম্বরে এসএমএস আপডেট ",
      img: " https://redx.com.bd/images/revamp/sms-update.svg",
    },
    {
      id: "4",
      title: "সেরা ক্যাশ অন ডেলিভারি রেট ",
      description: "ঢাকার ভিতর ক্যাশ অন ডেলিভারি চার্জ ০%, ঢাকার বাইরে ১% ",
      img: "https://redx.com.bd/images/revamp/best-cod-rates.svg ",
    },
    {
      id: "5",
      title: "পরের দিনই পেমেন্ট ",
      description: "ডেলিভারি সম্পূর্ণ হলে পরের দিনই পেমেন্ট পেয়ে যাবেন ",
      img: " https://redx.com.bd/images/revamp/next-day-payment.svg",
    },
    {
      id: "6",
      title: "সিকিউর হ্যান্ডলিং ",
      description: "সর্বোচ্চ নিরাপদে শিপমেন্টের নিশ্চয়তা ও ক্ষতিপূরণ সুবিধা ",
      img: "https://redx.com.bd/images/revamp/secure-handling.svg ",
    },
  ];

  return (
    <>
      {logisticsService.map((logistic) => (
        <>
          <div className="col-lg-4 col-md-4">
            <div>
              <img
                class="logistic-img"
                src={logistic.img}
                alt=""
              />
            </div>
            <div className="mx-3">
              <h4> {logistic.title}</h4>
              <p>
                {logistic.description}
              </p>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default SingleLogics;
