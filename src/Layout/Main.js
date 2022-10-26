import React from "react";
import { Outlet } from "react-router-dom";
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
    </div>
  );
};

export default Main;
