import React from "react";
import './Service.css';
import SingleService from "./SingleService";

const Service = () => {
  return (
   <div className="container">
      <div class="row p-4">
      <h1 style={{ fontWeight: "bold", padding: "2rem" }}>
      সার্ভিস সমূহ
      </h1>
      <SingleService></SingleService>
      
    </div>
   </div>
  );
};

export default Service;
