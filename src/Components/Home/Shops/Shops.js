import React, { useEffect, useState } from "react";
import shop_banner from "../../../images/shop-banner.webp";
import Shop from "../Shop/Shop";
import "./Shops.css";

const Shops = () => {
  const [shop, setShop] = useState([]);
  useEffect(() => {
    fetch("shop.json")
      .then((res) => res.json())
      .then((data) => setShop(data));
  }, []);

  return (
    <div>
      <img width={"100%"} height={"600px"} src={shop_banner} alt="" />
      <div>
        <h2 className="section-title">Our Shop</h2>
        <div className="products">
          {shop.map((allShop) => (
            <Shop key={allShop.id} mainShop={allShop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shops;
