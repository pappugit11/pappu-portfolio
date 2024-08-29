import React from "react";

const Skills = () => {
  const skills = [
    { id: 1, skill_name: "HTML", percentge: "90%", image: "/html.svg" },
    { id: 1, skill_name: "CSS", percentge: "85%", image: "/css.svg" },
    { id: 1, skill_name: "Javascript", percentge: "60%", image: "/js.svg" },
    { id: 1, skill_name: "jQuery", percentge: "70%", image: "/jquery.svg" },
    {
      id: 1,
      skill_name: "Bootstrap",
      percentge: "80%",
      image: "/bootstrap.svg",
    },
    { id: 1, skill_name: "React js", percentge: "60%", image: "/react.svg" },
    { id: 1, skill_name: "Next js", percentge: "70%", image: "/next.svg" },
    {
      id: 1,
      skill_name: "Photoshop",
      percentge: "60%",
      image: "/photoshop.svg",
    },
    { id: 1, skill_name: "Figma", percentge: "70%", image: "/figma.svg" },
    { id: 1, skill_name: "Webflow", percentge: "70%", image: "/webflow.svg" },
  ];
  return (
    <>
      <div className="pb-[40px] md:pb-[60px] lg:pb-[100px]">
        <div className="container">
          <div className="text-center mb-8 md:mb-12 max-w-[600px] w-full mx-auto">
            <h2 className="text-2xl md:text-4xl mb-4">My Skills</h2>
            <p>
              Proficient in HTML, CSS, JavaScript, React, Tailwind CSS, Next.js.
              Experienced in building responsive, scalable web applications.
            </p>
          </div>
          <div className="flex flex-wrap mx-[-10px] mb-[-20px]">
            {skills.map((skill, ind) => {
              return (
                <div
                  className="w-[50%] sm:w-[33%] md:w-[25%] lg:w-[20%] px-[10px] pb-[20px] flex flex-col"
                  key={ind}
                >
                  <div className="rounded-[20px] bg-[#2a1454] text-center p-4 mb-4 flex-1 aspect-square flex justify-center items-center flex-col border-[1px] border-[#250243] cursor-pointer transition-all duration-300 card">
                    <img
                      src={`${skill.image}`}
                      alt="logo"
                      className="mx-auto mb-4 w-[70px] h-[70px]"
                    />
                    <p className="text-lg md:text-2xl ">{skill.percentge}</p>
                  </div>
                  <h3 className="text-center text-lg md:text-xl">
                    {skill.skill_name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
