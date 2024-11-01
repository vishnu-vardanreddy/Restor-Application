import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

// Provide a default value that matches the shape of your context
export const StoreContext = createContext({
  food_list: [],
});

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
      if (updatedCart[itemId] <= 0) delete updatedCart[itemId]; // Remove item if quantity is 0
      return updatedCart;
    });
  };

  // Log changes to cartItems in the console
  useEffect(() => {
    console.log("Cart Items:", cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list: Array.isArray(food_list) ? food_list : [],
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
