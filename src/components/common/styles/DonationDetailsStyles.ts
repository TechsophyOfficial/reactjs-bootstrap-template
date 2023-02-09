import SIZES from "../../../theme/font_size.json";
import { makeStyles } from "@mui/styles";
import COLORS from "../../../theme/colors.json";

export const donationDetailsStyles = makeStyles(() => ({
  switchBox: {
    display: "flex",
    flexDirection: "row",
    marginTop: "20px",
    alignItems: "center",
    "& .Mui-checked": {
      "& .MuiSwitch-thumb": {
        margin: "-1px 0 0 0px",
      },
    },
    "& .MuiSwitch-thumb": {
      width: "16px",
      height: "16px",
      margin: "-1px 0 0 -0px",
    },
    "& .MuiSwitch-switchBase + .MuiSwitch-track": {
      height: "18px",
    },
  },
  curencySymbol: {
    color: COLORS.APP_THEME_COLOR,
  },
  oneTimeMonthlyWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  selectedModeText: {
    color: COLORS.APP_THEME_COLOR,
    fontSize: SIZES[16],
  },
  unSelectedModeText: {
    color: COLORS.GRAY,
    fontSize: SIZES[16],
  },
  amountText: {
    color: COLORS.GRAY,
    fontSize: SIZES[13],
  },
  amountBox: {
    border: `1px solid ${COLORS.BG_GRAY2}`,
  },
  selectedAmountBox: {
    backgroundColor: COLORS.APP_THEME_COLOR,
  },
  donationAmountsWrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: "5px",
  },
  unselectedAmount: {
    fontSize: SIZES[16],
    color: COLORS.APP_THEME_COLOR,
    fontWeight: "bold",
    lineHeight: "14px",
    cursor: "pointer",
  },
  selectedAmount: {
    fontSize: SIZES[16],
    color: COLORS.WHITE,
    fontWeight: "bold",
  },
  includeTipWrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: "20px",
    alignItems: "center",
  },
  includeTipText: {
    fontSize: SIZES[13],
    color: COLORS.GRAY,
    marginRight: "15px",
  },
  tipInputWrapper: {
    border: `1px solid ${COLORS.APP_THEME_COLOR}`,
    borderRadius: "10px",
    padding: "5px 15px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: "10px",
  },
  tipInput: {
    fontSize: SIZES[15],
    color: COLORS.TX_COLOR_5,
    fontWeight: "bold",
    border: "none",
    outline: "none",
    padding: "8px 0px",
    textAlign: "left",
    marginLeft: "5px",
  },
  tipInputColor: {
    //color: COLORS.APP_THEME_COLOR,
    //borderBottom: '1px solid',
    padding: "0 5px 0 0",
  },
  percentageAmount: {
    fontSize: SIZES[15],
    color: COLORS.TX_COLOR_5,
    fontWeight: "bold",
    marginLeft: "2px",
    marginRight: "2px",
  },
  percentage: {
    fontSize: SIZES[15],
    color: COLORS.APP_THEME_COLOR,
    fontWeight: "bold",
  },
  select: {
    borderRadius: "10px",
    width: "150px",
    height: "45px",
    padding: "0px 15px",
    backgroundColor: COLORS.WHITE,
    "& .MuiSelect-select": {
      backgroundColor: COLORS.WHITE,
    },
  },
  dropdownItems: {
    color: COLORS.APP_THEME_COLOR,
    fontSize: SIZES[15],
    fontWeight: "bold",
  },
  switchWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  switchRoot: {
    width: 38,
    height: 19,
    padding: 0,
  },
  switchBase: {
    padding: 2,
    "&$checked": {
      transform: "translateX(19px)",
      color: COLORS.WHITE,
      "& + $track": {
        backgroundColor: COLORS.APP_THEME_COLOR,
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: COLORS.APP_THEME_COLOR,
    },
  },
  thumb: {
    width: 15,
    height: 16,
  },
  track: {
    borderRadius: 9,
    backgroundColor: COLORS.TX_COLOR_5,
    opacity: 1,
  },
  checked: {},
  focusVisible: {},
  labelStyle: {
    fontSize: SIZES[13],
    color: COLORS.GRAY,
    marginLeft: "15px",
    marginTop: "0px",
  },
  labelAmount: {
    fontSize: SIZES[13],
    color: COLORS.APP_THEME_COLOR,
  },
}));
