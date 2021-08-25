import React from "react";
import { Switch, Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <div className="main-footer">
      <FooterContainer>
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              {/* column 1  */}
              <div className="col-md-4 col-sm-6">
                <h4>LD Leo Life</h4>
                <ul className="list-unstyled">
                  <li>No.14, Circular Road.</li>
                  <li>Hatton.</li>
                  <li>Sri Lanka.</li>
                  <li>077-346-8913</li>
                </ul>
              </div>
              <Switch>
                <div className="col-md-4 col-sm-6">
                  <h4>Contact Us</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>Email</li>
                  </ul>
                </div>
              </Switch>

              <div className="col-md-4 col-sm-6">
                <h4>Social Networks</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="www.facebook.com">FaceBook</a>
                  </li>
                  <li>
                    <a href="www.instagram.com">Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p className="text-xs-center">
                &copy;{new Date().getFullYear} LD Leo Life - All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </FooterContainer>
    </div>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainBlack);
    padding-top: 2rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 2rem;
    padding-bottom: 1rem;
  }

  ul li a {
    color: var(--mainGrey);
  }
`;
