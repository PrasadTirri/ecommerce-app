import React, { useState } from "react";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

const title = "Our Products";
import image01 from "../assets/images/categoryTab/01.jpg";
import image02 from "../assets/images/categoryTab/02.jpg";
import image03 from "../assets/images/categoryTab/03.jpg";
import image04 from "../assets/images/categoryTab/04.jpg";
import image05 from "../assets/images/categoryTab/05.jpg";
import image06 from "../assets/images/categoryTab/06.jpg";
import image07 from "../assets/images/categoryTab/07.jpg";
import image08 from "../assets/images/categoryTab/08.jpg";

const ProductData = [
  {
    imgUrl: image01,
    cate: "Shoes",
    title: "Nike Premier X",
    author: "assets/images/course/author/01.jpg",
    brand: "Nike",
    price: "$199.00",
    id: 1,
  },
  {
    imgUrl: image02,
    cate: "Bags",
    title: "Asthetic Bags",
    author: "assets/images/course/author/02.jpg",
    brand: "D&J Bags",
    price: "$199.00",
    id: 2,
  },
  {
    imgUrl: image03,
    cate: "Phones",
    title: "iPhone 12",
    author: "src/assets/images/categoryTab/brand/apple.png",
    brand: "Apple",
    price: "$199.00",
    id: 3,
  },
  {
    imgUrl: image04,
    cate: "Bags",
    title: "Hiking Bag 15 Nh100",
    author: "assets/images/course/author/04.jpg",
    brand: "Gucci",
    price: "$199.00",
    id: 4,
  },
  {
    imgUrl: image05,
    cate: "Shoes",
    title: "Outdoor Sports Shoes",
    author: "assets/images/course/author/05.jpg",
    brand: "Nike",
    price: "$199.00",
    id: 5,
  },
  {
    imgUrl: image06,
    cate: "Beauty",
    title: "COSRX Snail Mucin",
    author: "assets/images/course/author/06.jpg",
    brand: "Zaara",
    price: "$199.00",
    id: 6,
  },
  {
    imgUrl: image07,
    cate: "Bags",
    title: "Look Less Chanel Bag",
    author: "assets/images/course/author/01.jpg",
    brand: "Gucci",
    price: "$199.00",
    id: 7,
  },
  {
    imgUrl: image08,
    cate: "Shoes",
    title: "Casual Sneakers",
    author: "assets/images/course/author/02.jpg",
    brand: "Bata",
    price: "$199.00",
    id: 8,
  },
];

const CategoryShowCase = () => {
  const [items, setItems] = useState(ProductData);

  const filterItem = (categItem) => {
    const updatedItem = ProductData.filter((currElem) => {
      return currElem.cate === categItem;
    });
    setItems(updatedItem);
  };

  return (
    <div className="course-section style-3 padding-tb">
      {" "}
      <div>
        {/* <img
          className="source-shape one"
          src="/src/assets/images/shape-img/icon/01.png"
          alt=""
        /> */}
      </div>
      <div>
        {/* <img
          className="source-shape two"
          src="/src/assets/images/shape-img/icon/02.png"
          alt=""
        /> */}
      </div>
      <div className="container">
        <div className="section-header">
          <h2 className="title">{title}</h2>
          <div className="course-filter-group">
            <ul className="lab-ul">
              <li onClick={() => setItems(ProductData)}>All</li>
              <li onClick={() => filterItem("Shoes")}>Shoes</li>
              <li onClick={() => filterItem("Bags")}>Bags</li>
              <li onClick={() => filterItem("Phones")}>Phones</li>
              <li onClick={() => filterItem("Beauty")}>Beauty</li>
            </ul>
          </div>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 course-filter">
            {items.map((items, index) => {
              return (
                <div className="col" key={index}>
                  <div className="course-item style-4">
                    <div className="course-inner">
                      <div className="course-thubm">
                        <img src={items.imgUrl} alt="" />
                        <div className="course-category">
                          <div className="course-cate">
                            <a href="">{items.cate}</a>
                          </div>
                          <div className="course-review">
                            <Rating />
                          </div>
                        </div>
                      </div>
                      <div className="course-content">
                        <Link to={`/shop/${items.id}`}>
                          <h6>{items.title}</h6>
                        </Link>
                        <div className="course-footer">
                          <div className="course-author">
                            <Link to="/" className="ca-name">
                              {items.brand}
                            </Link>
                          </div>
                          <div className="course-price">{items.price}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowCase;
