import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Projects = () => {
  const { apiData } = useContext(LanguageContext);
  const { projects } = apiData;

  return (
    <div id="projects" className="w-full bg-white dark:bg-[#252128] pb-20">
      <div className="w-4/5 max-w-4xl mx-auto flex flex-col">
        <h1 className="text-black dark:text-[#AEBCCF] font-semibold text-5xl mb-6 text-center md:text-start">
          {projects.title}
        </h1>
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-stretch md:gap-4">
          {projects.items.map((item, index) => (
            <div key={index} className="w-full md:w-1/4 flex flex-col items-center gap-4">
              <img
                className="w-full h-64 object-cover rounded-lg"
                src={item.image}
                alt={item.title}
              />
              <h2 className="text-[#4338CA] dark:text-[#CFCBFF] font-medium text-3xl my-2 text-center">
                {item.title}
              </h2>
              <p className="text-[#6B7280] dark:text-white text-xs text-center">
                {item.description}
              </p>
              {/* İlk proje için adres */}
              {index === 0 && (
                <a
                  className="text-[#3730A3] dark:text-[#E1E1FF] font-medium underline hover:text-[#6B7280] dark:hover:text-[#AEBCCF] mt-2"
                  href="https://my-witflix.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://my-witflix.vercel.app/
                </a>
              )}
              {/* İkinci proje için adres */}
              {index === 1 && (
                <a
                  className="text-[#3730A3] dark:text-[#E1E1FF] font-medium underline hover:text-[#6B7280] dark:hover:text-[#AEBCCF] mt-2"
                  href="https://pizza-theta-murex.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://pizza-theta-murex.vercel.app/
                </a>
              )}
              {/* Üçüncü proje için adres */}
              {index === 2 && (
                <a
                  className="text-[#3730A3] dark:text-[#E1E1FF] font-medium underline hover:text-[#6B7280] dark:hover:text-[#AEBCCF] mt-2"
                  href="https://e-ticaret-pink.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://e-ticaret-pink.vercel.app/
                </a>
              )}
              <div className="flex flex-wrap justify-center my-2 gap-2">
                {item.technologies.map((tech, techIndex) => (
                  <p
                    key={techIndex}
                    className="text-[#3730A3] text-xs font-medium border border-[#3730A3] dark:text-[#8F88FF] dark:border-[#8F88FF] py-1 px-2 rounded"
                  >
                    {tech}
                  </p>
                ))}
              </div>
              <div className="flex justify-between w-full mt-4">
                <a
                  className="text-[#3730A3] dark:text-[#E1E1FF] font-medium underline hover:text-[#6B7280] dark:hover:text-[#AEBCCF]"
                  href={item.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.github}
                </a>
                <a
                  className="text-[#3730A3] dark:text-[#E1E1FF] font-medium underline hover:text-[#6B7280] dark:hover:text-[#AEBCCF]"
                  href={item.links.viewSite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.viewSite}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
