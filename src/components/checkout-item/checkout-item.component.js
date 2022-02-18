import React from "react";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart-actions";
import "./checkout-item.styles.css";

const CheckoutItem = ({ item, removeItemFromCart, addItem, removeItem }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={item.imageUrl} alt="item" />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <span
          style={{ cursor: "pointer", fontWeight: "bold", fontSize: "20px" }}
          onClick={() => addItem(item)}
        >
          &#10094;&nbsp;
        </span>
        {item.quanity}
        <span
          style={{ cursor: "pointer", fontWeight: "bold", fontSize: "20px" }}
          onClick={() => removeItem(item)}
        >
          &nbsp;&#10095;
        </span>
      </span>
      <span className="price">{item.price}</span>
      <span className="remove-button" onClick={() => removeItemFromCart(item)}>
        &#10006;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
