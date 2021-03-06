import React, { useEffect, useState } from "react";
import white from "../../Images/1.jpg";
import { Link } from "react-router-dom";

function MenItems() {
  return (
    <>
      <div id="items">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-4 col-lg-4">
              {" "}
              <div className="card pb-5 mb-5">
                <img src={white} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="colors card-text text-left">
                    <ul>
                      <li className="red"></li>
                      <li className="white"></li>
                      <li className="blue"></li>
                    </ul>
                    <Link to="/viewItem">
                      <span className="pt-3 h5">Men's Shoe yen yen</span>
                    </Link>{" "}
                  </div>
                  <div className=" card-text text-left">
                    <small>$10.00</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-4">
              {" "}
              <div className="card pb-5 mb-5">
                <img src={white} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="colors card-text text-left">
                    <ul>
                      <li className="red"></li>
                      <li className="white"></li>
                      <li className="blue"></li>
                    </ul>
                    <Link to="/viewItem">
                      <span className="pt-3 h5">Men's Shoe yen yen</span>
                    </Link>{" "}
                  </div>
                  <div className=" card-text text-left">
                    <small>$10.00</small>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-4">
              {" "}
              <div className="card pb-5 mb-5">
                <img src={white} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="colors card-text text-left">
                    <ul>
                      <li className="red"></li>
                      <li className="white"></li>
                      <li className="blue"></li>
                    </ul>
                    <Link to="/viewItem">
                      <span className="pt-3 h5">Fila SunBlazers</span>
                    </Link>{" "}
                  </div>
                  <div className=" card-text text-left">
                    <small>$10.00</small>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-4">
              {" "}
              <div className="card pb-5 mb-5">
                <img src={white} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="colors card-text text-left">
                    <ul>
                      <li className="red"></li>
                      <li className="white"></li>
                      <li className="blue"></li>
                    </ul>
                    <Link to="/viewItem">
                      <span className="pt-3 h5">Fila SunBlazers</span>
                    </Link>{" "}
                  </div>
                  <div className=" card-text text-left">
                    <small>$10.00</small>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-4">
              {" "}
              <div className="card pb-5 mb-5">
                <img src={white} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="colors card-text text-left">
                    <ul>
                      <li className="red"></li>
                      <li className="white"></li>
                      <li className="blue"></li>
                    </ul>
                    <Link to="/viewItem">
                      <span className="pt-3 h5">Addidas Moon Light</span>
                    </Link>{" "}
                  </div>
                  <div className=" card-text text-left">
                    <small>$10.00</small>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-4">
              {" "}
              <div className="card pb-5 mb-5">
                <img src={white} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="colors card-text text-left">
                    <ul>
                      <li className="red"></li>
                      <li className="white"></li>
                      <li className="blue"></li>
                    </ul>
                    <Link to="/viewItem">
                      <span className="pt-3 h5">Addidas Moon Light</span>
                    </Link>{" "}
                  </div>
                  <div className=" card-text text-left">
                    <small>$10.00</small>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-4">
              {" "}
              <div className="card pb-5 mb-5">
                <img src={white} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="colors card-text text-left">
                    <ul>
                      <li className="red"></li>
                      <li className="white"></li>
                      <li className="blue"></li>
                    </ul>
                    <Link to="/viewItem">
                      <span className="pt-3 h5">Addidas Moon Light</span>
                    </Link>{" "}
                  </div>
                  <div className=" card-text text-left">
                    <small>$10.00</small>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenItems;
