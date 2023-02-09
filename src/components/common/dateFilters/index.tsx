import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "../../common/controls/Button";
import { DATE_FILTERS } from "../../../constants/common";
import COLORS from "../../../theme/colors.json";
import "./index.scss";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: "-6px",
    marginBottom: "15px",
    "& .MuiButton-containedPrimary": {
      color: COLORS.WHITE,
    },
  },
  buttonHolder: {
    color: COLORS.GRAY,
  },
}));

interface DateFiltersProps {
  activeFilter: string;
  handleFilters: (d, e) => void;
  id?: string;
}

const DateFilters = ({ activeFilter, handleFilters, id }: DateFiltersProps) => {
  const classes = useStyles();
  const renderDateFilters = () => {
    return DATE_FILTERS.map((d, i) => (
      <div
        key={i + "buttonHolder}"}
        className={classes.buttonHolder + " buttonHolder"}
      >
        <Button
          aria-describedby={id}
          text={d}
          variant={activeFilter === d ? "contained" : "text"}
          color={activeFilter === d ? "primary" : "inherit"}
          onClick={(e) => handleFilters(d, e)}
        />
      </div>
    ));
  };

  return <div className={classes.root}>{renderDateFilters()}</div>;
};

export default DateFilters;
