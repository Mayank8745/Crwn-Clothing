import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../assests/crown.svg";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCardhidden } from "../../redux/cart/cart.selectors";

import CartIcon from "../cart-icon/cart-icon.component";
import "./header.styles.css";
import Cart from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        <h2>Shop</h2>
      </Link>
      <Link className="option" to="/contact">
        <h2>Contact</h2>
      </Link>
      {currentUser ? (
        <div
          className="option"
          onClick={() => {
            auth.signOut();
          }}
        >
          <h2>Sign Out</h2>
        </div>
      ) : (
        <Link className="option" to="/signup">
          <h2>Sign Up/Sign In</h2>
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <Cart />}
  </div>
);

const mapToStateProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCardhidden,
});

export default connect(mapToStateProps)(Header);
// export default Header;
