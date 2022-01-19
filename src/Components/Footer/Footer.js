import React from 'react';
import './Footer.css';
import logo from "../../Images/Percel-Carry-logo.png";
import payrasoft from "../../Images/logo horizontal.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div class="row pt-5 footer-bg App w-100 p-0 m-0" >
            <div className="col-md-3 footer-colum">
                <Link to="/"><img src={logo} alt="" /></Link>
                <p>দ্রুততম সল্যুশনের জন্য পার্সেল ক্যারি অ্যাপটি ডাউনলোড করুন</p>
                <img src="https://redx.com.bd/images/revamp/google-play-badge.svg" alt="" />
            </div>
            <div className="col-md-3 footer-colum">
                <p class='fw-bold'>গুরুত্বপূর্ণ লিংক</p>
                <p>সিটুসি </p>
                <p>এন্টারপ্রাইজ</p>
                <p>কভারেজ এরিয়া</p>
                <p>প্রাইভেসী পলিসি</p>
                <p>FAQs</p>
                
            </div>
            <div className="col-md-3 footer-colum">
            <p class='fw-bold'>গুরুত্বপূর্ণ লিংক</p>
                <p>সিটুসি </p>
                <p>এন্টারপ্রাইজ</p>
                <p>কভারেজ এরিয়া</p>
                <p>প্রাইভেসী পলিসি</p>
                <p>FAQs</p>
                
            </div>
            <div className="col-md-3 footer-colum">
            <p class='fw-bold'>Connect with us</p>
            <a href="https://www.facebook.com/ParcelCarry">
            <span><img src="https://redx.com.bd/images/revamp/fb-icon.svg" alt="" /></span>
            </a>
                <span><img src="https://redx.com.bd/images/revamp/yt-icon.svg" alt="" /></span>
                <span><img src="https://redx.com.bd/images/revamp/linkedIn-icon.svg" alt="" /></span>
                <br />
                <small> &copy; PARCEL CARRY 2022. All rights reserved</small>
                
            </div>
            
            <div class='text-end'>
            <a className="text-decoration-none" href="https://payrasoft.com/"><p class="mx-3">Developed By: <span><img class="payralogo" src={payrasoft} alt="" /></span></p></a> 
            </div>
        </div>
    );
};

export default Footer;