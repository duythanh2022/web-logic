import React from "react";
import Header from "@/layouts/components/Header/Header";
import Footer from "@/layouts/components/Footer/Footer"; 
const Layout = ({children}) => {
  return (
    <>
      <div className="wrapper-layouts">
        <Header />
        <div className="container">
          <div className="content">
              {children}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
