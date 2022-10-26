import React, { useState, useContext } from "react";
import "./Nav.css";
import Logo from "../../assets/logo1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Toggle from "react-toggle";
import { AiOutlineDingding } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Nav = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  //Logout functionality
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };

  /* theme  togogling functionality */
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  return (
    <div>
      <nav className="main-nav">
        {/* 1st logo part  */}

        <div className="logo d-flex">
          <span>
            <img className="logo-png" src={Logo} alt="name" />
          </span>
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
            <li className="app-container">
              <Toggle
                icons={{
                  checked: "☾",
                  unchecked: "☽",
                }}
                onChange={switchTheme}
              />
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
                <li>
                  {" "}
                  <Link to="/login">Login</Link>
                </li>
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
    </div>
  );
};

export default Nav;
