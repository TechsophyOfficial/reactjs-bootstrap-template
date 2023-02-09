import React, { useEffect, useState } from "react";
import { InputAdornment, Select as MuiSelect, MenuItem } from "@mui/material";
import Label from "./Label";
import COLORS from "../../../theme/colors.json";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "inline-flex",
    flexDirection: "column",
    width: "100%",
    textAlign: "center",
    "& .MuiOutlinedInput-input": {
      padding: "14px 30px 14px 5px",
    },
    "& .MuiInputBase-root ": {
      color: COLORS.TX_COLOR_5,
    },
    "& .Mui-focused": {
      "& .MuiSelect-select": {
        color: COLORS.APP_THEME_COLOR,
      },
    },
    "& .MuiSvgIcon-root": {
      color: COLORS.APP_THEME_COLOR,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      color: COLORS.TX_COLOR_5,
    },
    "& .MuiOutlinedInput-root:hover": {
      color: COLORS.APP_THEME_COLOR,
    },
  },
}));

const SelectBox = (props) => {
  const {
    value,
    options,
    name,
    variant = "outlined",
    label,
    required,
    inputLabelStyles,
    handleChange,
    addIcon,
    classname,
  } = props;
  const classes = useStyles();
  const [selectValue, setSelectValue] = useState("default");
  const { t } = useTranslation();
  useEffect(() => {
    if (value) {
      setSelectValue(value);
    }
  }, [value, options]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (value && !selectValue) setSelectValue(value);
  });

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
    if (handleChange) {
      handleChange(e);
    }
  };
  return (
    <div className={classes.root}>
      {label && (
        <Label
          title={label}
          required={required}
          inputLabelStyles={inputLabelStyles}
        />
      )}

      <MuiSelect
        className={addIcon ? "custom-select" : classname}
        value={value ? value : selectValue}
        variant={variant}
        name={name}
        defaultValue={value}
        onChange={handleSelectChange}
        inputProps={{
          startAdornment: (
            <InputAdornment position="start">sdsdsd</InputAdornment>
          ),
        }}
      >
        <MenuItem value="default" disabled hidden>
          --{t("select")}--
        </MenuItem>
        {options &&
          options.length > 0 &&
          options.length > 0 &&
          options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {t(option.title)}
            </MenuItem>
          ))}
      </MuiSelect>
    </div>
  );
};

export default SelectBox;
