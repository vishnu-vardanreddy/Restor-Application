import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext.jsx";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  const subtotal = food_list.reduce((total, item) => {
    if (cartItems[item._id] > 0) {
      return total + item.price * cartItems[item._id];
    }
    return total;
  }, 0);

  const deliveryFee = subtotal > 0 ? 5.0 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-items-title">
          {" "}
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price.toFixed(2)}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="remove-btn"
                    aria-label={`Remove ${item.name} from cart`} /* Added aria-label for accessibility */
                    style={{
                      borderRadius: "50%",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      border: "none", // Added to remove default button border
                      backgroundColor: "#ff4444", // Added for better visibility
                      color: "white", // Added for better visibility
                    }}
                  >
                    ×
                  </button>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery Fees</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>
          <div className="cart-total-details">
            <b>Total</b>
            <b>${total.toFixed(2)}</b>
          </div>
        </div>
        <div className="checkout-button-container">
          <button className="proceed-to-checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
