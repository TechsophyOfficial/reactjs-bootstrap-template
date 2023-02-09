import { Typography } from "@mui/material";
import React from "react";
import SIZE from "../../../theme/font_size.json";
import COLORS from "../../../theme/colors.json";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  label: {
    marginBottom: SIZE[7],
    fontSize: SIZE[13],
    textAlign: "left",
    color: COLORS.GRAY,
  },
}));

interface LabelProps {
  className?: string;
  title: string;
  required?: boolean;
  inputLabelStyles?: string;
}
const Label = ({
  className,
  title,
  required,
  inputLabelStyles,
}: LabelProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const class_name =
    (inputLabelStyles ? inputLabelStyles : classes.label) + " " + className;
  return (
    <Typography className={class_name}>
      {t(title)} {required ? "*" : ""}
    </Typography>
  );
};
export default Label;
