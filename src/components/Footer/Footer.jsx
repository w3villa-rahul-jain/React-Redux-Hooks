import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-parts">
          <div className="category">
              <h3>category</h3>
              <span>Women</span>
              <span>Men</span>
              <span>Shoes</span>
              <span>Accessories</span>
              <span>New Arrivals</span>
          </div>
          <div className="category">
              <h3>Links</h3>
              <span>FAQ</span>
              <span>Pages</span>
              <span>Stores</span>
              <span>Compare</span>
              <span>Cookies</span>
          </div>
          <div className="about">
              <h3>ABOUT</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur totam dignissimos itaque tempore provident sequi repellat, dicta modi? Iure, impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, harum.</p>
          </div>
          <div className="about">
              <h3>CONTACT</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur totam dignissimos itaque tempore provident sequi repellat, dicta modi? Iure, impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, harum.</p>
          </div>
        </div>
      </div>
    </>
  );
}
