import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toogleCartDrop } from "../../redux/cart/cart-actions";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item in dropdown/cartItem";
import "./cart-dropdown.styles.css";

const Cart = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your Cart is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toogleCartDrop());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapsStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartDrop: () => dispatch(toogleCartDrop()),
// });

export default withRouter(connect(mapsStateToProps)(Cart));
