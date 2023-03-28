import React from 'react';
import './product.css'

const Product = (props) => {
console.log(props.product);

    const { name, id, img, price, quantity, ratings, seller, stock } = props.product;
    return (
      <div className="product">
        <img src={img} alt="" />
        <h5>Product Name: {name}</h5>
        <h4>Price: {price}</h4>
      </div>
    );
};
export default Product;
