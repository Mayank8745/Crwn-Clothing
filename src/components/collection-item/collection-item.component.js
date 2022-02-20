import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";

import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.css";

const CollectionItem = ({ addItemsToCart, item }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
        <CustomButton
          className="custom-button"
          inverted
          onClick={() => addItemsToCart(item)}
        >
          Add To Cart
        </CustomButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemsToCart: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
