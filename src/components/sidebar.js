import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Sidebar = (props) => {
  const listRef = useRef();

  useEffect(() => {
    const navbarlinks = listRef.current.querySelectorAll("a");

    const navbarlinksActive = () => {
      let position = window.scrollY + 300;
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = document.querySelector(navbarlink.hash);
        if (!section) return;
        if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
          navbarlink.classList.add("text-clr-accent");
        } else {
          navbarlink.classList.remove("text-clr-accent");
        }
      });
    };

    document.addEventListener("scroll", navbarlinksActive);
    return () => {
      document.removeEventListener("scroll", navbarlinksActive);
    };
  }, []);

  const onClickNavLink = () => {
    document.querySelector("body header > div").classList.remove("!left-0", "!w-[300px]");
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <header>
      <div
        className={`bg-clr-darker text-clr-light fixed top-0 left-[-300px] bottom-0 z-[100] w-[250px] px-4 transition-all duration-500 sm:left-0 xl:w-[300px]`}
        id="sidebar"
      >
        <div>
          <StaticImage
            className="my-4 mx-auto block w-[120px] rounded-full border-8 border-gray-900"
            src="../images/Joakim-1-portrait.jpg"
            alt="Picture of Joakim"
          />
          <h1 className="hover:text-clr-light text-center text-3xl font-black">Joakim Olsen</h1>
          <a
            className="focus:ring-clr-accent/70 text-clr-accent mx-auto mt-4 mb-2 block w-fit text-center text-xl font-black hover:underline hover:opacity-75 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-offset-gray-900"
            href="mailto:jokke34@gmail.com"
          >
            Send e-mail
          </a>
          <div className="text-center">
            <ul className="mb-8 flex justify-center space-x-4">
              <li>
                <Link
                  className="bg-clr-dark focus:ring-clr-accent/70 hover:text-clr-accent flex h-9 w-9 items-center justify-center rounded-full text-lg focus:outline-none focus:ring"
                  to="#"
                >
                  <i className="fa-brands fa-github"></i>
                </Link>
              </li>
              <li>
                <Link
                  className="bg-clr-dark focus:ring-clr-accent/70 hover:text-clr-accent flex h-9 w-9 items-center justify-center rounded-full text-lg focus:outline-none focus:ring"
                  to="#"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link
                  className="bg-clr-dark focus:ring-clr-accent/70 hover:text-clr-accent flex h-9 w-9 items-center justify-center rounded-full text-lg focus:outline-none focus:ring"
                  to="#"
                >
                  <i className="fa-brands fa-facebook"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <nav ref={listRef}>
          <Link
            className="hover:text-clr-accent text-clr-accent flex items-center py-2 px-4 transition"
            to="/#home"
            onClick={onClickNavLink}
          >
            <i className="fa-solid fa-house w-6 text-center text-lg"></i>
            <span className="pl-2 text-lg">Home</span>
          </Link>

          <Link
            className="hover:text-clr-accent flex items-center py-2 px-4 transition"
            to="/#resume"
            onClick={onClickNavLink}
          >
            <i className="fa-solid fa-file w-6 text-center text-lg"></i>
            <span className="pl-2 text-lg">Resume</span>
          </Link>

          <Link
            className="hover:text-clr-accent flex items-center py-2 px-4 transition"
            to="/#about"
            onClick={onClickNavLink}
          >
            <i className="fa-solid fa-address-card w-6 text-center text-lg"></i>
            <span className="pl-2 text-lg">About me</span>
          </Link>

          <Link
            className="hover:text-clr-accent flex items-center py-2 px-4 transition"
            to="/#work"
            onClick={onClickNavLink}
          >
            <i className="fa-solid fa-briefcase w-6 text-center text-lg"></i>
            <span className="pl-2 text-lg">My work</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Sidebar;
