import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { SelectCartItems } from "../../redux/cart/cart.selectors";
import "./cart-dropdown.scss";

const CartDropdown = ({ CartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {CartItems.length ? (
        CartItems.map((cartItem) => <CartItem key={cartItem.id} />)
      ) : (
        <span className="empty-message">Your Cart is empty</span>
      )}
    </div>
    <CustomButton onClick={() => history.push("/checkout")}>
      {" "}
      GO TO CHECKOUT{" "}
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: SelectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
