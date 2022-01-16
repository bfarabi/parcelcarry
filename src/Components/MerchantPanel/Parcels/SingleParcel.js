import React from 'react';

const SingleParcel = () => {
    return (
        <>
            {/* <table class="table "> */}
            
           
              <tr className="App align-middle  " >
                <td><input className="form-check-input mx-2 p-2 " type="checkbox" name="checkbox" id="" /></td>
                <td>Sep 23, 2021</td>
                <td>Puran Dhaka</td>
                <td>Invoice ID: Fh</td>
                <td>Parcel Carry</td>
                <td><div>
                <p>Shahabuddin</p>
                <p>01716202085</p>
                <p>Veramara, modhdho bazar</p>
                </div> </td>
                <td><div>
                    <small>Delivered</small><br />
                    <small>Settled</small>
                </div></td>
                <td><h1>...</h1></td>
              </tr>
              
            
          {/* </table> */}
        </>
    );
};

export default SingleParcel;