import React from "react";
import { connect } from "react-redux";
import {
  cartItemsTotalPrice,
  selectCartItems,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import StripeCheckoutButton from "../../components/Stripe-Button/stripeCheckoutButton";
import "./checkout.styles.css";

const Checkout = (props) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {props.cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">
        <span>{`Total: $${props.TotalPrice}`}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: (Future Dates) - CVV: 123
      </div>
      {props.currentUser ? (
        <StripeCheckoutButton price={props.TotalPrice} />
      ) : (
        <div className="test-warning">*Please Login to Continue Purchase</div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  TotalPrice: cartItemsTotalPrice,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Checkout);
