import "./CartScreen.css";

// Components
import CartItem from "../components/CartItem";

const CartScreen = () => {
  return (
    <div className="cart-screen">
      <div className="cart-screen__left">
        <h2>Shopping Cart</h2>

        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="cart-screen__right">
        <div className="cart-screen__info">
          <p>Subtotal (0) items</p>
          <p>$499.99</p>
        </div>
        <div>
          <button>Proceeed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
