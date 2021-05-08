// rafce create react arrow function
import "./Navbar.css";
import { Link } from "react-router-dom";

import { useSelector } from 'react-redux'

const Navbar = ({ click }) => {

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
  }

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <h2>MERN Shop</h2>
      </div>

      {/* Links */}
      <ul className="navbar__links">
        <li className="">
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li className="">
          <Link to="/">Shop</Link>
        </li>
      </ul>

      {/* Mobile menu */}
      <div className="mobile-menu" onClick={click}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
