import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="container-fluid banner">
      <div className="row">
        <div className="col-md-12">
          <nav className="navbar navbar-md">
            <div className="navbar-brand">SPITAL</div>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  COURSES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  BLOG
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  LOGIN
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-md-8 offset-md-2 info">
          <h1 className="text-center">SPITAL</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing
          </p>
          <Link href="#" className="btn btn-md text-center">
            GET STARTED
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
