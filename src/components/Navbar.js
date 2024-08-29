import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
// import useTheme from "../contexts/theme";
// import UserContext from "../contexts/UserContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // menu operation

  // const { isOpen, setIsOpen } = useContext(UserContext);

  // const handleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  // menu overflow hidden

  // useEffect(() => {
  //   if (isOpen) {
  //     document.querySelector("body").classList.add("overflow-hidden");
  //   } else {
  //     document.querySelector("body").classList.remove("overflow-hidden");
  //   }
  // }, [isOpen]);

  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header
        className={`navbar fixed top-0 left-0 z-10 w-full bg-[#11001f] transition-all duration-300 ${
          isScrolled
            ? "py-2 md:py-4 shadow-md shadow-[#464646]"
            : "py-4 md:py-6 shadow-none"
        }`}
      >
        <div className="container">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/pappu-logo-new.png"
                alt="header logo"
                className={`transition-all duration-300 ${
                  isScrolled ? "w-[70px]" : "w-[100px]"
                } `}
              />
            </Link>

            <div
              className={`collapse_div fixed top-0 right-0 z-[11] md:static bg-[#11001f] md:bg-transparent h-screen md:h-auto mx-auto w-64 md:w-auto transition-all duration-300 overflow-y-auto ${
                isOpen
                  ? "translate-x-[0%]"
                  : "translate-x-[100%] md:translate-x-0"
              }`}
            >
              <button
                className="md:hidden text-xl text-[#93B1A6] w-12 h-12 rounded flex items-center justify-center ml-auto"
                onClick={handleMenu}
              >
                <RxCross1 />
              </button>
              <nav className="px-6 lg:px-12 py-2">
                <ul className="md:flex gap-x-6 lg:gap-x-8 gap-y-4">
                  {[
                    ["Home", "/"],
                    ["About", "/about"],
                    ["My Works", "/works"],
                    ["Skills", "/skills"],
                  ].map(([title, url], ind) => (
                    <li key={ind} className="py-4 md:py-0">
                      <Link
                        href={url}
                        className="text-[#93B1A6] hover:text-[#8750f7] text-base transition-all duration-300"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <ul className="flex items-center gap-2 md:gap-4 ml-auto md:ml-0 pl-4 md:pl-0">
              <li>
                <Link
                  href="/contact"
                  className="cmn_btn text-center font-bold text-sm md:text-md inline-flex justify-start items-center gap-2 text-white capitalize border-none rounded-full py-3 md:py-4 px-4 md:px-8 transition-all duration-300"
                >
                  Contact Me
                </Link>
              </li>
            </ul>

            <button
              className="md:hidden ml-2 w-10 h-10 bg-[#2a1454] text-[#93B1A6] text-xl rounded flex items-center justify-center flex-shrink-0"
              onClick={handleMenu}
            >
              {/* <GiHamburgerMenu /> */}
            </button>
          </div>
        </div>

        <div
          className={`overlay fixed top-0 left-0 h-screen w-full bg-black opacity-90 z-10 ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={handleMenu}
        ></div>
      </header>
    </>
  );
};

export default Navbar;
