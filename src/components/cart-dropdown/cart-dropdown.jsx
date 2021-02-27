import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import selectCartItems from "../../redux/cart/cart.selectors";
import "./cart-dropdown.scss";

const CartDropdown = ({ CartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {CartItems.map((cartItem) => (
        <CartItem key={cartItem.id} />
      ))}
    </div>
    <CustomButton> GO TO CHECKOUT </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
