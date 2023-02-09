import React, { useState } from "react";
import { Typography } from "@mui/material";
import Select from "../components/common/controls/Select";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import CONSTANTS from "../constants/constants";

const Settings = () => {
  const { t: translation } = useTranslation();
  const language = sessionStorage.getItem(CONSTANTS.I18NEXTLNG) || "en";
  const country = sessionStorage.getItem(CONSTANTS.COUNTRY) || "IN";
  const [languageValue, setLanguageValue] = useState(language);
  const [countryValue, setCountryValue] = useState(country);
  const LanguageList = {
    en: { title: "english", dir: "ltr", value: "en", code: "en" },
    ta: { title: "tamil", dir: "ltr", value: "ta", code: "ta" },
  };
  const selectLanguage = Object.values(LanguageList)?.map((item) => item);
  const selectCountry = [
    { title: "india", value: "IN" },
    { title: "japan", value: "JA" },
  ];
  const handleLanguageChange = (event) => {
    const [selectedLanguage] = selectLanguage.filter(
      (item) => item.value === event.target.value
    );
    i18next.changeLanguage(selectedLanguage?.code);
    setLanguageValue(selectedLanguage?.code);
  };
  const handleCountryChange = (event) => {
    sessionStorage.setItem(CONSTANTS.COUNTRY, event.target.value);
    setCountryValue(event.target.value);
  };

  React.useEffect(() => {
    document.body.dir = LanguageList[language]?.dir;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "50px",
      }}
    >
      <Typography variant="h3">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <Typography
            variant="h6"
            style={{ width: "300px", paddingTop: "35px" }}
          >
            {translation("select_country")}
          </Typography>
          <Select
            options={selectCountry}
            label={"           "}
            onChange={handleCountryChange}
            value={countryValue}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h6"
            style={{ width: "300px", paddingTop: "35px" }}
          >
            {translation("select_language")}
          </Typography>
          <Select
            options={selectLanguage}
            label={"           "}
            onChange={handleLanguageChange}
            value={languageValue}
          />
        </div>
      </Typography>
    </div>
  );
};

export default Settings;
