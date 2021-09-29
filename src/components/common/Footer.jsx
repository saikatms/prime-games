import * as Route from "constants/routes";

import {
  ABOUT_US,
  PRIVACY_POLICY,
  RETURN_POLICY,
  TERMS_AND_CONDITIONS,
} from "constants/routes";
import logo from "images/logo_alliswell.png";
import React from "react";
import { Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [Route.HOME, Route.SHOP];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className="footer">
      <div className="footer-col-1">
        <strong>
          {/* <span>
            Developed by <a href="https://github.com/jgudo">JULIUS GUEVARRA</a>
          </span>
          <span>
            Developed by <a href="https://github.com/jgudo">JULIUS GUEVARRA</a>
          </span> */}
        </strong>
      </div>
      <div className="footer-col-2">
        <img alt="Footer logo" className="footer-logo" src={logo} />
        <Row>
          <div>
            <span>
              &copy;&nbsp;
              {new Date().getFullYear()}
            </span>
          </div>
          <div className="">
            {/* <span>
              <Link to={ABOUT_US}>&nbsp;About Us&nbsp;&nbsp;</Link>

              <Link to={PRIVACY_POLICY}>&nbsp;Privacy Policy&nbsp;</Link>
              <Link to={RETURN_POLICY}>&nbsp;Return Policy&nbsp;</Link>
              <Link to={TERMS_AND_CONDITIONS}>
                &nbsp;Terms and Conditions&nbsp;
              </Link>
            </span> */}
          </div>
        </Row>
      </div>
      <div className="footer-col-3">
        <strong>
          <span></span>
        </strong>
      </div>
    </footer>
  );
};

export default Footer;
