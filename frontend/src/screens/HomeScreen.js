import "./HomeScreen.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Product from "../components/Product";

// Actions
// 4. Import actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  // 1. create dispatch
  const dispatch = useDispatch();
  // 2. get products
  const getProducts = useSelector((state) => state.getProducts);
  const { products, isLoading, error } = getProducts;
  // 3. useEffect each time page loads
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="home-screen">
      <h1 className="home-screen__title">Latest products</h1>
      <div className="home-screen__products">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
