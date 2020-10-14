import React, { useEffect, useState } from "react";
import white from "../../Images/1.jpg";

function Menviewed() {
  const [qty, getQty] = useState();
  const [colors, getColors] = useState();
  const [size, getSize] = useState();

  const addToCart = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div id="viewContainer">
        <div className="row">
          <div className="col-2 col-sm-2 col-md-2 col-lg-2">
            <ul>
              <li>
                <img src={white} className="viewimage pt-5" />
              </li>
              <li>
                <img src={white} className="viewimage pt-5" />
              </li>
              <li>
                <img src={white} className="viewimage pt-5" />
              </li>
            </ul>
          </div>

          <div className="col-3 col-sm-3 col-md-3 col-lg-3">
            <img src={white} className="viewMain" />
          </div>

          <div className="product ">
            <div className="col-6 col-sm-6 col-md-6 col-lg-6 offset-11">
              <small className="disabled ">Product Code: TT4002</small>
              <h4 className="pt-2">100% cotton water proof wu tirisu!</h4>
              <div className="pt-3">
                <strike className="disabled">
                  {" "}
                  <small>$18.99</small>{" "}
                </strike>
                <small className="px-3">$13.99</small>
                <small className="disabled">Final Sale</small>
              </div>
              <div className="stars pt-5">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <small>(125 reviews)</small>
                <hr />
              </div>
              <form onSubmit={addToCart}>
                <div class="form-group">
                  <h5>
                    QTY
                    <select id="inputState" class="form-control">
                      <option selected onChange={(e) => getQty(e.target.value)}>
                        1
                      </option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </h5>
                  <hr />
                </div>
                <div id="colors">
                  <h5>COLORS</h5>
                  <ul>
                    <li className="red"></li>
                    <li className="white"></li>
                    <li className="blue"></li>
                  </ul>
                  <hr />
                </div>

                <div className="size">
                  <h5>SIZE</h5>
                  <ul>
                    <li className="btn btn-light"> small/Medium</li>
                    <li className="btn btn-light"> One Size</li>
                    <li className="btn btn-light"> xxx-Large</li>
                  </ul>
                  <hr />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                  Add To Cart
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menviewed;
