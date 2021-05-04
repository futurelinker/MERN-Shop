import './Product.css'
import {Link} from 'react-router-dom'

const Product = ({productId, name, imageUrl, description, price}) => {
  return (
    <div className="product">
      <img
        src={imageUrl}

        alt="Product name"
      />
      <div className="product__info">
        <div className="info__name">Product Name</div>
        <p className="info__description">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptatum sint asperiores. Architecto aut ipsam, ducimus esse quasi corporis animi nihil, in, modi blanditiis eos impedit corrupti possimus vitae nulla.
        </p>
        <p className="info__price">$49.99</p>
        <Link to="/product/1" className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product

