import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img
          src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          alt="Product name"
        />
      </div>
        <Link to={`/product/${1}`} className="cart-item__name">
          <p>Product 1</p>
        </Link>

        <p className="cart-item__price">$499.99</p>

        <select name="" id="" className="cart-item__select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <button className="cart-item__deleteBtn">
          <i className="fas fa-trash"></i>
        </button>
    </div>
  );
};

export default CartItem;
