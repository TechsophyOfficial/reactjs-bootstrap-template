import React from "react";
import { Switch, Typography } from "@mui/material";
import { donationDetailsStyles } from "../styles/DonationDetailsStyles";
import { useTranslation } from "react-i18next";

interface Props {
  checked: boolean;
  onChange: (elm) => void;
  name?: string;
  label?: string;
  labelStyle?: string;
  disabled?: boolean;
}

const Toggle = ({
  checked,
  onChange,
  name,
  label,
  labelStyle,
  disabled,
}: Props) => {
  const classes = donationDetailsStyles();
  const { t } = useTranslation();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Switch
        classes={{
          root: classes.switchRoot,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        checked={checked}
        onChange={onChange}
        name={name}
        disabled={disabled}
      />
      {label && (
        <Typography className={labelStyle} style={{ paddingLeft: 2 }}>
          {t(label)}
        </Typography>
      )}
    </div>
  );
};

export default Toggle;
