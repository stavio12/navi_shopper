import React, { useEffect } from "react";

function Footer() {
  return (
    <>
      <div className="bg-dark footer  justify-content-center text-secondary">
        <hr />
        <div className="w-100">
          <ul className=" ml-auto about">
            <li>About</li>
            <li className=" ">
              <a className=" pl-5">Privacy </a>
            </li>
            <li className="">
              <a className=" pl-5">Terms of use </a>
            </li>
            <li className="">
              <a className=" pl-5">Our Company </a>
            </li>
          </ul>
        </div>
        <div className="w-100">
          <ul className=" ml-auto connect">
            <li>Conact</li>{" "}
            <li className=" ">
              <a className=" pl-5">Customer Service</a>
            </li>
            <li className="">
              <a className=" pl-5">Track Order </a>
            </li>
            <li className="">
              <a className=" pl-5">Return order</a>
            </li>
          </ul>
        </div>

        <div className="w-100">
          <ul className=" ml-auto subscribe">
            <li>Connect</li>{" "}
            <li className=" ">
              <a className=" pl-5">Email Newsletter </a>
            </li>
            <li className="">
              <a className=" pl-5">
                <i className="fa fa-facebook" aria-hidden="true">
                  {" "}
                  Facebook
                </i>
              </a>
            </li>
            <li className="">
              <a className=" pl-5">
                <i className="fa fa-twitter" aria-hidden="true"></i> Twitter
              </a>
            </li>
            <li className="">
              <a className=" pl-5">
                <i className="fa fa-instagram" aria-hidden="true"></i> Instagram
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Footer;
