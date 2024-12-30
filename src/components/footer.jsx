import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Footer = () => {
  const { apiData } = useContext(LanguageContext);
  const { footer } = apiData;

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6 md:px-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-300 text-center mb-6">
          {footer.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-3xl gap-4">
          <div className="flex items-center gap-3">
            <img src="./../../Assets/Images/mail-logo.png" alt="Mail Logo" />
            <a
              className="text-red-600 dark:text-purple-300 underline text-lg font-medium"
              href="mailto:oguzhannevin@gmail.com"
            >
              oguzhannevin@gmail.com
            </a>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-gray-100 text-base font-medium"
              href={footer.links.personalBlog}
            >
              {footer.personalBlog}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 text-base font-medium"
              href="https://github.com/Oguzhanevin"
            >
              {footer.github}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 text-base font-medium"
              href="https://www.linkedin.com/in/oğuzhan-evin-16a454244"
            >
              {footer.linkedin}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
