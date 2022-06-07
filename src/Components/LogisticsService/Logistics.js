import React from "react";
import "./Logistics.css";
import SingleLogics from "./SingleLogics";

const Logistics = () => {
  return (
    <div className="container">
      <h1 style={{ fontWeight: "bold", padding: "2rem" }}>
      Choose PARCEL CARRY as your logistics partner 
      </h1>
      <div className="row p-5">
        <SingleLogics></SingleLogics>
        
      </div>
    </div>
  );
};

export default Logistics;
