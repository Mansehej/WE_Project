import React from "react";
// reactstrap components

// core components
import WhiteNavbar from "components/Navbars/WhiteNavbar.js";
import FooterBlack from "components/Footers/FooterBlack.js";

// sections for this page
import SectionBlog from "./sections-sections/SectionBlog.js";

function Sections() {
  document.documentElement.classList.remove("nav-open");
  return (
    <>
      <WhiteNavbar />
      <div className="section-space" />
      <SectionBlog />
      <FooterBlack />
    </>
  );
}

export default Sections;
