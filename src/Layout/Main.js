import React from "react";
import { Outlet } from "react-router-dom";
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
