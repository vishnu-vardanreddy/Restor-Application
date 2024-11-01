import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import PropTypes from "prop-types";

const FoodDisplay = ({ category }) => {
  const { food_list = [] } = useContext(StoreContext) || {};

  if (!Array.isArray(food_list)) {
    return (
      <div className="food-display" id="food-display">
        <h2>Top Dishes Near You</h2>
        <div className="food-display-list">
          <p>No dishes available at the moment. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.length === 0 ? (
          <p>No dishes found in this category.</p>
        ) : (
          food_list.map((item, index) => (
            <FoodItem
              key={item._id || index} // Prefer using item._id if available
              id={item._id}
              name={item.name || "Unnamed Dish"}
              description={item.description || "No description available"}
              price={item.price || 0}
              image={item.image || "/placeholder-food-image.jpg"}
            />
          ))
        )}
      </div>
    </div>
  );
};

FoodDisplay.propTypes = {
  category: PropTypes.string.isRequired,
};

export default FoodDisplay;
