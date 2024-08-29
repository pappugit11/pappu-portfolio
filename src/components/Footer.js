import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0b0014] pt-8">
        <div className="container">
          <div className="flex items-center flex-col pb-8">
            <Link to="/" className="text-4xl text-[#131116] mb-4 logo">
              <img
                src="/pappu-logo-new.png"
                alt="header logo"
                className="transition-all duration-300 w-[100px]"
              />
            </Link>
            <a
              href="mailto:pappuram619@gmail.com"
              className="flex items-center text-md md:text-lg text-[#8750f7] hover:text-[#fff] transition-all duration-300"
            >
              <FaEnvelope className="mr-2" />
              pappuram619@gmail.com
            </a>
          </div>
          <div className="border-t border-t-[#2d2d2d] py-4 md:py-8 md:flex justify-between items-center">
            <p className="text-center md:text-left">
              © 2024 Pappu Ram. All rights reserved.
            </p>
            <ul className="flex items-center justify-center md:justify-start gap-2 md:gap-4 pl-0 lg:pl-8 pt-4 md:pt-0">
              {[
                [<FaGithub />, "https://github.com/pappugit11/"],
                [
                  <FaTwitter />,
                  "https://x.com/PappuRa50289506?t=fXXtUSx_sBdSHczmab6N9A&s=09",
                ],
                [
                  <FaLinkedinIn />,
                  "https://www.linkedin.com/in/pappu-ram-15a16820a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                ],
                [<FaInstagram />, "https://www.instagram.com/"],
              ].map(([title, url], ind) => (
                <li className="flex items-center" key={ind}>
                  <a
                    href={url}
                    target="_blank"
                    className="border border-[#8750f7] rounded-full inline-block p-2 text-[#8750f7] hover:text-white hover:bg-[#8750f7] transition-all duration-300"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
