import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart }) => {
  //const cart = props.cart; // option 1
  //const {cart} = props; // option 2

  console.log(cart);

  let total = 0;
  let totalShipping = 0;
  for (const product of cart) {
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
  }

  const tax = (total * 7) / 100;

  const grandTotal = total + totalShipping + tax;

  return (
    <div className="cart">
      <h5 className="title">Order summery</h5>
      <div className="item">
        <p className="Items">Selected Items: {cart.length}</p>
        <p className="price">Total Price: ${total}</p>
        <p className="shipping-charge">
          Total Shipping Charge: ${totalShipping}
        </p>
        <p className="tax">Tax: ${tax.toFixed(2)}</p>
        <h6 className="total">Grand Total: ${grandTotal.toFixed(2)}</h6>
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
