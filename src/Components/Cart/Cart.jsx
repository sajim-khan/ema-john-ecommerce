import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash , faArrowRight} from "@fortawesome/free-solid-svg-icons";

const Cart = ({cart}) => {
  //const cart = props.cart; // option 1
  //const {cart} = props; // option 2
  
  console.log(cart);
  
  let total = 0;
  for (const product of cart){
    total = total + product.price
  }
  
  
  return (
    <div className="cart">
      <h5 className="title">Order summery</h5>
      <div className="item">
        <p className="Items">Selected Items: {cart.length}</p>
        <p className="price">Total Price: ${ total}</p>
        <p className="shipping-charge">Total Shipping Charge: $</p>
        <p className="tax">Tax: $</p>
        <h6 className="total">Grand Total: $</h6>
      </div>
      <button className="clear-button">
        Clear Cart <FontAwesomeIcon icon={faTrash} />
      </button>
      <button className="order-button">
        Review Order <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Cart;
