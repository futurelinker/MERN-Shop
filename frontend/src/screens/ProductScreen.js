import './ProductScreen.css'

import React from 'react'

const ProductScreen = () => {
  return (
    <div className="product-screen">
      <div className="product-screen__left">
        <div className="left__image">
          <img
            src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            alt="Product name"
          />
        </div>
          <div className="left__info">
            <p className="left__name">
              Product 1
            </p>
            <p className="left__price">
              Price: $499.99
            </p>
            <p className="left__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quidem sapiente accusantium maiores voluptatum cupiditate. Deserunt, tempore nisi quos dolor iusto vel iste ipsa quia libero veniam ea pariatur consequuntur.
            </p>
          </div>
      </div>
      <div className="product-screen__right">
        <div className="right__info">
          <p>Price: <span>$499.99</span></p>
          <p>Stock: <span>In Stok</span></p>
          <p>Qty
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen
