import React from "react";
import { Outlet } from "react-router-dom";
//import Header from "../shared/Header/Header";
import Nav from "../shared/Nav/Nav";

const Main = () => {
  return (
    <>
      <Nav></Nav>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Main;
