import React from 'react';
import './Logos.css';

const Logos = () => {
    return (
        <div class='my-4'>
            <div className="row">
                <div className="col-lg-6 enterprice-logo">
                <span><p>Top EnterPrice</p></span>  
                    <span><img src="https://redx.com.bd/images/revamp/bata-color.png" alt="" /></span>
                    <span><img src="https://redx.com.bd/images/revamp/rangs-group-color.png" alt="" /></span>
                    <span><img src="https://redx.com.bd/images/revamp/lotto-color.png" alt="" /></span>
                </div>
                <div className="col-lg-6 smes-logo">
                <span><p>Top SMES</p></span>  
                    <span><img src="https://redx.com.bd/images/revamp/daraz-color.png" alt="" /></span>
                    <span><img src="https://redx.com.bd/images/revamp/ajkerdeal-color.png" alt="" /></span>
                    <span><img src="https://redx.com.bd/images/revamp/othoba-color.png" alt="" /></span>
                </div>
            </div>
        </div>
    );
};

export default Logos;