import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div class="container-fluid banner">
      <div class="row">
        <div class="col-md-12">
          <nav class="navbar navbar-md">
            <div class="navbar-brand">SPITAL</div>
            <ul class="nav">
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  HOME
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  COURSES
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  FAQ
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  BLOG
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  LOGIN
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-md-8 offset-md-2 info">
          <h1 class="text-center">SPITAL</h1>
          <p class="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing
          </p>
          <Link href="#" class="btn btn-md text-center">
            GET STARTED
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
