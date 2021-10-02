import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { withRouter } from "react-router";
import * as ROUTE from "constants/routes";

import { connect } from "react-redux";
import { compose } from "redux";

const Navbar = () => {
  const navbar = useRef(null);
  const scrollHandler = () => {
    if (navbar.current && window.screen.width > 480) {
      if (window.pageYOffset >= 70) {
        navbar.current.classList.add("is-nav-scrolled");
      } else {
        navbar.current.classList.remove("is-nav-scrolled");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  return (
    <div className="navbar">
      <div className="navbar__options">
        <div className="navbar__options-primary">
          <Link className="navbar__option" to={ROUTE.CATEGORY1}>
          CATEGORY1
          </Link>
          <Link className="navbar__option" to={ROUTE.CATEGORY2}>
          CATEGORY2
          </Link>
          <Link className="navbar__option" to={ROUTE.CATEGORY3}>
          CATEGORY3
          </Link>
          <Link className="navbar__option" to={ROUTE.CATEGORY4}>
          CATEGORY4
          </Link>
          <Link className="navbar__option" to={ROUTE.CATEGORY5}>
          CATEGORY5
          </Link>
          <Link className="navbar__option" to={ROUTE.CATEGORY6}>
          CATEGORY6
          </Link>
          <Link className="navbar__option" to={ROUTE.CATEGORY7}>
          CATEGORY7
          </Link>
          <Link className="navbar__option" to={ROUTE.CATEGORY8}>
          CATEGORY8
          </Link>
          <Link className="navbar__option" to={ROUTE.CATEGORY9}>
          CATEGORY9
          </Link>
          <Link className="navbar__option" to={ROUTE.CATEGORY10}>
          CATEGORY10
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
