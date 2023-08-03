import React from "react";
import "./Shop.css";

const Shop = ({ mainShop, key }) => {
  const { shopName, shopTitle, img, price } = mainShop;
  return (
    <div key={key} className="shop-product">
      <img src={img} alt="" />
      <h2>{shopName}</h2>
      <p>{shopTitle}</p>
      <h5>Price {price}</h5>
      <button>Shop Now</button>
    </div>
  );
};

export default Shop;
