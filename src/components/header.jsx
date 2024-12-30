import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { LanguageContext } from "../contexts/LanguageContext";

const Header = () => {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);
  const { apiData, toggleLanguage } = useContext(LanguageContext);

  const { header: apiHeader, hero: apiHero } = apiData;

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`bg-white dark:bg-[#252128] w-full py-4`}>
      <div className="container mx-auto px-6 max-w-4xl flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className="bg-[#7B61FF] dark:bg-[#4731D3] text-white font-bold py-3 px-4 rounded-full"
            style={{ transform: "rotate(40deg)" }}
          >
            L
          </div>
        </div>
        <div className="flex items-center gap-6">
          <label
            htmlFor="darkMode"
            className="relative w-10 h-5 rounded-full bg-[#4731D3] dark:bg-[#3A3A3A] cursor-pointer"
          >
            <input
              type="checkbox"
              id="darkMode"
              className="sr-only peer"
              checked={darkMode}
              onChange={toggleTheme}
            />
            <span className="absolute w-2/5 h-3/4 rounded-full bg-[#FFE86E] left-[22px] top-[3px] peer-checked:left-[2px]"></span>
          </label>
          <span className="text-[#777777] dark:text-[#D9D9D9] font-medium">
            {darkMode ? apiHeader.lightMode : apiHeader.darkMode}
          </span>
          <span>|</span>
          <span
            className="text-[#777777] dark:text-[#D9D9D9] font-medium cursor-pointer"
            onClick={toggleLanguage}
          >
            {apiHeader.languagePrefix}
            <span className="text-[#4731D3] dark:text-[#BAB2E7]">
              {apiHeader.language}
            </span>
            {apiHeader.languageSuffix}
          </span>
        </div>
      </div>
      <nav className="container mx-auto px-6 max-w-4xl mt-6 flex justify-between items-center">
        <div className="flex gap-6 text-lg font-medium text-[#6B7280]">
          <span
            className="cursor-pointer"
            onClick={() => scrollToSection("skills")}
          >
            {apiHeader.skills}
          </span>
          <span
            className="cursor-pointer"
            onClick={() => scrollToSection("projects")}
          >
            {apiHeader.projects}
          </span>
        </div>
        <a
          href="https://www.linkedin.com/in/oğuzhan-evin-16a454244"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-4 border border-[#3730A3] rounded text-[#3730A3] bg-white"
        >
          {apiHeader.hireMe}
        </a>
      </nav>
      <section className="container mx-auto px-6 max-w-4xl mt-12 flex flex-col-reverse md:flex-row gap-8 items-center">
        <div className="flex flex-col gap-4 w-full md:w-3/5">
          <h2 className="text-xl text-[#4338CA] dark:text-[#B7AAFF] font-medium">
            {apiHero.name}
          </h2>
          <h1 className="text-4xl text-[#1F2937] dark:text-[#AEBCCF] font-bold">
            {apiHero.title}
          </h1>
          <p className="text-lg text-[#6B7280] dark:text-white">
            {apiHero.description}
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/oğuzhan-evin-16a454244"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#3730A3] text-white rounded"
            >
              {apiHero.hireMe}
            </a>
            <a
              href="https://github.com/Oguzhanevin"
              target="_blank"
              className="px-4 py-2 border rounded text-[#3730A3] dark:border-[#BAB2E7]"
            >
              GitHub
            </a>
            <a
              href="mailto:oguzhannevin@gmail.com"
              className="px-4 py-2 text-green-600 underline"
            >
              oguzhannevin@gmail.com
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/5">
          <img src={apiHero.heroImage} alt="Hero" className="w-full h-auto" />
        </div>
      </section>
    </header>
  );
};

export default Header;
