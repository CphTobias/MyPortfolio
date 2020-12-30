import React, { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useHistory } from "react-router-dom";
import { ColorContext } from "../globalstates/ColorContext";

interface Props {}

export const Navbar: React.FC<Props> = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [showMobileLinks, setShowMobileLinks] = useState(false);
  const history = useHistory();
  const color = useContext(ColorContext);

  const handleMobileLinks = () => {
    setShowMobileLinks(!showMobileLinks);
    if (!showMobileLinks) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const mobileMenu = () => {
    if (showMobileLinks) {
      return (
        <div className="container">
          <div style={{ padding: "20px" }} className="row">
            <div className="col">
              <i
                onClick={handleMobileLinks}
                className="pointer navbar-mobilecontainer fas fa-times fa-3x"
              ></i>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ul className={"navbar-mobilelinks-ul"}>
                <li>
                  <Link
                    onClick={handleMobileLinks}
                    className={"navbar-mobile-link-" + color}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={handleMobileLinks}
                    className={"navbar-mobile-link-" + color}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={handleMobileLinks}
                    className={"navbar-mobile-link-" + color}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10">
              <ul>
                <li>
                  <i
                    onClick={() => {
                      history.push("/");
                    }}
                    className="fas fa-file-contract fa-2x pointer"
                  ></i>
                  <Link className="navbar-mainlink" to={"/"}>
                    Tobias Zimmermann
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <div className="navbar-mobilecontainer">
                <i
                  onClick={handleMobileLinks}
                  className="pointer fas fa-bars fa-2x"
                ></i>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const findCorrectNavbar = () => {
    if (!isMobile) {
      if (showMobileLinks) {
        document.body.style.overflow = "";
      }

      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>
                  <i
                    onClick={() => {
                      history.push("/");
                    }}
                    className="fas fa-file-contract fa-2x pointer"
                  ></i>
                  <Link className="navbar-mainlink" to={"/"}>
                    Tobias Zimmermann
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className={"navbar-li"}>
                <li>
                  <Link to="/" className={"navbar-link-" + color}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={"navbar-link-" + color}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={"navbar-link-" + color}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      if (showMobileLinks) {
        document.body.style.overflow = "hidden";
      }

      return (
        <div className="container">
          <div className="row">{mobileMenu()}</div>
        </div>
      );
    }
  };

  return (
    <>
      <nav className="navbar">
        <div
          className={
            showMobileLinks && isMobile
              ? "navbar-fullscreenmobile-" + color
              : "navbar-container-" + color
          }
        >
          {findCorrectNavbar()}
        </div>
      </nav>
    </>
  );
};
