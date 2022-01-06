import React from "react";
import AdNSignUp from "../Ad&SignUp/AdNSignUp";
import Logos from "../Logos/Logos";
import Service from "../Services/Service";
import Logistics from "../LogisticsService/Logistics";
import Coverage from "../CoverageArea/Coverage";
import Clients from "../Clients/Clients";
import News from "../RedxNews/News";
import Footer from "../Footer/Footer";



const Home = () => {
  return (
    <div className="App" style={{width:'99vw'}} >
      <AdNSignUp></AdNSignUp>
      <Logos></Logos>
      <Service></Service>
      <Logistics></Logistics>
      <Coverage></Coverage>
      <Clients></Clients>
      <News></News>
      <Footer></Footer>
    </div>
  );
};

export default Home;
