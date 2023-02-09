import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  customSelect: {
    "& .MuiSelect-root": {
      paddingTop: 10.5,
      paddingBottom: 10.5,
      color: theme.palette.primary.main,
    },
  },
}));

interface LabelProps {
  label?: string;
  required?: boolean;
  options?: any[];
  value?: string;
  disabled?: boolean;
  variant?: undefined | "standard" | "outlined" | "filled";
  onChange?: (event) => void;
}
const Select = (props: LabelProps) => {
  const {
    label,
    required,
    disabled,
    options,
    value,
    onChange,
    variant = "standard",
  } = props;
  const len = label?.length !== undefined ? label?.length : 1;
  const { t } = useTranslation();
  const handleChange = (event: any) => {
    if (onChange) {
      onChange(event);
    }
  };

  const classes = useStyles();
  return (
    <FormControl fullWidth>
      {label && (
        <InputLabel
          id="demo-simple-select-label"
          style={{ width: 10 * len, paddingLeft: 5 }}
        >
          {t(label)}
        </InputLabel>
      )}
      <MuiSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        variant={variant}
        className={classes.customSelect}
        value={value}
        required={required}
        disabled={disabled}
        onChange={handleChange}
        style={{ width: 15 * len, paddingTop: 15 }}
      >
        {options &&
          options.length > 0 &&
          options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {t(option.title)}
            </MenuItem>
          ))}
      </MuiSelect>
    </FormControl>
  );
};
export default Select;
