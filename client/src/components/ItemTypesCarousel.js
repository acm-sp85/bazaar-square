import React from 'react';
import '../styles/CategoryCard.css';
import useHandleClickType from './useHandleClickType';

function ItemTypesCarousel() {
  return (
    <div className="carousel__card">
      <div className="category__card" onClick={useHandleClickType(4, 'Donate')}>
        Donate
        <img
          className="image"
          src="https://media.istockphoto.com/vectors/volunteer-woman-holds-donation-box-with-old-used-clothes-ready-to-be-vector-id1175986554?k=20&m=1175986554&s=612x612&w=0&h=YktsS0HkFhshwv0juQEMt2sZz2VPAdkMiYB6SEutNFU="
        />
      </div>
      <div className="category__card" onClick={useHandleClickType(3, 'Borrow')}>
        Borrow
        <img
          className="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4A1RdQV3H9Bm4jlkmAagWkF9VQKKCl-DdOw&usqp=CAU"
        />
      </div>

      <div className="category__card" onClick={useHandleClickType(2, 'Trade')}>
        Trade
        <img
          className="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqsqK9NK3ySTqEk6TFsbq6U7MO7IWNnH_LA&usqp=CAU"
        />
      </div>
      <div className="category__card" onClick={useHandleClickType(1, 'Sell')}>
        Sell
        <img
          className="image"
          src="https://productmanagementfestival.com/wp-content/uhttps://www.evanshalshaw.com/-/media/evanshalshaw/sell-your-car/hero-banner/sell-your-car.ashx?mh=1440&la=en&h=405&w=720&mw=2560&hash=E5A8EB1BF1C655AFF91BC834AC95FB36ploads/2017/01/sell-your-product-online.jpg"
        />
      </div>
    </div>
  );
}

export default ItemTypesCarousel;
