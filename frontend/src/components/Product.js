import './Product.css'
import { Link } from 'react-router-dom'

const Product = ({imageUrl, name, price, description, productId}) => {
  // console.log(productId)
  return (
    <div className="product">
      <img
        src={imageUrl}
        alt={name}
      />
      <div className="product__info">
        <div className="info__name">{name}</div>
        <p className="info__description">{description}...</p>
        <p className="info__price">${price}</p>
        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
}

export default Product

