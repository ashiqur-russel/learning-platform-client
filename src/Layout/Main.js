import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";

const Main = () => {
  return (
    <>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Main;
