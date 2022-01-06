import React from 'react';

const LogoSlider = () => {
    return (
        <div>
        <div className="row">
        <div
          id="carouselExampleControls"
          class="carousel slide panda-slide mt-5"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">

            <div class="carousel-item active">
              <div class="row d-flex align-items-center p-5">
                <div class="col-md-4 p-5">
                  <div>
                    <img
                      class="w-75"
                      src="https://redx.com.bd/images/revamp/lotto-color.png"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-md-4 p-5">
                  <div>
                    <img
                      class="w-75"
                      src="https://redx.com.bd/images/revamp/lotto-color.png"
                      alt=""
                    />
                  </div>
                </div>

                <div class="col-md-4 p-5">
                  <div>
                    <img
                      class="w-75"
                      src="https://redx.com.bd/images/revamp/lotto-color.png"
                      alt=""
                    />
                  </div>
                </div>


              </div>
            </div>

            <div class="carousel-item ">
              <div class="row d-flex align-items-center p-5">
                <div class="col-md-4 p-5">
                  <div>
                    <img
                      class="w-75"
                      src="https://redx.com.bd/images/revamp/rangs-group-color.png"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-md-4 p-5">
                  <div>
                    <img
                      class="w-75"
                      src="https://redx.com.bd/images/revamp/rangs-group-color.png"
                      alt=""
                    />
                  </div>
                </div>

                <div class="col-md-4 p-5">
                  <div>
                    <img
                      class="w-75"
                      src="https://redx.com.bd/images/revamp/rangs-group-color.png"
                      alt=""
                    />
                  </div>
                </div>


              </div>
            </div>

          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>
        </div>
    );
};

export default LogoSlider;