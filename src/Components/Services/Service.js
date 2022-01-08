import React from "react";
import './Service.css';
import SingleService from "./SingleService";

const Service = () => {
  return (
    <div class="row">
      <h1 style={{ fontWeight: "bold", padding: "2rem" }}>
      সার্ভিস সমূহ
      </h1>
      <SingleService></SingleService>
      <SingleService></SingleService>
      <SingleService></SingleService>
      <SingleService></SingleService>
      <SingleService></SingleService>
      <SingleService></SingleService>
      
    </div>
  );
};

export default Service;
