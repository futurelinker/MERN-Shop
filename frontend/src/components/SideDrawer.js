import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'


import "./SideDrawer.css";

const SideDrawer = ({ show, click }) => {
  
  const sideDrawerClass = ["side-drawer"];
  if (show) {
    sideDrawerClass.push("show");
  }

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  return (
    <div className={sideDrawerClass.join(" ")}>
      {/* Links */}
      <ul className="side-drawer__links" onClick={click}>
        <li>
          <Link to="/cart" className="side-drawer__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="side-drawer__badge">{getCartCount()}</span>
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