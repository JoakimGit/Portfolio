import React from "react";
import Sidebar from "./sidebar";
import Seo from "./seo";
import BackToTopLink from "./backToTopLink";
import NavToggleBtn from "./navToggleBtn";

const Layout = ({ children }) => {
  return (
    <>
      <Seo></Seo>
      <Sidebar></Sidebar>
      <NavToggleBtn></NavToggleBtn>
      <main className="sm:pl-[250px] xl:pl-[300px]">{children}</main>
      <BackToTopLink></BackToTopLink>
    </>
  );
};

export default Layout;
