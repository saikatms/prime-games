/* eslint-disable indent */
import { FilterOutlined, ShoppingOutlined } from "@ant-design/icons";
import * as ROUTE from "constants/routes";
import logo from "images/logo-wordmark.png";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import UserAvatar from "views/account/components/UserAvatar";
import Badge from "../Badge";
import FiltersToggle from "../FiltersToggle";
import MobileNavigation from "../MobileNavigation";
import SearchBar from "../SearchBar";

const Navigation = () => {
  const navbar = useRef(null);
  const { pathname } = useLocation();

  const store = useSelector((state) => ({
    basketLength: state.basket.length,
    user: state.auth,
    isAuthenticating: state.app.isAuthenticating,
    isLoading: state.app.loading,
  }));

  // console.log(store);
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

  const onClickLink = (e) => {
    if (store.isAuthenticating) e.preventDefault();
  };

  // disable the basket toggle to these pathnames
  const basketDisabledpathnames = [
    ROUTE.CHECKOUT_STEP_1,
    ROUTE.CHECKOUT_STEP_2,
    ROUTE.CHECKOUT_STEP_3,
    ROUTE.SIGNIN,
    ROUTE.SIGNUP,
    ROUTE.FORGOT_PASSWORD,
  ];

  if (window.screen.width <= 800) {
    return (
      <MobileNavigation
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...store}
        disabledPaths={basketDisabledpathnames}
        pathname={pathname}
      />
    );
  }
  return (
    <div className="header">
      <Link onClick={onClickLink} exact to={ROUTE.HOME}>
        <div className="header__logo-box">
          {/* <img src={logo} alt="logo" className="header__logo" /> */}
          <h2>LOGO</h2>
          <div className="header__name">
            <h2>Prime Games</h2>
          </div>
        </div>
      </Link>

      <div className="header__options">
        <div className="header__options-primary">
          <Link className="header__option" exact to={ROUTE.HOME}>
            Home
          </Link>

          <Link className="header__option" to={ROUTE.ABOUT_US}>
            &nbsp;About Us&nbsp;&nbsp;
          </Link>

          <Link className="header__option" to={ROUTE.ABOUT_US}>
            Faq
          </Link>
          <Link className="header__option" to={ROUTE.ABOUT_US}>
            Contact Us
          </Link>
        </div>

        <div className="header__searchbar">
          <SearchBar />
        </div>
        {store.user ? (
          <div className="header__options-secondary">
            <UserAvatar />
          </div>
        ) : (
          <div className="header__options-secondary">
            {pathname === ROUTE.SIGNUP && (
              <div className="header__option">
                <Link
                  className="button button-small button-muted margin-left-s"
                  onClick={onClickLink}
                  to={ROUTE.SIGNIN}
                >
                  Sign In
                </Link>
              </div>
            )}
            {pathname === ROUTE.SIGNIN && (
              <Link
                className="button button-small button-muted margin-left-s"
                onClick={onClickLink}
                to={ROUTE.SIGNUP}
              >
                Sign Up
              </Link>
            )}
            {pathname === ROUTE.HOME && (
              <Link
                className="button button-small button-muted margin-left-s"
                onClick={onClickLink}
                to={ROUTE.SIGNIN}
              >
                Sign In
              </Link>
            )}
          </div>
        )}

        {/* {currentUser ? (
          <div className="header__options-secondary">
            <Link className="header__option" to="">
              Hi, {currentUser.displayName}
            </Link>
            <div
              className="header__option header__option--signout"
              onClick={() => auth.signOut()}
            >
              Sign Out
            </div>
          </div>
        ) : (
          <div className="header__options-secondary">
            <Link
              className="header__option header__option--signin"
              to="/signin"
            >
              Sign In
            </Link>
          </div>
        )} */}
      </div>
      {/* <FontAwesomeIcon
        icon={faBars}
        className="header__nav-menu-icon"
        onClick={ToggleMenuHidden}
      /> */}
      {/* {hidden ? null : <NavMenu />} */}
    </div>
  );
};

export default Navigation;
