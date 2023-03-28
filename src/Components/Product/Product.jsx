import React from 'react';
import './product.css'

const Product = (props) => {
console.log(props.product);

    const { name, id, img, price, quantity, ratings, seller, stock } = props.product;
    const handelAddToCart = props.handelAddToCart;
    
    return (
      <div className="product">
        <img src={img} alt="" />
        <h6 className="product-name">{name}</h6>
        <h4 className="product-price">Price: ${price}</h4>
        <p className="product-manufacturer">Manufacturer: {seller}</p>
        <p className="product-rating">Rating: {ratings}</p>
        <button onClick={() => handelAddToCart(props.product)} className="cart-button">
          Add to Cart
        </button>
      </div>
    );
};
export default Product;
