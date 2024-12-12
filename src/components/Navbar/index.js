/*import { useState } from "react";

import { IoMdSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";


state = {open : true};
const handleClick = () => {
  setOpen(!open);
};



const Header = () => (
  <>
    <nav className="NavbarItems">
      <h3 className="logo">
        <i className="fab fa-react">LOGO</i>
      </h3>
      <div className="Hamburger-Cross-Icons" onClick={handleClick}>
        <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={open ? "MenuItems active" : "MenuItems"}>
        
            <li >
            <IoMdSearch />
            </li>
            <li >
            <CiHeart />
            </li>
            <li >
            <IoBagOutline />
            </li>
            <li >
            <IoPersonOutline />
            </li>
            <li >
            <select>
            <option value="eng">ENG</option>
            <option value="hnd">HND</option>
            
          </select>
            </li>
            
         
      </ul>
    </nav>
    <div>
      
      <div>
        <IoMdSearch />
        <CiHeart />
        <IoBagOutline />
        <IoPersonOutline />
        <a>ENG</a>
        <FaAngleDown />
      </div>
    </div>
    <div>
      <p>SHOP</p>
      <p>SKILLS</p>
      <p>STORIES</p>
      <p>ABOUT</p>
      <p>CONTACT US</p>
    </div>
  </>
);
export default Header;
*/
// Navbar.js
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import TopHead from "../TopHead/";
import "./index.css"; // Import CSS for styling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <TopHead/>
          <div className="navbar-container2">

            <img className="logo-img" src = "https://banner2.cleanpng.com/20181205/spc/kisspng-celtic-knot-triquetra-celts-rubber-stamping-celtic-knot-silhouette-in-shape-free-image-5c08a189c1bd81.8044345715440695137936.jpg"/>
            <h1>Logo</h1>
            
            <div className="logo-icons">
              <  IoMdSearch />
              <CiHeart />
              <IoBagOutline />
              <IoPersonOutline />
              <select>
            <option value="eng">ENG</option>
            <option value="hin">HIN</option>
            
          </select>
              
            </div>
          </div>
          
        </div>
        <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li className="lis"><a className="lis">SHOP</a></li>
          <li className="lis"><a>SKILLS</a></li>
          <li className="lis"><a>STORIES</a></li>
          <li className="lis"><a>ABOUT</a></li>
          <li className="lis"><a>CONTACT US</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

