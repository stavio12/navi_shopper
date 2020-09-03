import React, { useEffect } from "react";
import white from "../../Images/3.jpg";
import red from "../../Images/5.jpg";
import robeWhite from "../../Images/1.jpg";
import robewine from "../../Images/4.jpg";
function Homepage() {
  return (
    <>
      <section className="pj">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 my-5 py-5">
              <div className="explore text-center py-5 text-white">
                <h6 className="py-2">E com</h6>
                <h3>The Premium Destionation for Finding Luxuary Dresses at Wholesale Prices</h3>
                <h6 className="btn text-white border-bottom"> Discover</h6>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="img">
                <img src={white} className="img-fluid" alt="white dress" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dresses pt-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-8">
              <div id="red">
                <img src={red} alt="red dress" className="img-fluid" />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div id="red" className=" offset-2 text-center">
                <img src={red} alt="red dress" className="img-fluid" />
                <h6 className="disabled text-secondary">SALE</h6>
                <h5 className="h6">35" X 60 - 100% Turkish Cotton</h5>
                <h5 className="h6">Ivory Terry Straight Dress</h5>
                <h5 className="h6">$350</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shoes">
        <div className="container">
          <div className="row">
            <div className="col col-md-4 col-lg-4">
              <div className="explore text-center py-5 ">
                <h6 className="py-2">E com</h6>
                <h6>Take your lounging to the next level of luxuriousness with our bamboo lace trim kimano robe, which makes a silky soft and romantic cover up for nughtgowns and matching undergaments</h6>
                <h6 className="btn  border-bottom"> Explore</h6>
              </div>
            </div>
            <div className="col col-md-4 col-lg-4">
              <div id="wine">
                <img src={robewine} alt="red dress" className="img-fluid ml-5" />
              </div>
            </div>
            <div className="col col-md-4 col-lg-4">
              <div className="wine">
                <img src={robewine} alt="red dress" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aces">
        <div className="container">
          <h6 className="text-center text-weight-bolder">BEST SELLERS</h6>
          <hr className="text-dark" />
          <div className="row acces">
            <div className="col-4 col-md-4 col-lg-4">
              <img src={robeWhite} alt="accessories" className="img-fluid" />
              <h5 className="h6">35" X 60 - 100% Turkish Cotton</h5>
              <h5 className="h6">Ivory Terry Straight Dress</h5>
              <h5 className="h6">$350</h5>
            </div>
            <div className="col-4 col-md-4 col-lg-4">
              <img src={robeWhite} alt="accessories" className="img-fluid" />
              <h5 className="h6">35" X 60 - 100% Turkish Cotton</h5>
              <h5 className="h6">Ivory Terry Straight Dress</h5>
              <h5 className="h6">$350</h5>
            </div>
            <div className="col-4 col-md-4 col-lg-4">
              <img src={robeWhite} alt="accessories" className="img-fluid" />
              <h5 className="h6">35" X 60 - 100% Turkish Cotton</h5>
              <h5 className="h6">Ivory Terry Straight Dress</h5>
              <h5 className="h6">$350</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="panty">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-6">
              {" "}
              <img src={red} alt="panty" className="img-fluid" />{" "}
            </div>
            <div className="col-6 col-md-6 col-lg-6 sub-panty">
              <div className="offset-3 my-5 pt-5">
                <img src={red} alt="panty" className="img-fluid my-5" />
                <h6 className="btn  border-bottom text-center"> Discover</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
