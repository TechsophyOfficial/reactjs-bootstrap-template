import React from "react";
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup as MUIRadioGroup,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import SIZE from "../../../theme/font_size.json";
import COLORS from "../../../theme/colors.json";
import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  groupRadioWrapper: {
    "& .MuiFormControl-root": {
      width: "100%",
    },
  },
  radioGroupList: {
    "& .MuiRadio-root": {
      padding: "0 9px",
    },
    "& .MuiFormControlLabel-root": {
      color: theme.palette.primary.main,
    },
    "& .MuiSvgIcon-root": {
      backgroundColor: COLORS.WHITE,
    },
    "& .MuiRadio-colorSecondary.Mui-checked": {
      color: theme.palette.primary.main,
    },
  },
  custRadioGroupList: {
    "& .MuiFormLabel-root": {
      color: COLORS.GRAY,
      fontSize: SIZE[12],
      marginBottom: SIZE[8],
    },
    "& .MuiFormGroup-row": {
      "& .MuiFormControlLabel-root": {
        marginRight: SIZE[50],
      },
    },
    "& .MuiFormControlLabel-root": {
      "& .MuiTypography-root": {
        fontSize: SIZE[14],
      },
      "& .Mui-checked + .MuiTypography-root": {
        color: theme.palette.primary.main,
      },
    },
  },
}));

interface RadioItemProps {
  enabled?: boolean;
  label: string;
  key: string;
  col?: number;
  description?: string;
  isActive?: boolean;
}

interface LabelProps {
  label?: any;
  name?: string;
  list: RadioItemProps[];
  value?: string;
  required?: boolean;
  row?: boolean;
  className?: string;
  handleChange?: (event) => void;
}
const RadioGroupList = ({
  list,
  name,
  label,
  value,
  className,
  handleChange,
  required,
  row = true,
}: LabelProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const renderRadioList = (item) => {
    return (
      <FormControlLabel
        label={t(item.label)}
        value={item.key}
        disabled={!item.enabled}
        control={
          <Radio
            checked={value === item.key}
            icon={<RadioButtonUnchecked />}
            checkedIcon={<CheckCircle />}
          />
        }
      />
    );
  };

  return (
    <div className={classes.custRadioGroupList + " custRadioGroupList"}>
      <FormControl
        component="fieldset"
        style={{ width: "100%" }}
        className={className}
      >
        <FormLabel component="legend">
          {t(label)} {required ? "*" : null}
        </FormLabel>
        <MUIRadioGroup
          row={row}
          aria-label={label}
          name={name}
          className={classes.radioGroupList}
          value={value}
          onChange={handleChange}
        >
          {list &&
            Array.isArray(list) &&
            list.map((li, index) => (
              <div key={index}>{renderRadioList(li)}</div>
            ))}
        </MUIRadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioGroupList;
