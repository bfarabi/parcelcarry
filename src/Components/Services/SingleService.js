import React from "react";

const SingleService = () => {
  const services = [
    { id: "1",
      title: " পার্সেল ডেলিভারি",
      description: "ব্যক্তিগত, ছোট ব্যবসা এবং কর্পোরেটদের জন্য ফার্স্ট-মাইল পিকআপ এবং লাস্ট মাইল ডেলিভারি সেবা ",
      img: " https://redx.com.bd/images/provide-services/line-haul.webp",
    },

    { id: "2",
      title: " বাল্ক শিপমেন্ট",
      description: "বড় আইটেম এবং বড় সংখ্যক ডেলিভারির বিশেষ সমাধান ",
      img: "https://redx.com.bd/images/provide-services/bulk-shipment.webp ",
    },

    { id: "3",
      title: "লাইন হল ",
      description: "এফটিএল (পুরো ট্রাকলোড) ও এলটিএল (আংশিক ট্রাকলোড) সহ মালামাল পরিবহনের সকল সমাধান ",
      img: "https://redx.com.bd/images/provide-services/line-haul.webp ",
    },

    { id: "4",
      title: "ওয়্যারহাউজ ",
      description: "সংরক্ষন, বাছাই এবং প্রক্রিয়াজাতকরণের পরিপূর্ণ সমাধান ",
      img: "https://redx.com.bd/images/provide-services/warehouse.webp ",
    },

    { id: "5",
      title: "লোড-আনলোড ",
      description: " ইন্ডাস্ট্রি-অনুযায়ী ফ্যাক্টরি, প্রজেক্ট এবং বন্দরগুলোতে লোডিং-আনলোডিংয়ের সুবিধা",
      img: "https://redx.com.bd/images/provide-services/load-unload.webp ",
    },

    { id: "6",
      title: "লজিস্টিকস সেবা ",
      description: "লজিস্টিকস সংক্রান্ত যে কোন সমস্যার সমাধানে অভিজ্ঞ টিমের সহায়তা ",
      img: "https://redx.com.bd/images/provide-services/logistics-service.webp ",
    },
  ]

  return (
    <>  
    { 
      services.map((service) => (
        <>
        <div class="col-md-4">
        <img
          className="w-75"
          src={service.img}
          alt=""
        />
        <h4 class="m-2">{service.title}</h4>
        <p class="m-1">
          ব্যক্তিগত, ছোট ব্যবসা এবং কর্পোরেটদের জন্য ফার্স্ট-মাইল পিকআপ এবং
          লাস্ট মাইল ডেলিভারি সেবা
        </p>
      </div>
        </>
        
      )
          
      )
    }
      
    </>
  );
};

export default SingleService;
