import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

const BackToTopLink = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      className={`${
        scroll ? "opacity-100" : "opacity-0"
      } bg-clr-accent hover:bg-clr-accent/70 fixed right-4 bottom-4 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-[400ms]`}
      to="#"
    >
      <i className="fa-solid fa-arrow-up text-clr-light text-2xl"></i>
    </Link>
  );
};

export default BackToTopLink;
