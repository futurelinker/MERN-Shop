import React from "react";
import {Link} from 'react-router-dom'
import "./SideDrawer.css";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["side-drawer"];
  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join(" ")}>
      {/* Links */}
      <ul className="side-drawer__links" onClick={click}>
        <li>
          <Link to="/cart" className="side-drawer__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="side-drawer__badge">0</span>
            </span>
          </Link>
        </li>
        <li className="">
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;