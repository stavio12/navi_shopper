import React, { useEffect } from "react";
import red from "../../Images/1.jpg";
import { Link } from "react-router-dom";

function NavMen() {
  return (
    <>
      <nav id="navmenCon" class="navbar  navbar-light bg-light  border-top border-dark">
        <div class="d-sm-flex d-block flex-sm-nowrap list">
          <div class="text-center" id="navbarsExample11">
            <ul class="navbar-nav flex-column">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  ALL NEW ARRIVALS
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-auto">
            <ul class="navbar-nav  mx-5 flex-column">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  APPARELS{" "}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Shoes{" "}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  ALL NEW ARRIVALS
                </a>
              </li>
            </ul>
          </div>

          <div className="mx-auto">
            <ul class="navbar-nav  mx-5 flex-column">
              <li class="nav-item active">
                <Link to="/">
                  <a class="nav-link" href="#">
                    SHOES{" "}
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  ALL NEW ARRIVALS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  ALL NEW ARRIVALS
                </a>
              </li>
            </ul>
          </div>

          <div className="mx-auto">
            <ul class="navbar-nav  mx-5 flex-column">
              <li class="nav-item active">
                <a class="nav-link">ASSOCERIES </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">ALL NEW ARRIVALS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">ALL NEW ARRIVALS</a>
              </li>
            </ul>
          </div>

          <div className="mx-auto navImageCon">
            <div className="navbar-nav mx-5 flex-column">
              <div className="mx-5">
                <div className=" text-center">
                  <img src={red} alt="red dress" className="img-fluid navImage" />
                  <h6 className="disabled text-secondary">SALE</h6>
                  <h5 className="h6">35" X 60 - 100% Turkish Cotton</h5>
                  <h5 className="h6">Ivory Terry Straight Dress</h5>
                  <h5 className="h6">$350</h5>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavMen;
