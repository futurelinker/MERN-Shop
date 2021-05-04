import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ productId, name, imageUrl, description, price }) => {
  console.log();
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <div className="product__info">
        <div className="info__name">{name}</div>
        <p className="info__description">{description.substring(0, 100)}...</p>
        <p className="info__price">${price}</p>
        <Link
          onClick={ () => {
            console.log(productId);
          }}
          to={`/product/${productId}`}
          className="info__button"
        >
          VIEW
        </Link>
      </div>
    </div>
  );
};

export default Product;
