import React from "react";
import "./Logistics.css";
import SingleLogics from "./SingleLogics";

const Logistics = () => {
  return (
    <div className="container">
      <h1 style={{ fontWeight: "bold", padding: "2rem" }}>
        আপনার লজিস্টিক পার্টনার হিসেবে PARCEL CARRY বেছে নিন
      </h1>
      <div className="row p-5">
        <SingleLogics></SingleLogics>
        
      </div>
    </div>
  );
};

export default Logistics;
