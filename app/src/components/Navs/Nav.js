import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavMen from "./NavMen";
import NavWomen from "./NavWomen";
import logo from "../../Images/weblogo1.jpg";

function Nav() {
  return (
    <>
      <div className="navbar  navbar-expand-sm navbar-dark bg-dark">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item ">
            <a className="nav-link pl-5">FREE SHIPPING </a>
          </li>
          <li className="nav-item">
            <a className="nav-link pl-5">FREE 30 DAYS RETURN </a>
          </li>
          <li className="nav-item">
            <a className="nav-link pl-5">EXPRESS DELIVERY </a>
          </li>
        </ul>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand" href="#">
          <img src={logo} alt="NaviShopper" />{" "}
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link" href="#">
                NEW! <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item ">
              <Link class="nav-link " to="/men" id="navmen" href="#">
                MEN{" "}
              </Link>
              <NavMen />
            </li>
            <li className="nav-item dropdown">
              <Link class="nav-link" to="/women" id="navwoman" href="#">
                WOMEN{" "}
              </Link>
              <NavWomen />
            </li>
            <li className="nav-item">
              <Link to="/wholesale" className="nav-link " href="#" tabIndex="-1" aria-disabled="true">
                SALES
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/login" className="nav-link" href="#">
                MY ACCOUNT
              </Link>
            </li>
            <li id="shopping-bag" className="nav-item ">
              <Link to="/" className="nav-link" href="#">
                <i id="shopping-bag" className="fa fa-shopping-bag " aria-hidden="true">
                  (0)
                </i>
              </Link>
            </li>
          </ul>
        </div>
        {/* <div id="cart" className=" bg-dark float-left">
          <ul>
            <li>
              <ul>
                <li>Image</li>
                <li>Item</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>Image</li>
                <li>Item</li>
              </ul>
            </li>
            <hr />
            <div id="total">
              <form>
                <button type="submit">Checkout</button>
              </form>
            </div>
          </ul>
        </div> */}
      </nav>
    </>
  );
}

export default Nav;
