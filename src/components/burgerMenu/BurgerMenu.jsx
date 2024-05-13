import React, { useState } from "react";
import Logo from "../logo/Logo";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen ? (
        <div className="burgerMenu" onClick={toggleMenu}></div>
      ) : (
        <div className="mobileMenu">
          <div className="mobileMenuHeader">
            <Logo />
            <div className="close" onClick={toggleMenu}></div>
          </div>
          <div className="mobileNav">
            <div className="menuItem mobile">
              <div>Demos</div>
              <div className="path"></div>
            </div>
            <div className="menuItem mobile">
              <div>Post</div>
              <div className="path"></div>
            </div>
            <div className="menuItem mobile">
              <div>Features</div>
              <div className="path"></div>
            </div>
            <div className="menuItem mobile">
              <div>Categories</div>
              <div className="path"></div>
            </div>
            <div className="menuItem mobile">
              <div>Shop</div>
              <div className="path"></div>
            </div>
            <div className="menuItem mobile end">
              <div>Buy Now</div>
              <div className="path"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
