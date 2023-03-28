import React from "react";
import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="m-5">{children}</main>
    </>
  );
};

export default Layout;
