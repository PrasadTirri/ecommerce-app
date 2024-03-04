import React from "react";
import { Link } from "react-router-dom";
import image01 from "../assets/images/category/01.jpg";
import image02 from "../assets/images/category/02.jpg";
import image03 from "../assets/images/category/03.jpg";
import image04 from "../assets/images/category/04.jpg";
import image05 from "../assets/images/category/05.jpg";
import image06 from "../assets/images/category/06.jpg";

const subTitle = "Choose Any Procducts";
const title = "Buy Everything from Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: image01,
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "DSLR Camera",
  },
  {
    imgUrl: image02,
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Shoes",
  },
  {
    imgUrl: image03,
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Photography",
  },
  {
    imgUrl: image04,
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Formal Dress",
  },
  {
    imgUrl: image05,
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Colorful Bags",
  },
  {
    imgUrl: image06,
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Home Decor",
  },
];

const HomeCategory = () => {
  return (
    <div className="category-section style-4 padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
          <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-md-3 row cols-sm-2 row-cols-1">
              {categoryList.map((val, index) => (
                <div key={index} className="col">
                  <Link to="/shop" className="category-item">
                    {" "}
                    <div className="category-inner">
                      <div className="category-thumb">
                        <img src={val.imgUrl} alt="" />
                      </div>
                      <div className="category-content">
                        <div className="cate-icon">
                          <i className={ValidityState.iconName}></i>
                        </div>
                        <Link to="./shop"> {val.title}</Link>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-5">
              <Link to="/shop" className="lab-btn">
                <span>{btnText}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
