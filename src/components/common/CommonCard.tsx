import React from "react";
import { Card } from "@mui/material";
import COLORS from "../../theme/colors.json";
import { makeStyles } from "@mui/styles";

interface Props {
  customStyles?: unknown;
  status?: any;
}

const useStyles = makeStyles((theme) => ({
  cardDefaultStyles: {
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    minWidth: "120px",
    "&:hover": {
      boxShadow: "-1px 10px 15px 0px rgba(0,0,0,0.5)",
      //need to correct here
      "&:hover": {
        // backgroundColor: COLORS.APP_THEME_COLOR,
        "& .tagStyle": {
          color: COLORS.WHITE,
          backgroundColor: COLORS.APP_THEME_COLOR,
        },
        "& .MuiCardActionArea:hover": {
          backgroundColor: "#ffffff !important",
        },
      },
      "&.tagStyle": {
        backgroundColor: "#025e5e",
        color: "#fff",
      },
    },
    "& .tagStyle.greenTag": {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
    },
  },
  cardDefaultcompletedStyles: {
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    minWidth: "120px",
    "&:hover": {
      boxShadow: "-1px 10px 15px 0px rgba(0,0,0,0.5)",
      "&:hover": {
        "& .MuiCardActionArea:hover": {
          backgroundColor: "#ffffff !important",
        },
      },
      "&.tagStyle": {
        backgroundColor: "#025e5e",
        color: "#fff",
      },
    },
    "& .tagStyle.greenTag": {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
    },
  },
  propStyles: (props) => {
    return { ...props };
  },
}));

const CommonCard: React.FC<Props> = ({ children, status, customStyles }) => {
  const classes = useStyles(customStyles);

  return (
    <Card
      className={
        status === "COMPLETED"
          ? `${classes.cardDefaultStyles} ${classes.propStyles} cardDefaultStyles`
          : `${classes.cardDefaultStyles} ${classes.propStyles} cardDefaultStyles`
      }
      variant="outlined"
    >
      {children}
    </Card>
  );
};

export default CommonCard;
