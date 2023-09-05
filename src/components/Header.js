import React, { useState } from 'react'
import { Outlet, NavLink } from "react-router-dom";
function Header() {
  const [isNavbarMobile, setIsNavbarMobile] = useState(false);

  // Toggle mobile nav
  const handleMobileNavToggle = () => {
    setIsNavbarMobile((prevState) => !prevState);
  };

    // Activate mobile nav dropdowns
    // const handleDropdownClick = (e) => {
    //   if (isNavbarMobile) {
    //     e.preventDefault();
    //     e.target.nextElementSibling.classList.toggle('dropdown-active');
    //   }
    // };

  return (
    <header id="header" className="fixed-top header-scrolled">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto"><NavLink to="/">Arsha</NavLink></h1>
      <nav id="navbar" className={isNavbarMobile ? 'navbar-mobile' : 'navbar'}>
        <ul>
          <li><NavLink className="nav-link scrollto " to="/">Home</NavLink></li>
          <li><NavLink className="nav-link scrollto" to="/about">About</NavLink></li>
          <li><NavLink className="nav-link scrollto" to="/services">Services</NavLink></li>
          <li><NavLink className="nav-link   scrollto" to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink className="nav-link scrollto" to="/team">Team</NavLink></li>
          <li><NavLink className="nav-link scrollto" to="/contact">Contact</NavLink></li>
          <li><NavLink className="getstarted scrollto" to="/about">Get Started</NavLink></li>
        </ul>
        <i className={`mobile-nav-toggle ${isNavbarMobile ? 'bi-x' : 'bi-list'}`}
        onClick={handleMobileNavToggle}></i>
      </nav>
      <Outlet />
    </div>
  </header>
  )
}

export default Header