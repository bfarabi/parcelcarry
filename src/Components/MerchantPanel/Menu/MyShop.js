import React from 'react';
import MerchanHeader from '../MerchanHeader';
import { Link } from 'react-router-dom';

const MyShop = () => {
    return (
        <>
        <MerchanHeader/>
            <div className="container">
                <div className="row">
                <h2 className="px-4 py-3 text-bold">My Shop</h2>
                <hr className="w-25 text-bold px-1 pb-1 text-danger" />

                <div className="row">
                <div className="col-md-3 App   ">
                <Link to="/add-my-shop" className="text-decoration-none">
                <div className=" p-5 m-1 border rounded bg-light ">
                <img className="mb-2 " src="https://redx.com.bd/images/add.svg" alt="" />
                    <h4 className="text-danger">একটি নতুন শপ যুক্ত করুন</h4>
                </div>
                </Link>
                </div>
                <div className="col-md-3 ">
                <div className=" p-5 m-1 border rounded ">
                    <h4 className="text-bold">Parcel Carry</h4>
                    <small>Dhanmondi, Dhaka</small>
                    <p><small>+8801700011122</small></p>
                    <img className='position-absolute bottom-0 end-0 p-4' src="https://redx.com.bd/images/edit.svg" alt="" />
                </div>
                </div>
                <div className="col-md-3 ">
                <div className=" p-5 m-1 border rounded ">
                    <h4 className="text-bold">Parcel Carry</h4>
                    <small>Dhanmondi, Dhaka</small>
                    <p><small>+8801700011122</small></p>
                    <img className='position-absolute bottom-0 end-0 p-4' src="https://redx.com.bd/images/edit.svg" alt="" />
                </div>
                </div>
                <div className="col-md-3 ">
                <div className=" p-5 m-1 border rounded ">
                    <h4 className="text-bold">Parcel Carry</h4>
                    <small>Dhanmondi, Dhaka</small>
                    <p><small>+8801700011122</small></p>
                    <img className='position-absolute bottom-0 end-0 p-4' src="https://redx.com.bd/images/edit.svg" alt="" />
                </div>
                </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default MyShop;