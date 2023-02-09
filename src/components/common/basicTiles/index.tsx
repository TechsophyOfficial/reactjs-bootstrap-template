import React from "react";
import { makeStyles } from "@mui/styles";
import COLORS from "../../../theme/colors.json";
import "./index.scss";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(() => ({
  tileBox: {
    backgroundColor: COLORS.APP_THEME_COLOR,
    color: COLORS.WHITE,
  },
}));

const BasicTiles = ({ data }) => {
  const { t } = useTranslation();
  const { title } = data;
  const classes = useStyles();
  return (
    <div className={classes.tileBox + " tileBox"}>
      <div className={"tileValue"}>value</div>
      <div className="tileTitle">{t(title)}</div>
    </div>
  );
};

export default BasicTiles;
