import React from 'react';
import Footer from '../Footer/Footer';
import Logistics from '../LogisticsService/Logistics';
import News from '../RedxNews/News';
import Banner from './Banner';
import Contribute from './Contribute';
import LogoSlider from './LogoSlider';
import Success from './Success';

const Enterprice = () => {
    return (
        <div class="row App">
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