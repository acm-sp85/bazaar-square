import React from "react";
import "../styles/CategoryCard.css";
import useHandleClickType from "./useHandleClickType";

function ItemTypesCarousel() {
  return (
    <div className="carousel__card">
      <div className="category__card" onClick={useHandleClickType(1, "Sell")}>
        Sell
      </div>
      <div className="category__card" onClick={useHandleClickType(2, "Trade")}>
        Trade
      </div>
      <div className="category__card" onClick={useHandleClickType(3, "Borrow")}>
        Borrow
      </div>
      <div className="category__card" onClick={useHandleClickType(4, "Donate")}>
        Donate
      </div>
    </div>
  );
}

export default ItemTypesCarousel;
