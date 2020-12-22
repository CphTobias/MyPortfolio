import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const Navbar = ({ color }) => {

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [ showMobileLinks, setShowMobileLinks ] = useState(false);

  const handleMobileLinks = () => {
    setShowMobileLinks(!showMobileLinks);
    if(!showMobileLinks) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  const mobileMenu = () => {
    if (showMobileLinks) {
      return (
          <div className="container">
            <div style={{padding: "20px"}} className="row">
              <div className="col">
                <i onClick={handleMobileLinks} className="pointer navbar-mobilecontainer fas fa-times fa-3x"></i>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ul className={"navbar-mobilelinks-ul"}>
                  <li><a className={"navbar-mobile-link-" + color}
                         onClick={handleMobileLinks} href="#">Home</a></li>
                  <li><a className={"navbar-mobile-link-" + color}
                         onClick={handleMobileLinks} href="#">About</a></li>
                  <li><a className={"navbar-mobile-link-" + color}
                         onClick={handleMobileLinks} href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
      );
    } else {
      return (
          <div className="container">
            <div className="navbar-mobilecontainer">
              <i onClick={handleMobileLinks} className="pointer fas fa-bars fa-2x"></i>
            </div>
          </div>
      )
    }
  }

  const findCorrectNavbar = () => {
    if (!isMobile) {
      return (
          <div className="container">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <ul className={"navbar-li"}>
                  <li><a className={"navbar-link-" + color}
                         href="#">Home</a></li>
                  <li><a className={"navbar-link-" + color}
                         href="#">About</a></li>
                  <li><a className={"navbar-link-" + color}
                         href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
      );
    } else {
      return (
          <div className="container">
            <div className="row">
                {mobileMenu()}
            </div>
          </div>
      );
    }
  }

  return (
      <>
        <nav className="navbar">
          <div className={showMobileLinks && isMobile ? "navbar-fullscreenmobile-"+color : "navbar-container-" + color}>
            {findCorrectNavbar()}
          </div>
        </nav>
      </>
  );
}