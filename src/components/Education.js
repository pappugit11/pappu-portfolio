import React from "react";
// import { FaGraduationCap } from "react-icons/fa";
// import { LuFileBadge2 } from "react-icons/lu";

const Education = () => {
  const experience = [
    {
      duration: "Nov 2019 - Mar 2020",
      designation: "HTML Developer",
      company: "Passionate Futurist",
    },
    {
      duration: "Mar 2020 - Dec 2020",
      designation: "HTML Developer",
      company: "Digifrizz Technologies",
    },
    {
      duration: "Dec 2020 - Feb 2024",
      designation: "HTML Developer",
      company: "Webskitters Technology Solutions",
    },
  ];
  const education = [
    {
      year: "2015",
      course: "Higher Secondary",
      institute: "West Bengal Board",
    },
    {
      year: "Pursuing",
      course: "BCA ( Pursuing )",
      institute: "IGNOU",
    },
    {
      year: "2019",
      course: "Web Design",
      institute: "Webskitters Academy",
    },
    {
      year: "2024",
      course: "React JS",
      institute: "Acesofttech Academy",
    },
  ];

  return (
    <>
      <section className="pb-[40px] md:pb-[60px] lg:pb-[100px]">
        <div className="container">
          <div className="row md:flex flex-wrap mb-[-40px] md:mb-0 mx-[-10px]">
            <div className="col flex-auto md:w-1/2 mb-[40px] md:mb-0 px-[10px]">
              <h3 className="text-2xl md:text-4xl mb-4 flex items-center ">
                {/* <LuFileBadge2 /> */}
                <span className="pl-3">My Experience</span>
              </h3>

              <ul>
                {experience.map((item, index) => (
                  <li
                    className="mb-4 rounded-[20px] bg-[#2a1454] border-[1px] border-[#250243] p-4 cursor-pointer transition-all duration-300 card"
                    key={index}
                  >
                    <p className="text-base md:text-lg mb-1">{item.duration}</p>
                    <h4 className="text-lg md:text-2xl mb-2">
                      {item.designation}
                    </h4>
                    <p>{item.company}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col flex-auto md:w-1/2 mb-[40px] md:mb-0 px-[10px]">
              <h3 className="text-2xl md:text-4xl mb-4 flex items-center">
                {/* <FaGraduationCap /> */}
                <span className="pl-3">My Education</span>
              </h3>
              <ul>
                {education.map((item, index) => (
                  <li
                    className="mb-4 rounded-[20px] bg-[#2a1454] border-[1px] border-[#250243] p-4 cursor-pointer transition-all duration-300 card"
                    key={index}
                  >
                    <p className="text-lg mb-1">{item.year}</p>
                    <h4 className="text-2xl mb-2">{item.course}</h4>
                    <p>{item.institute}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
