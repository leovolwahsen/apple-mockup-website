import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";

export default function Jumbotron() {
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img src={Iphone} alt="IPhone14 pro" className="logo" />
      <p className="text">Big and bigger.</p>
      <span className="description">
        From $699 or $29.12/mo.per month for 24 mo.*
      </span>
      <ul className="links">
        <li>
            <button className="button">Buy</button>
        </li>
        <li>
            <a className="link" href={HoldingIphone} >Learn more</a>
        </li>
      </ul>
    </div>
  );
}
