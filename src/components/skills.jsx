import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Skills = () => {
  const { apiData } = useContext(LanguageContext);
  const { skills } = apiData;

  // Resimlerin konumları
  const skillImages = {
    javascript: "/Assets/Images/javascript.png",
    reactjs: "/Assets/Images/reactjs.png",
    python: "/Assets/Images/python.png",
  };

  return (
    <div id="skills" className="w-full bg-white dark:bg-[#252128] py-16">
      <div className="w-4/5 max-w-4xl mx-auto flex flex-col">
        <h1 className="font-semibold text-5xl text-[#1F2937] dark:text-[#AEBCCF] mb-8 text-center md:text-start">
          {skills.title}
        </h1>
        <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-between">
          {skills.items.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/4 flex flex-col items-center gap-4 text-center"
            >
              <div className="flex items-center gap-2">
                <h2 className="font-medium text-3xl text-[#4338CA] dark:text-[#B7AAFF]">
                  {item.name}
                </h2>
                {/* Resim ekleme */}
                {skillImages[item.name.toLowerCase()] && (
                  <img
                    src={skillImages[item.name.toLowerCase()]}
                    alt={item.name}
                    className="w-8 h-8"
                  />
                )}
              </div>
              <p className="text-[#6B7280] dark:text-white text-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <hr className="border-[#BAB2E7] w-full mx-auto my-8" />
      </div>
    </div>
  );
};

export default Skills;
