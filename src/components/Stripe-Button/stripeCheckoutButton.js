import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = ; // API OF STRIPE
  const onToken = (token) => {
    console.log(token);
    alert("Payement Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing LTD"
      token={onToken}
      image="https://svgshare.com/i/CUz.svg"
      amount={priceForStripe}
      stripeKey={publishableKey}
      description={`Your total is $${price}`}
      billingAddress
      shippingAddress
    />
  );
};

export default StripeCheckoutButton;
