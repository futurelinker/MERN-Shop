import "./CartScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

// Components
import CartItem from "../components/CartItem";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty)+ qty, 0)
  }

  const getCartSubtotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0)
  }

  return (
    <div className="cart-screen">
      <div className="cart-screen__left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Youre cart is empty <Link to="/">Go back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeHandler}
            />
          ))
        )}
      </div>
      <div className="cart-screen__right">
        <div className="cart-screen__info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>${getCartSubtotal().toFixed(2)}</p>
        </div>
        <div>
          <button>Proceeed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
