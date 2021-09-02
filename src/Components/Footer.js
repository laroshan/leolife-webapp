import React from "react";
import { Switch, Link } from "react-router-dom";
import styled from "styled-components";
import { faPhoneSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faPhoneSquare} className="mx-1" />
                    077-346-8913
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhoneSquare} className="mx-1" />
                    051-222-5770
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} className="mx-1" />
                    ldleolife@gmail.com
                  </li>
                </ul>
              </div>
              <Switch>
                <div className="col-md-4 col-sm-6">
                  <h4>Contact Us</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                  </ul>
                </div>
              </Switch>

              <div className="col-md-4 col-sm-6">
                <h4>Social Networks</h4>
                <ul className="list-unstyled">
                  <li>
                    <i class="fa fa-facebook" aria-hidden="false">
                      <a
                        href="https://www.facebook.com/ldleolife"
                        target="_blank"
                      >
                        Facebook
                      </a>
                    </i>
                  </li>
                  <li>
                    <i class="fa fa-instagram" aria-hidden="true">
                      <a href="https://www.instagram.com" target="_blank">
                        Instagram
                      </a>
                    </i>
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
    background: var(--Whitish);
    padding-top: 2rem;
    color: var(--Goldenwheat);
  }
  .footer-bottom {
    padding-top: 2rem;
    padding-bottom: 1rem;
  }

  ul li a {
    color: var(--Goldenwheat);
    text-decoration: none;
  }

  a:hover {
    border-bottom: 2px solid var(--SecondhandGrey);
    transition: all 0.2s ease-out;
  }
`;
