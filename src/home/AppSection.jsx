import React from "react";
import { Link } from "react-router-dom";
import AppStore from "/src/assets/images/app/01.jpg";
import GoogleStore from "/src/assets/images/app/01.jpg";

const btnText = "Sign up for Free";

const title = "Shop Anytime, Anywhere";
const desc =
  "Take shop on your any device with our App and learn all time want you want. Just download & install & start to learn";

const AppSection = () => {
  return (
    <div className="app-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <Link to="/sign-up" className="lab-btn mb-4">
            {btnText}
          </Link>
          <h2 className="title">{title}</h2>
          <p>{desc}</p>
        </div>

        <div className="section-wrapper">
          <ul className="lab-ul">
            <li>
              <a href="#">
                <img src={AppStore} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={GoogleStore} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
