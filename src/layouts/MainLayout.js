import React from "react";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="m-5 pt-5" >{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
