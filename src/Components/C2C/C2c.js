import React from "react";
import Footer from "../Footer/Footer";
import "./C2c.css";
import C2cBanner from "./C2cBanner";
import Courier from "./Courier";
import Header from "./../Header/Header";

const C2c = () => {
  return (
    <div>
      <Header></Header>
      <C2cBanner></C2cBanner>
      <Courier></Courier>
      <Footer></Footer>
    </div>
  );
};

export default C2c;
