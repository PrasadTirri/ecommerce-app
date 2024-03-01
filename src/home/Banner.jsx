import React, { useState } from "react";
import productData from "../products.json";
import { Link } from "react-router-dom";
import SelectedItems from "../components/SelectedItems";

const title = (
  <h2>
    Search Your one from <span>Thousand</span> of Products
  </h2>
);
const desc = "We have the largest collection of products";

const bannerList = [
  { iconName: "icofont-users-alt-4", text: "1.5 Million Customers" },
  { iconName: "icofont-notification", text: "More then 2000 Marchent" },
  { iconName: "icofont-globe", text: "Buy Anything Online" },
];

const Banner = () => {
  console.log({ productData });
  const [searchInput, setSearchInput] = useState("");
  const [filterProducts, setFilterProducts] = useState("");

  const handleSearch = (e) => {
    let input = e.target.value;
    setSearchInput(input);
  };

  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectedItems select={"all"} />
            <input
              type="text"
              name="search"
              placeholder="search Your Products"
              value={searchInput}
              onChange={handleSearch}
            />
            <button type="submit">
              <i className="icofont-search-2"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, index) => {
                return (
                  <li key={index}>
                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
