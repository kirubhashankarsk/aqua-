import React, { useState } from "react";
import "./Ex2.css";
const Ex2 = () => {
  const [cartItem, setCartItem] = useState({
    id: 1,
    title: "Wireless Mouse",
    price: 500,
    qty: 1
  });

  const [isMember, setIsMember] = useState(true);

  const decreaseQty = () => {
    if (cartItem.qty > 1) {
      setCartItem({ ...cartItem, qty: cartItem.qty - 1 });
    }
  };
  const increaseQty = () => {
    setCartItem({ ...cartItem, qty: cartItem.qty + 1 });
  };

  const toggleMembership = () => {
    setIsMember(!isMember);
  };

  const finalPrice = isMember
    ? cartItem.price * 0.90
    : cartItem.price;

  return (
    <div>
        <center>
        <div className="AA">
      <h2>{cartItem.title}</h2>
      <p>Price: ₹{cartItem.price}</p>

      <button onClick={decreaseQty}>-</button>
      <span> {cartItem.qty} </span>
      <button onClick={increaseQty}>+</button>

      <br /><br />

      <button onClick={toggleMembership}>
        Add Membership
      </button>

      {cartItem.qty > 5 && (
        <p>Free Shipping!</p>
      )}


      <h3>
        {isMember ? "Offer Price: " : "Normal Price: "}
        ₹{finalPrice}
      </h3>
      </div>
      </center>
    </div>
  );
};

export default Ex2;