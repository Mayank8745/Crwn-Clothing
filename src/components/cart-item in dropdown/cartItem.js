import React from "react";
import "./cart-item.styles.css";

const CartItem = (props) => {
  return (
    <div className="cart-item">
      <img src={props.item.imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{props.item.name}</span>
        <span className="price">
          {props.item.quanity} x ${props.item.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
