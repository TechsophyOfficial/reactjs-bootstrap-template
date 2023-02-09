import React from "react";
import Popup from "reactjs-popup";
import { Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

import "reactjs-popup/dist/index.css";
import Buttons from "./controls/Button";

const useStyles = makeStyles((theme) => ({
  actions: {
    display: "grid",
    gridAutoFlow: "column",
    gridColumnGap: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  header: {
    fontSize: "15px",
    fontWeight: "bold",
    marginLeft: theme.spacing(3),
  },
  modal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  iconSuccess: {
    width: "85px",
    height: "85px",
  },
  paragraphContent: {
    width: "430px",
    height: "72px",
    color: "#5E5E5E",
    fontSize: "16px",
    lineHeight: "29px",
    textAlign: "center",
  },
  closeIcon: {
    "&:hover": {
      backgroundColor: "white",
    },
  },
  popupClass: {
    height: "230px !important",
  },
}));

interface ModalProp {
  isOpen: boolean;
  text: string;
  callBackModal: () => void;
  handleSubmit: (e) => void;
  labelBtn: string;
}

const Modal = ({
  isOpen,
  text,
  labelBtn,
  callBackModal,
  handleSubmit,
}: ModalProp) => {
  const classes = useStyles();

  return (
    <Popup
      contentStyle={{ width: "80%", height: "230px" }}
      open={isOpen}
      modal
      nested
    >
      <div>
        <div className={classes.modal}>
          <Button
            className={classes.closeIcon}
            style={{ alignSelf: "flex-end" }}
            onClick={callBackModal}
          >
            <Close />
          </Button>
          <div className={classes.header}>
            <p className={classes.paragraphContent}>{text}</p>
          </div>
          <div className={classes.actions}>
            <Buttons text={labelBtn} onClick={handleSubmit} />

            <Buttons text={"Close"} onClick={callBackModal} />
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default Modal;
