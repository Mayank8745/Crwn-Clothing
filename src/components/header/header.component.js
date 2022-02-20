import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../assests/crown.svg";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCardhidden } from "../../redux/cart/cart.selectors";

import CartIcon from "../cart-icon/cart-icon.component";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionsLink,
} from "./header.styles.jsx";

import Cart from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer>
      <OptionsLink to="/shop">
        <h2>Shop</h2>
      </OptionsLink>

      <OptionsLink to="/contact">
        <h2>Contact</h2>
      </OptionsLink>

      {currentUser ? (
        <OptionsLink
          as="div"
          onClick={() => {
            auth.signOut();
          }}
        >
          <h2>Sign Out</h2>
        </OptionsLink>
      ) : (
        <OptionsLink to="/signup">
          <h2>Sign Up/Sign In</h2>
        </OptionsLink>
      )}

      <CartIcon />
    </OptionsContainer>

    {hidden ? null : <Cart />}
  </HeaderContainer>
);

const mapToStateProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCardhidden,
});

export default connect(mapToStateProps)(Header);
