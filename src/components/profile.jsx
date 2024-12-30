import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Profile = () => {
  const { apiData } = useContext(LanguageContext);
  const { profile } = apiData;

  return (
    <div className="w-full bg-white text-black dark:text-white dark:bg-[#252128]">
      <div className="w-4/5 max-w-4xl mx-auto flex flex-col py-8">
        <h1 className="text-[#1F2937] dark:text-[#AEBCCF] font-semibold text-5xl mb-6 text-center md:text-start">
          {profile.title}
        </h1>
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-start">
          <div className="flex flex-col gap-4 w-full md:flex-1 md:max-w-[45%]">
            <h2 className="text-[#4338CA] dark:text-[#B7AAFF] font-medium text-3xl mb-3">
              {profile.profileInformation.title}
            </h2>
            {profile.profileInformation.items.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-2">
                <p className="w-full md:w-1/2 font-semibold text-lg">{item.label}</p>
                <p className="w-full md:w-1/2 text-lg text-[#6B7280] dark:text-[#AEBCCF]">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="w-full md:flex-1 md:max-w-[45%]">
            <h2 className="text-[#4338CA] dark:text-[#B7AAFF] font-medium text-3xl mb-4">
              {profile.aboutMe.title}
            </h2>
            <p className="text-[#6B7280] dark:text-white mb-4">
              {profile.aboutMe.descriptions[0]}
            </p>
            {profile.aboutMe.descriptions[1] && (
              <p className="text-[#6B7280] dark:text-white">
                {profile.aboutMe.descriptions[1]}
              </p>
            )}
          </div>
        </div>

        <hr className="bg-[#BAB2E7] border border-[#BAB2E7] w-full my-8" />
      </div>
    </div>
  );
};

export default Profile;
