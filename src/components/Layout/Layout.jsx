import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "@components/Layout/Header/Header";
import Footer from "@components/Layout/Footer/Footer";

const Layout = () => {
  const [isOverHeader, setIsOverHeader] = useState(false);

  const scrollSpy = () => {
    window.scrollY > window.innerHeight / 10
      ? setIsOverHeader(true)
      : setIsOverHeader(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", scrollSpy);
    }, 100);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", scrollSpy);
    };
  }, []);

  return (
    <>
      <Header isOverHeader={isOverHeader} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
