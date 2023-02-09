import React from "react";
import ReactLoading from "react-loading";
import { Backdrop } from "@mui/material";
import COLORS from "../../theme/colors.json";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  spinnerRoot: {
    color: COLORS.APP_THEME_COLOR,
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  spinnerWrapper: {
    position: "fixed",
    backgroundColor: COLORS.GRAY,
    width: "100%",
    height: "100%",
    opacity: "0.5",
    zIndex: 9999,
  },
  backdrop: {
    zIndex: 10000,
    color: COLORS.APP_THEME_COLOR,
    backgroundColor: "rgb(255 255 255 / 97%)",
  },
  preLoaderSpin: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
  },
  loaderText: {
    position: "relative",
    color: COLORS.APP_THEME_COLOR,
    margin: "10px 0 0 0",
    "&::after": {
      content: '""',
      width: "20px",
      display: "inline-block",
      fontWeight: "bold",
      animation: `$loadingText 3s infinite`,
    },
  },
  "@keyframes loadingText": {
    "0%": {
      content: '""',
    },
    "25%": {
      content: '"."',
    },
    "50%": {
      content: '".."',
    },
    "75%": {
      content: '"..."',
    },
  },
}));

export const LoadSpinner = (props) => {
  const { isLoading } = props;
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={isLoading}>
      <div className={classes.preLoaderSpin}>
        {/* @ts-ignore */}
        <ReactLoading
          type="spin"
          color={COLORS.APP_THEME_COLOR}
          height="38px"
          width="38px"
        />
        <p className={classes.loaderText}>Loading</p>
      </div>
    </Backdrop>
  );
};

export default LoadSpinner;
