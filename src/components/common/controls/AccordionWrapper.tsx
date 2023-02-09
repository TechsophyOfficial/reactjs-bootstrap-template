import React from "react";
import { Container } from "@mui/material";
import SIZE from "../../../theme/font_size.json";
import FONTWEIGHT from "../../../theme/font_weight.json";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  accordionWrapper: {
    borderTop: " 1px solid #ccc",
    borderTopColor: theme.palette.primary.main,
    marginTop: SIZE[30],
    "& .MuiPaper-root": {
      boxShadow: "none",
      borderBottom: " 1px solid #ccc",
      borderBottomColor: theme.palette.primary.main,
    },
    "& .MuiAccordionDetails-root": {
      padding: "8px 40px",
    },
    "& .MuiAccordionSummary-content": {
      paddingLeft: SIZE[44],
      "& p": {
        color: theme.palette.primary.main,
        fontSize: SIZE[20],
        fontWeight: FONTWEIGHT[700],
      },
    },
    "& .MuiAccordionSummary-expandIcon": {
      position: "absolute",
      left: 0,
      "& svg": {
        fill: theme.palette.primary.main,
        width: 32,
        height: 32,
      },
    },
  },
}));

const AccordionWrapper = ({ children }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" disableGutters>
      <div className={classes.accordionWrapper}>{children}</div>
    </Container>
  );
};

export default AccordionWrapper;
