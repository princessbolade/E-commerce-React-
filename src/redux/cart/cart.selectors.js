import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const SelectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [SelectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, CartItem) =>
        accumulatedQuantity + CartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([SelectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, CartItem) =>
      accumulatedQuantity + CartItem.quantity * CartItem.price,
    0
  )
);
