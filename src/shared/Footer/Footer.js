import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-distributed">
      <div className="footer-left">
        <h3>
          E-<span>Learning</span>
        </h3>

        <p className="footer-links">
          <Link href="#" className="link-1">
            Home
          </Link>

          <Link href="#">Blog</Link>

          <Link href="#">Pricing</Link>

          <Link href="#">About</Link>

          <Link href="#">Faq</Link>

          <Link href="#">Contact</Link>
        </p>

        <p className="footer-company-name">E Leaning © 2022</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>Dresdener Staße,21</span> Nürnberg, Germany
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+49.555.555.5555</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <Link href="mailto:support@company.com">support@elearning.edu</Link>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          We are online based education platform where we support students with
          many courses.
        </p>

        <div className="footer-icons">
          <Link href="#">
            <i className="fa fa-facebook"></i>
          </Link>
          <Link href="#">
            <i className="fa fa-twitter"></i>
          </Link>
          <Link href="#">
            <i className="fa fa-linkedin"></i>
          </Link>
          <Link href="#">
            <i className="fa fa-github"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
