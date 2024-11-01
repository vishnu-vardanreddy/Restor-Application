import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div
        className="header-contents"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "1.5vw",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2>Order your favourite food</h2>
        <p>
          Discover a culinary haven where every bite tells a story, from
          sizzling grilled masterpieces to delicate desserts crafted with
          passion, all served in an atmosphere that feels like a warm embrace
          from an old friend.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
