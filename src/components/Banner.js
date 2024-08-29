import React from "react";
import { IoMdDownload } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="banner pb-[40px] md:pb-[60px] lg:pb-[100px] pt-8 lg:pt-16">
        <div className="container">
          <div className="banner_inner flex flex-wrap items-center relative">
            <div className="w-full md:w-1/2 order-2 md:order-1 pt-8 md:pt-0">
              <p className="text-xl mb-4 lg:mb-8">
                Hi! I'm <span className="banner_name relative">Pappu Ram</span>
              </p>
              <h1
                className="text-3xl md:text-4xl lg:text-6xl mb-4 lg:mb-8 capitalize
              "
              >
                Frontend web developer based in Kolkata.
              </h1>
              <p className="mb-4 lg:mb-8">
                I am a frontend developer from Kolkata, West Bengal, India with
                4 years of experience in multiple companies like Webskitters,
                Digifrizz and Passionate Futurist.
              </p>

              <div className="flex flex-wrap flex-col md:flex-row items-start md:items-center">
                <Link
                  to="/contact"
                  className="cmn_btn text-center font-bold text-sm md:text-md inline-flex justify-start items-center gap-2 text-white capitalize border-none rounded-full py-3 md:py-4 px-4 md:px-8 transition-all duration-300"
                >
                  My Resume <IoMdDownload />
                </Link>

                <ul className="flex items-center gap-2 md:gap-4 pl-0 lg:pl-8 pt-4 lg:pt-0">
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

            <div className="w-full md:w-1/2 px-0 md:px-4 lg:px-16 order-1 md:order-2">
              <figure className="rounded-[40px] border border-[#8750f7] rotate-2 hover:rotate-0 transition-all duration-500 overflow-hidden mb-4 relative aspect-[4/4]">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="/pappu-banner.jpeg"
                  alt="profile image"
                  className="object-cover static"
                />
              </figure>
            </div>

            <h2 className="absolute top-[50%] left-[50%] z-[-1] text-[150px] md:text-[250px] opacity-[.05] banner_txt_animation tracking-wider">
              HI
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
