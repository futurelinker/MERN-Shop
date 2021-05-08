import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img src={item.imageUrl} alt="Product name" />
      </div>
      <Link to={`/product/${item.product}`} className="cart-item__name">
        <p>{item.name}</p>
      </Link>

      <p className="cart-item__price">{item.price}</p>

      <select
        name=""
        id=""
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cart-item__select"
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>

      <button
        onClick={() => removeHandler(item.product)}
        className="cart-item__deleteBtn"
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
