import React from "react";
import { TextField } from "@mui/material";
import "../../../index.scss";
import Label from "./Label";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  label: {
    color: "rgba(0, 0, 0, 0.26)",
    "&:before": {
      content: "blank",
    },
  },
  formcontrol: {
    position: "relative",
    "& .textLimited": {
      position: "absolute",
      bottom: 10,
      right: 10,
      color: "#ccc",
    },
  },
}));

const MAX_WORDS_LIMIT = 1000;

const Textarea = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const {
    name,
    label,
    displayLimit,
    size = "medium",
    required,
    type,
    value,
    rows,
    error = null,
    onChange,
    variant,
    defaultValue,
    key,
    autofocus,
    placeholder,
    ...other
  } = props;

  return (
    <div className={"form-control " + classes.formcontrol}>
      <Label title={label} required={required} />
      {displayLimit && (
        <span className={"textLimited"}>Max {MAX_WORDS_LIMIT} characters</span>
      )}
      <TextField
        variant={variant ? variant : "outlined"} //filled, standard, outlined
        size={size}
        required={required}
        type={type}
        name={name}
        key={key ? key : "dataInput"}
        value={value}
        defaultValue={defaultValue}
        multiline
        rows={rows ? rows : 5}
        inputProps={{
          maxLength: MAX_WORDS_LIMIT,
        }}
        onChange={onChange}
        placeholder={t(placeholder)}
        {...other}
        {...(error && { error: true, helperText: error })}
        InputLabelProps={{
          classes: {
            root: classes.label,
          },
        }}
      />
    </div>
  );
};

export default Textarea;
