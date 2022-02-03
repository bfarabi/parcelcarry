import React from "react";
import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import logo from "../../Images/Percel-Carry-logo.png";
import MerchanHeader from './../MerchantPanel/MerchanHeader';

const Invoice = () => {
  return (
    <>
      
      <div >
      <MerchanHeader></MerchanHeader>
        <section className="content">
          <div className="container-fluid ">
            <div className="main-content-container container-fluid w-75 ">
              <div className="page-header row no-gutters py-4">
                <div class="   ">
                  <h3 class="page-title">
                    {" "}
                    <img
                      src="https://redx.com.bd/images/revamp/right-icon.svg"
                      alt=""
                    />{" "}
                    Your parcel request successfully placed
                  </h3>
                  <p>
                    Parcel ID 22A2A1TUDCQ8J will be picked up by our deliveryman
                    by February 1, 2022
                  </p>
                </div>
                <div class=" d-flex  justify-content-between ">
                  <p>Download the label below </p>
                  <h4 className="text-danger">
                    {" "}
                    <i class="bi bi-download"></i> Download Print{" "}
                  </h4>
                </div>
                <div>
                  <p style={{ visibility: "hidden" }} />
                  <div
                    style={{
                      backgroundColor: "white",
                      boxSizing: "border-box",
                      border: "1px solid #787878",
                      marginBottom: 25,
                    }}
                  >
                    {/* merchant section */}
                    <header
                      style={{ padding: 15, borderBottom: "1px solid #787878" }}
                    >
                      <div style={{ float: "left" }}>
                        <p style={{ fontSize: 18, fontWeight: "bold" }}>
                          MERCHANT:{" "}
                        </p>
                      </div>
                      <div
                        style={{ float: "left", paddingLeft: 0, width: "80%" }}
                      >
                        <p
                          style={{
                            marginBottom: 5,
                            fontWeight: "bold",
                            fontSize: 18,
                          }}
                        >
                          Parcel Carry
                        </p>
                        <p style={{ marginBottom: 5 }}>
                          Kadamtali, Keraniganj, Dhaka
                        </p>
                        <p>8801613807771</p>
                      </div>
                      <div style={{ clear: "both" }} />
                    </header>
                    {/* customer section */}
                    <section
                      style={{ padding: 15, borderBottom: "1px solid #787878" }}
                    >
                      <div style={{ float: "left" }}>
                        <p style={{ fontWeight: "bold", fontSize: 18 }}>
                          CUSTOMER:{" "}
                        </p>
                      </div>
                      <div
                        style={{ float: "left", paddingLeft: 0, width: "83%" }}
                      >
                        <p
                          style={{
                            marginBottom: 5,
                            fontWeight: "bold",
                            fontSize: 18,
                          }}
                        >
                          farabi
                          <span style={{ float: "right" }}>TK. 10</span>
                        </p>
                        <p style={{ marginBottom: 5 }}>dhaka</p>
                        <p style={{ fontWeight: "bold" }}>01625594691</p>
                      </div>
                      <div style={{ clear: "both" }} />
                    </section>
                    {/* invoice section */}
                    <section style={{ borderBottom: "1px solid #787878" }}>
                      <div style={{ float: "left", padding: 15, width: "38%" }}>
                        <p>
                          <span style={{ fontWeight: "bold", paddingRight: 5 }}>
                            INVOICE#:{" "}
                          </span>
                          <span />
                        </p>
                      </div>
                      <div style={{ float: "left", width: "58%" }}>
                        <div
                          style={{
                            float: "left",
                            padding: 15,
                            borderLeft: "1px solid #787878",
                            width: "40%",
                          }}
                        >
                          <p>
                            <span
                              style={{ fontWeight: "bold", paddingRight: 5 }}
                            >
                              AREA:{" "}
                            </span>
                            <span>Amtali</span>
                          </p>
                        </div>
                        <div
                          style={{ float: "left", padding: 15, width: "45%" }}
                        >
                          <p>
                            <span
                              style={{ fontWeight: "bold", paddingRight: 5 }}
                            >
                              HUB:{" "}
                            </span>
                            <span>Kolapara </span>
                          </p>
                        </div>
                      </div>
                      <div style={{ clear: "both" }} />
                    </section>
                    {/* instruction section */}
                    <section
                      style={{ padding: 15, borderBottom: "1px solid #787878" }}
                    >
                      <p />
                    </section>
                    
                    {/* barcode and qr section  */}
                    <section style={{ width: "100%" }}>
                      <div style={{ float: "left", width: "25%" }}>
                        <img
                          style={{
                            width: "100%",
                            height: "12rem",
                            display: "inline-block",
                            verticalAlign: "middle",
                            padding: 15,
                            borderRight: "1px solid #787878",
                          }}
                          src="data:image/gif;base64,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"
                          alt="22A2A1TUDCQ8J"
                        />
                      </div>
                      <div style={{ float: "left", width: "75%" }}>
                        <div
                        className="text-center p-2"
                          style={{
                            width: "100%",
                            float: "left",
                            borderBottom: "1px solid #787878",
                          }}
                        >
                          <img
                            style={{
                              width: "83%",
                              height: 80,
                              display: "inline-block",
                              verticalAlign: "middle",
                              padding: "",
                            }}
                            className="text-center"
                            src="data:image/gif;base64,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"
                            alt="22A2A1TUDCQ8J"
                          />
                        </div>
                        <div style={{ width: "100%" }}>
                          <div
                            style={{
                              width: "50%",
                              float: "left",
                              padding: "27px 0",
                              textAlign: "center",
                            }}
                          >
                            <p style={{ padding: 0 }}>
                              <span style={{ fontWeight: "bold" }}>
                                PARCEL ID:{" "}
                              </span>
                              <span>22A2A1TUDCQ8J</span>
                            </p>
                          </div>
                          <div
                            style={{
                              width: "50%",
                              float: "left",
                              padding: "27px 0",
                              borderLeft: "1px solid #787878",
                              textAlign: "center",
                            }}
                          >
                            <p style={{ padding: 0 }}>
                              <span style={{ fontWeight: "bold" }}>
                                PARCEL CREATED:{" "}
                              </span>
                              <span>2022-02-01 11:57</span>
                            </p>
                          </div>
                          <div style={{ clear: "both" }} />
                        </div>
                      </div>
                      <div style={{ clear: "both" }} />
                    </section>
                  </div>
                  <button className="btn btn-danger fw-bold" type="submit">Create New 
                  Parcel</button>
                </div>

              </div>

              
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Invoice;
