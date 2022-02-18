import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../assests/shopping-bag.svg";
import { toogleCartDrop } from "../../redux/cart/cart-actions";
import { selectedItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import "./cart-icon.styles.css";

const CartIcon = ({ toogleCartDrop, noOfItems }) => {
  return (
    <div className="cart-icon" onClick={() => toogleCartDrop()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{noOfItems}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  noOfItems: selectedItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toogleCartDrop: () => dispatch(toogleCartDrop()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
