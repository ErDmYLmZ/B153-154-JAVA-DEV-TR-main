import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { Outlet, useLocation } from "react-router-dom";
import "./layout.scss";

const AppLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
