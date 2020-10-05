import React, { useEffect, useState } from "react";
import WomenItems from "./WomenItems";

//Logos
import gucci from "../../Images/gucci.jpg";
import dc from "../../Images/dc.jpg";
import allstar from "../../Images/allstar.jpg";
import vans from "../../Images/vans.png";
import fila from "../../Images/fila.png";

function Women() {
  const [display, setDisplay] = useState(false);

  const collapse = (e) => {
    setDisplay(!display);
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-4">
              <form className="pt-5 mt-5">
                <div className="form-group row">
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                    {" "}
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" placeholder="Search for item......" id="inputPassword" />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-6 col-md-6 col-lg-8" id="logos">
              <div className="gucci">
                <img src={gucci} alt="gucci" className="rounded " />
                <img src={dc} alt="dc" className="rounded " />
                <img src={allstar} alt="allstar" className="rounded " />
                <img src={fila} alt="fila" className="rounded " />
                <img src={vans} alt="vans" className="rounded " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-center">Men</h3>
      <div className="container menitems">
        <div className="row">
          <div className="d-none d-md-block col-md-3 col-lg-3">
            <div>
              <ul id="features">
                <h3 className="pt-2">Filter</h3>
                <hr />

                <li>Featured</li>
                <li>Shoes</li>
                <li>Apparels</li>
                <li>New Arrivals</li>
              </ul>
            </div>
            <hr className="hr" />
            <div className="colors">
              <ul>
                <div className="pt-2 pb-2">
                  <h6 class="float-left">Color</h6>
                  <h6 onClick={collapse}>
                    <i class="fa fa-minus float-right" aria-hidden="true"></i>
                  </h6>
                </div>

                <hr />
                <div id="colors" className={display ? "d-none" : "d-block"}>
                  <li className="red"></li>
                  <li className="white"></li>
                  <li className="blue"></li>
                </div>
              </ul>
            </div>
            <hr className="hr" />

            <div className="sizes">
              <ul>
                <div className="pt-2 pb-2">
                  <h6 class="float-left">Sizes</h6>
                  <h6 onClick={collapse}>
                    <i class="fa fa-minus float-right" aria-hidden="true"></i>
                  </h6>
                </div>
                <hr />
                <div className={display ? "d-none" : "d-block"}>
                  <li>7</li>
                  <li>7.5</li>
                  <li>8</li>
                  <li className="mx-4">8.5</li>
                </div>
              </ul>
              <div className={display ? "d-none" : "d-block"}>
                <ul className="pt-2">
                  <li>9</li>
                  <li>9.5</li>
                  <li>10</li>
                  <li>10.5</li>
                </ul>{" "}
              </div>
            </div>
            <hr className="hr" />
            <div className="prices">
              <ul>
                <div className="pt-2 pb-2">
                  <h6 class="float-left">Price</h6>
                  <h6 onClick={collapse}>
                    <i class="fa fa-minus float-right" aria-hidden="true"></i>
                  </h6>
                </div>
                <hr />
                <div className={display ? "d-none" : "d-block"}>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      $10 - $30{" "}
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      $31 - $50{" "}
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      $51 - $100{" "}
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      $101+{" "}
                    </label>
                  </div>
                </div>
              </ul>
            </div>
            <hr className="hr" />
          </div>

          <div className="d-md-none">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle pt-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filter{" "}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
            {/* <div>
              <ul id="features">
                <li>Featured</li>
                <li>Shoes</li>
                <li>Apparels</li>
                <li>New Arrivals</li>
              </ul>
            </div>
            <hr />
            <div className="colors">
              <h6>Color</h6>
              <ul>
                <li className="red"></li>
                <li className="white"></li>
                <li className="blue"></li>
              </ul>
            </div>
            <hr />

            <div className="sizes">
              <h6>Sizes</h6>
              <ul>
                <li>7</li>
                <li>7.5</li>
                <li>8</li>
                <li>8.5</li>
                <li>9</li>
                <li>9.5</li>
                <li>10</li>
                <li>10.5</li>
              </ul>
            </div>
            <hr />
            <div className="prices">
              <h6>Price</h6>
              <ul>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    $10 - $30{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    $31 - $50{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    $51 - $100{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    $101+{" "}
                  </label>
                </div>
              </ul>
            </div> */}
          </div>

          <div className="col col-md-9 col-lg-9">
            <h6 className="text-right">
              <div className="dropdown">
                <button className="btn dropdown-toggle border-dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sort By
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">
                    Sort By Newest
                  </a>
                  <a className="dropdown-item" href="#">
                    Sort By Low to High{" "}
                  </a>
                  <a className="dropdown-item" href="#">
                    Sort By High to Low{" "}
                  </a>
                </div>
              </div>
            </h6>
            <WomenItems />
          </div>
        </div>
      </div>
    </>
  );
}

export default Women;
