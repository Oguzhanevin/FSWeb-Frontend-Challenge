import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "axios";
import data from "../mocks/data.json";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage("language", "en");
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Data fetching
  const fetchApiData = async () => {
    setLoading(true);
    try {
      const response = await axios.post("https://reqres.in/api/oguzhanevin", data);
      setApiData(response.data[language]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Change language and fetch data
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    setLanguage(newLanguage);
  };

  useEffect(() => {
    fetchApiData();
  }, [language]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <LanguageContext.Provider value={{ apiData, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
