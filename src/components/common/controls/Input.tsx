import React from "react";
import {
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "../../../index.scss";
import Label from "./Label";
import { CalendarToday, PhoneInTalkOutlined } from "@mui/icons-material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { Stack, TextField as InpField } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { enUS } from "date-fns/locale";
import ReactCountryFlag from "react-country-flag";
import { ALL_COUNTRY_SHORT_CODES } from "../../../constants/countryCodes";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  phoneCodeWrap: {
    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInput-root": {
      paddingLeft: 7,
      "& .MuiSvgIcon-root": {
        border: "none",
        paddingRight: 5,
      },
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
  },
  datePicker: {
    "& .MuiInputBase-root": {
      borderRadius: "9px",
    },
    "& .MuiOutlinedInput-input": {
      padding: "10.5px 0px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
  },
}));
const Input = (props) => {
  const classes = useStyles();
  const {
    name,
    label,
    size = "medium",
    required,
    type,
    value,
    onChange,
    inputLabelStyles,
    disabled,
    minDate,
    id,
    className,
    maxDate,
    disableIcons,
    placeholder,
    ...other
  } = props;
  const [code, setCode] = React.useState("+91");
  const { t } = useTranslation();

  const handleChange = (event: any) => {
    setCode(event.target.value);
  };

  const mergePhoneCode = (e: any) => {
    if (onChange) {
      onChange(e);
    }
  };

  const onDateChange = (date) => {
    const event = {
      target: {
        name: name,
        value: date,
      },
    };
    onChange(event);
  };

  const getDatePicker = () => {
    const min: any = new Date(minDate);
    const max: any = new Date(maxDate);
    return (
      <>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={enUS}>
          <Stack spacing={0} className={classes.datePicker}>
            <DatePicker
              inputFormat="dd/MM/yyyy"
              {...(minDate && { minDate: min })}
              {...(maxDate && { maxDate: max })}
              disabled={disabled}
              value={value ? value : null}
              onChange={(e: any) => onDateChange(e)}
              renderInput={(params) => {
                let icons = params.InputProps;
                if (disableIcons && icons) {
                  if (disableIcons["left"] && disableIcons["right"]) {
                    icons = {};
                  }

                  if (!disableIcons["left"] && !disableIcons["right"]) {
                    icons["startAdornment"] = (
                      <InputAdornment position="start">
                        <CalendarToday />
                      </InputAdornment>
                    );
                  }
                } else {
                  if (icons) {
                    icons["startAdornment"] = (
                      <InputAdornment position="start">
                        <CalendarToday />
                      </InputAdornment>
                    );
                  }
                }
                return (
                  <InpField
                    {...params}
                    id={id}
                    InputProps={icons}
                    name={name}
                    placeholder="20/11/2021"
                  />
                );
              }}
            />
          </Stack>
        </LocalizationProvider>
      </>
    );
  };

  return (
    <div className={"form-control"}>
      {label && (
        <Label
          title={label}
          required={required}
          inputLabelStyles={inputLabelStyles}
        />
      )}
      {type === "tel" && (
        <TextField
          variant="outlined"
          size={size}
          required={required}
          disabled={disabled}
          type={type}
          name={name}
          value={value}
          onChange={mergePhoneCode}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                className={classes.phoneCodeWrap}
              >
                <PhoneInTalkOutlined />
                <FormControl variant="standard">
                  <Select
                    labelId="code-select"
                    id="code-select"
                    disabled={disabled}
                    value={code}
                    onChange={handleChange}
                    label="Country Code"
                  >
                    {ALL_COUNTRY_SHORT_CODES.map((country) => (
                      <MenuItem key={country.code} value={country.code}>
                        <ReactCountryFlag
                          countryCode={value.cca2}
                          svg
                          style={{
                            width: "2em",
                            height: "1em",
                            paddingRight: "4px",
                            borderRight: "none",
                          }}
                          title="US"
                        />
                        {country.cca2} ({country.code})
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </InputAdornment>
            ),
          }}
          {...other}
        />
      )}

      {(type === "text" ||
        type === "password" ||
        !type ||
        type === "email") && (
        <TextField
          variant="outlined"
          size={size}
          required={required}
          disabled={disabled}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={t(placeholder)}
          {...other}
        />
      )}

      {type === "date" && getDatePicker()}
    </div>
  );
};

export default Input;
