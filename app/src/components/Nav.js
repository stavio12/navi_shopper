import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/weblogo1.jpg";

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
            <li className="nav-item dropdown">
              <Link to="/men" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                MEN
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link to="/women" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                WOMEN
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/wholesale" className="nav-link " href="#" tabIndex="-1" aria-disabled="true">
                WHOLESALE
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
              <Link to="/" className="nav-link" href="#">
                MY ACCOUNT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" href="#">
                <i className="fa fa-shopping-bag " aria-hidden="true">
                  (0)
                </i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
