import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";
import React, { forwardRef } from "react";
import { InputAdornment } from "@mui/material";
import { CalendarToday } from "@mui/icons-material";
import Input from "../Input";
import Label from "../Label";
import COLORS from "../../../../theme/colors.json";
import DatePicker from "react-datepicker";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  adornedEnd: {
    backgroundColor: COLORS.WHITE,
    padding: "0px",
  },
  inputStyle: {
    height: "13px",
    padding: "14px",
    backgroundColor: COLORS.WHITE,
    borderRadius: "10px",
    fontSize: "13px",
    color: COLORS.GRAY,
  },
  amountAndDateLablel: {
    fontSize: "13px",
    color: COLORS.GRAY,
    marginBottom: 5,
    textAlign: "left",
  },
}));

interface MyDetailsProps {
  value: any;
  handleChange: (event) => void;
  label?: string;
  required?: boolean;
  mask?: string;
  name?: string;
  id?: string;
  minDate?: any;
  maxDate?: any;
  dateFormat?: string;
  placeholderText?: string;
  disabled?: boolean;
  className?: string;
  error?: boolean;
  helperText?: string;
}

const DatePickerCust = ({
  value,
  handleChange,
  name = "custom-date-picker",
  minDate,
  maxDate,
  id = "custom-date-picker",
  label,
  required,
  dateFormat = "dd-MM-yyyy",
  placeholderText = "dd-MM-yyyy",
  disabled = false,
  className,
  error,
  helperText,
}: MyDetailsProps) => {
  const classes = useStyles();

  const DateInput = ({ value, onClick, onChange, placeholder }, ref) => {
    return (
      <Input
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        onClick={onClick}
        error={error ? true : false}
        helperText={helperText}
        InputProps={{
          classes: {
            input: classes.inputStyle,
            adornedEnd: classes.adornedEnd,
          },
          startAdornment: (
            <InputAdornment position="start">
              <CalendarToday />
            </InputAdornment>
          ),
        }}
      />
    );
  };
  const DateInputExportName = forwardRef(DateInput);
  const min: any = new Date(minDate);
  const max: any = new Date(maxDate);
  return (
    <div id="custom-date-picker" className={`form-control ${className}`}>
      {label && (
        <Label
          title={label}
          required={required}
          inputLabelStyles={classes.amountAndDateLablel}
        />
      )}
      <DatePicker
        id={id}
        name={name}
        placeholderText="20/11/2021"
        inputFormat="dd/MM/yyyy"
        selected={value}
        onChange={handleChange}
        disabled={disabled}
        {...(minDate && { minDate: min })}
        {...(maxDate && { maxDate: max })}
        // @ts-ignore:next-line
        customInput={<DateInputExportName />}
      />
    </div>
  );
};

export default DatePickerCust;
