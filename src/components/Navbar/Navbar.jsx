import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className= "navigation">
        <div className="left-links">
            <ul className="nav-link">
                <Link to="products/1" className="link-item">Men</Link>
                <Link to="products/2" className="link-item">Women</Link>
                <Link to="products/3" className="link-item">Childeren</Link>
            </ul>
        </div>
        <div className="logo">
            <Link to="/" className="nav-brands">STORE</Link>
        </div>
        <div className="right-links">
        <ul className="nav-link">
            <Link to="products/1" className="link-item">HomePage</Link>
            <Link to="products/2" className="link-item">About</Link>
            <Link to="products/3" className="link-item">Contact</Link>
            <Link to="products/4" className="link-item">Stores</Link>
            <div className="cart">
                <span>0</span>    
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
                     
        </ul>
        </div>
    </div>
  )
}
