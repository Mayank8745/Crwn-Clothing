import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  selectCart,
  (cart) => cart.cartItems
);

export const selectedItemsCount = createSelector(selectCartItems, (item) => {
  return item.reduce((subtotal, item) => subtotal + item.quanity, 0);
});

export const selectCardhidden = createSelector(selectCart, (cart) => {
  return cart.hidden;
});

export const cartItemsTotalPrice = createSelector(selectCartItems, (item) => {
  return item.reduce(
    (subtotal, item) => subtotal + item.quanity * item.price,
    0
  );
});
