import React from "react";
import "../styles/CategoryCard.css";
import useHandleClickLocation from "./useHandleClickLocation";

function AreasCarousel() {
  return (
    <div className="carousel__card">
      <div
        className="category__card"
        onClick={useHandleClickLocation(1, "Manhattan")}
      >
        <img
          className="image"
          src="https://www.freevector.com/uploads/vector/preview/26024/Manhattan1.jpg"
        />
      </div>
      <div
        className="category__card"
        onClick={useHandleClickLocation(2, "Brooklyn")}
      >
        <img
          className="image"
          src="https://www.freevector.com/uploads/vector/preview/25561/Brooklyn2.jpg"
        />
      </div>
      <div
        className="category__card"
        onClick={useHandleClickLocation(3, "Queens")}
      >
        <img
          className="image"
          src="https://st2.depositphotos.com/2606429/9825/v/600/depositphotos_98252144-stock-illustration-vintage-t-shirt-sticker-emblem.jpg"
        />
      </div>
      <div
        className="category__card"
        onClick={useHandleClickLocation(4, "Bronx")}
      >
        <img
          className="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1bu2cpHtehffbfQuEbeBJ443NhhGo_nWAig&usqp=CAU"
        />
      </div>
      <div
        className="category__card"
        onClick={useHandleClickLocation(5, "Staten Island")}
      >
        <img
          className="image"
          src="https://st2.depositphotos.com/2606429/9825/v/950/depositphotos_98252228-stock-illustration-vintage-t-shirt-sticker-emblem.jpg"
        />
      </div>
    </div>
  );
}

export default AreasCarousel;
