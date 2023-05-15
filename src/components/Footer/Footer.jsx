import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__inner">
          <div className="grid">
            <div className="grid__col grid__col--1of4">
              <div className="footer__card">
                <div className="footer__heading">
                  <h3>Home Renovator &copy; 2023</h3>
                </div>

                <div className="footer__address">
                  <p>21 O'Connell St Perth, Australia</p>
                </div>

                <div className="footer__links">
                  <Link>Privacy Policy</Link>
                </div>
              </div>
            </div>

            <div className="grid__col grid__col--1of4">
              <div className="footer__card">
                <div className="footer__heading">
                  <h3>Join Our Team</h3>
                </div>

                <div className="footer__description">
                  <p>We're always open to discussing collaboration opportunities
                    with other professional trades. Go ahead and introduce yourself.</p>
                </div>

                <div className="footer__links">
                  <Link>Say hello</Link>
                </div>
              </div>
            </div>

            <div className="grid__col grid__col--1of4">
              <div className="footer__card">
                <div className="footer__heading">
                  <h3>Get Social</h3>
                </div>

                <div className="footer__links">
                  <nav>
                    <ul>
                      <li>
                        <Link>Facebook</Link>
                      </li>

                      <li>
                        <Link>Instagram</Link>
                      </li>

                      <li>
                        <Link>Linkedin</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <div className="grid__col grid__col--1of4">
              <div className="footer__card">
                <div className="footer__heading">
                  <h3>Contact us</h3>
                </div>

                <div className="footer__links">
                  <nav>
                    <ul>
                      <li>
                        <Link>Send an email</Link>
                      </li>

                      <li>
                        <Link>+1-234-567-890</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer