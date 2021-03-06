import React from "react";
import Footer from "../Footer/Footer";
import Logistics from "../LogisticsService/Logistics";
import News from "../RedxNews/News";
import Banner from "./Banner";
import Contribute from "./Contribute";
import LogoSlider from "./LogoSlider";
import Success from "./Success";
import Header from "./../Header/Header";


const Enterprice = () => {
  return (
    <div class="row App w-100">
      <Header></Header>
      <Banner></Banner>
      <LogoSlider></LogoSlider>
      <Logistics></Logistics>
      <Contribute></Contribute>
      <Success></Success>
      <News></News>
      <Footer></Footer>
    </div>
  );
};

export default Enterprice;
