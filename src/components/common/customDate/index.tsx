import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";
import React, { useState } from "react";
import Button from "../../common/controls/Button";
import Input from "../../common/controls/Input";
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import CONSTANTS from "../../../constants/constants";

interface CustomDateProps {
  open: boolean;
  handleSubmit: (f, t) => void;
  handleClose: (e) => void;
}

const CustomDate = ({ open, handleSubmit, handleClose }: CustomDateProps) => {
  const STARTING_YEAR = "2021";
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const { t } = useTranslation();

  const renderCustomPopup = () => {
    return (
      <Dialog onClose={handleClose} open={open} id="cust-date-wrapper">
        <DialogTitle>
          {t(CONSTANTS.SELECT_START_END_DATE)}
          <span className="modal-close-btn">
            <IconButton
              color="primary"
              aria-label="modal-close-btn"
              onClick={handleClose}
            >
              <Close />
            </IconButton>
          </span>
        </DialogTitle>

        <DialogContent style={{ minHeight: "80px" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Input
                label={t("Start Date")}
                size="small"
                type="date"
                onChange={(e) => setFromDate(e.target.value)}
                minDate={new Date(STARTING_YEAR)}
                maxDate={new Date()}
                value={fromDate}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                label={t("End Date")}
                size="small"
                type="date"
                onChange={(e) => setToDate(e.target.value)}
                minDate={new Date(fromDate)}
                maxDate={new Date()}
                value={toDate}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            text={t("Cancel")}
            className="button close"
            type="button"
            onClick={handleClose}
          />
          <Button
            text={t("Submit")}
            className="button ok"
            //variant="text"
            type="button"
            onClick={() => handleSubmit(fromDate, toDate)}
          />
        </DialogActions>
      </Dialog>
    );
  };

  return <div className="custom-date-wrap">{renderCustomPopup()}</div>;
};

export default CustomDate;
