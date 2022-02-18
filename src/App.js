import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getDoc } from "firebase/firestore";
import { createStructuredSelector } from "reselect";

import Header from "./components/header/header.component";
import HomePage from "./pages/homePage/homePage.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Checkout from "./pages/checkout/checkout";
import { auth, createUserProfile } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user-actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import "./App.css";

const ContactPage = () => (
  <div>
    <h1>Contact Page</h1>
  </div>
);

class App extends React.Component {
  unsuscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsuscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) {
        const userRef = await createUserProfile(user);
        const snapShot = await getDoc(userRef);
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data(),
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route exact path="/contact" component={ContactPage}></Route>
          <Route
            exact
            path="/signup"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          ></Route>
          <Route exact path="/checkout" component={Checkout}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
