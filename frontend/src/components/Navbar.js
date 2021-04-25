// rafce create react arrow function
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ click }) => {
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
              <span className="cartlogo__badge">0</span>
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
