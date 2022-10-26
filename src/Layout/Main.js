import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Nav from "../shared/Nav/Nav";

const Main = () => {
  /*   const { darkMode, toggleDarkMode } = React.useContext(ThemeContext);
  console.log(darkMode); */
  return (
    <div>
      <Nav></Nav>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
