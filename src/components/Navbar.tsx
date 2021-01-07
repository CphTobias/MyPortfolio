import React, { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useHistory } from "react-router-dom";
import { ColorContext } from "../globalstates/ColorContext";

interface Props {}

export const Navbar: React.FC<Props> = () => {
  let initialLinks = {
    home: "active",
    about: "",
    contact: "",
  };

  const history = useHistory();

  if (history.location.pathname.includes("contact")) {
    initialLinks = {
      home: "",
      about: "",
      contact: "active",
    };
  } else if (history.location.pathname.includes("about")) {
    initialLinks = {
      home: "",
      about: "active",
      contact: "",
    };
  }
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [showMobileLinks, setShowMobileLinks] = useState(false);
  const [activeLink, setActiveLink] = useState(initialLinks);
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
                    onClick={() => {
                      setActiveLink({ home: "active", about: "", contact: "" });
                      handleMobileLinks();
                    }}
                    className={
                      "navbar-mobile-link-" + color + " " + activeLink.home
                    }
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setActiveLink({ home: "", about: "active", contact: "" });
                      handleMobileLinks();
                    }}
                    className={
                      "navbar-mobile-link-" + color + " " + activeLink.about
                    }
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setActiveLink({ home: "", about: "", contact: "active" });
                      handleMobileLinks();
                    }}
                    className={
                      "navbar-mobile-link-" + color + " " + activeLink.contact
                    }
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
            <div className="col-11">
              <ul>
                <li>
                  <i
                    onClick={() => {
                      history.push("/");
                    }}
                    className="fas fa-file-contract fa-2x pointer"
                  ></i>
                  <Link
                    className="navbar-mainlink"
                    onClick={() => {
                      setActiveLink({ home: "active", about: "", contact: "" });
                    }}
                    to={"/"}
                  >
                    Tobias Zimmermann
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-1">
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
                  <Link
                    className="navbar-mainlink"
                    onClick={() => {
                      setActiveLink({ home: "active", about: "", contact: "" });
                    }}
                    to={"/"}
                  >
                    Tobias Zimmermann
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className={"navbar-li"}>
                <li>
                  <Link
                    to="/"
                    className={"navbar-link-" + color + " " + activeLink.home}
                    onClick={() => {
                      setActiveLink({ home: "active", about: "", contact: "" });
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={"navbar-link-" + color + " " + activeLink.about}
                    onClick={() => {
                      setActiveLink({ home: "", about: "active", contact: "" });
                    }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={
                      "navbar-link-" + color + " " + activeLink.contact
                    }
                    onClick={() => {
                      setActiveLink({ home: "", about: "", contact: "active" });
                    }}
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
