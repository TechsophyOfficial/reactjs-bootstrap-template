import React from "react";
import { makeStyles } from "@mui/styles";
import { REQUIRED } from "../../../constants/common";
import COLORS from "../../../theme/colors.json";
import SIZE from "../../../theme/font_size.json";

const useStyles = makeStyles(() => ({
  required: {
    fontSize: SIZE[13],
    color: COLORS.ERROR,
    textAlign: "left",
    marginTop: SIZE[15],
    marginBottom: SIZE[10],
  },
}));

interface TextProps {
  classes?: string;
  childClass?: string;
}

const RequiredText = ({ classes, childClass }: TextProps) => {
  const styles = useStyles();
  return <div className={`${styles.required} ${classes}`}></div>;
};

export default RequiredText;
