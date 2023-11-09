import "./all.css";
import React from "react";

export default function Header() {
  React.useEffect(() => {
    window.onresize = (ev) => {
      let input = document.querySelector("input");
      if (window.screen.width > 1000) {
      }
    };
  }, []);

  return (
    <>
      <div className="header">
        <img
          src={
            "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png"
          }
          alt=""
        />

        <div className="items">
          <label htmlFor="check">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 9C13.1046 9 14 8.10457 14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7C10 8.10457 10.8954 9 12 9Z"
                fill="currentColor"
              />
              <path
                d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                fill="currentColor"
              />
              <path
                d="M12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                fill="currentColor"
              />
            </svg>
          </label>
          <input type="checkbox" id="check" />
          <div className="item">
            <a href="#chooseUs">Why Choose Us?</a>
            <a href="#exploreMenu">Explore Menu</a>
            <a href="#payment">Delivery & Payment</a>
            <a href="#follow">Follow Us</a>
          </div>
        </div>
      </div>
    </>
  );
}
