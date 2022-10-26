import React, { useState, useContext } from "react";
import "./Nav.css";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Nav = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>E</span>-<span>L</span>earning
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/faqs">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">blog</Link>
            </li>
            {user && user?.uid ? (
              <>
                <span>{user && user?.emailVerified}</span>
                <li variant="light" onClick={handleLogOut}>
                  Log out
                </li>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
              </>
            )}
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              {user?.photoURL ? (
                <img
                  src={user?.photoURL}
                  className="rounded-circle"
                  title={user?.displayName}
                  style={{ width: "50px" }}
                  alt="Avatar"
                />
              ) : (
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                  className="rounded-circle"
                  style={{ width: "50px" }}
                  alt="Avatar"
                />
              )}
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <Link href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </Link>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Nav;
