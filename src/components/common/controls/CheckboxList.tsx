import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import * as React from "react";
import SIZE from "../../../theme/font_size.json";
import COLORS from "../../../theme/colors.json";
import FONTWEIGHT from "../../../theme/font_weight.json";
import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    "& .MuiFormControlLabel-root": {
      display: "flex",
      flexDirection: "column",
      minWidth: 100,
      minHeight: 100,
      padding: SIZE[15],
      backgroundColor: COLORS.WHITE,
      borderRadius: SIZE[18],
      justifyContent: "center",
      margin: SIZE[10],
      maxHeight: 100,
      maxWidth: 100,
      "&.active": {
        color: theme.palette.primary.main,
        borderWidth: SIZE[1],
        borderStyle: "solid",
        borderColor: theme.palette.primary.main,
        boxShadow: "0px 2px 21px 8px rgb(69 67 67 / 39%)",
        backgroundColor: theme.palette.primary.main,
      },
      "&.active label": {
        fontWeight: FONTWEIGHT[700],
      },
      "& .MuiFormControlLabel-label .custom-label img": {
        width: 50,
      },
    },
    "& .MuiRadio-colorSecondary.Mui-checked": {
      color: theme.palette.primary.main,
    },
    "& .MuiGrid-item": {
      display: "flex",
      flexDirection: "column",
      minWidth: "20%",
      "& > label": {
        fontSize: SIZE[14],
        color: COLORS.GRAY,
      },
      "&.active label": {
        color: theme.palette.primary.main,
      },
    },
    "& .MuiGrid-item .MuiFormControlLabel-root": {
      flexGrow: 1,
      position: "relative",
      "& .MuiCheckbox-root": {
        position: "absolute",
        top: 0,
        right: 0,
      },
    },
  },
}));

interface CheckBoxListProps {
  list: any[];
  onChange?: (event: any, list: any[]) => void;
}

const CheckboxList = ({ list, onChange }: CheckBoxListProps) => {
  const classes = useStyles();
  const [inpList, setInpList] = React.useState(list);
  const { t } = useTranslation();

  const handleChange = (e, item) => {
    inpList.forEach((el) =>
      el.value === item.value ? (el.isActive = e.target.checked) : ""
    );
    setInpList([...list]);
    if (onChange) {
      onChange(e, inpList);
    }
  };

  const getDesc = (item) => {
    return (
      <div className={"custom-label"}>
        <img
          src={item.isActive ? item.inActiveIcon : item.icon}
          alt={item.title}
        />
      </div>
    );
  };
  return (
    <div className="zakat-cal-step2">
      <Grid
        container
        spacing={2}
        justifyContent="center"
        className={classes.gridContainer}
      >
        {inpList &&
          inpList.map((item, i) => (
            <Grid
              item
              className={inpList[i].isActive ? "active" : "inactive"}
              key={item.value}
              md={item.col}
              lg={item.col}
              sm={4}
            >
              <FormControlLabel
                value={item.value}
                control={
                  <Checkbox
                    icon={<RadioButtonUnchecked />}
                    checkedIcon={<CheckCircle />}
                    checked={inpList[i].isActive}
                    onChange={(e) => handleChange(e, inpList[i])}
                    value={item.value}
                  />
                }
                label={getDesc(inpList[i])}
                className={inpList[i].isActive ? "active" : "inactive"}
              />
              <label
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {t(inpList[i].title)}
              </label>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};
export default CheckboxList;
