import React, { useEffect, useState } from "react";
import { InputAdornment, IconButton } from "@mui/material";
import "../../../index.scss";
import Input from "./Input";
import SIZE from "../../../theme/font_size.json";
import COLORS from "../../../theme/colors.json";
import attach from "../../../assets/img/icons/att.png";
import { MetaInfo } from "../../../types/types";
import { useDispatch } from "react-redux";
import { pushNotification, setLoader } from "../../../redux/actions";
import DownloadIcon from "../../../assets/svg/Download_Primary.svg";
import {
  downloadTemplateApi,
  uploadFileApi,
} from "../../../services/UploadFile";
import CONSTANTS from "../../../constants/constants";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  uploadInput: {
    "& .MuiOutlinedInput-adornedEnd": {
      padding: "0px 0px 0px 14px",
    },
    "& $input": {
      padding: "10.5px 14px !important",
    },
    "& $fieldset.MuiOutlinedInput-notchedOutline": {
      borderColor: COLORS.APP_THEME_COLOR,
    },
  },
  uploadIcon: {
    marginBottom: 0,
    "& svg": {
      stroke: theme.palette.primary.main,
      strokeWidth: SIZE[2],
    },
  },
  readOnlyInput: {
    pointerEvents: "none",
    userSelect: "none",
    display: "none",
  },
}));

interface DataProps {
  metaInfo?: MetaInfo;
  name?: string;
  id?: string;
}

interface UploadProps {
  name?: string;
  label?: string;
  size?: string;
  id?: string;
  required?: boolean;
  value?: string;
  disabled?: boolean;
  error?: string;
  placeholder?: string;
  documentPath?: string;
  data?: DataProps;
  onChange?: (event, data?: any, metaInfo?: any, isFirstTime?: string) => void;
  inputLabelStyles?: any;
  campaignDataDocs?: any;
}

const FileUpload = (props: UploadProps) => {
  const classes = useStyles();
  const [fileName, setFileName] = useState("");
  // const [isFirstTime, setIsFirstTime] = useState(true);
  const [currentId, setCurrentId] = useState("");
  const dispatch = useDispatch();
  const [businessUserExists, setBusinessUserExists] = useState(false);
  const {
    name,
    label,
    size = "medium",
    id,
    required,
    placeholder,
    documentPath,
    disabled,
    value,
    data,
    // error = null,
    onChange,
    inputLabelStyles,
    campaignDataDocs,
    ...other
  } = props;

  useEffect(() => {
    if (data?.name) {
      setFileName(data.name);
    }
    if (data?.id) {
      setCurrentId(data.id);
    }
    const busUserExists = sessionStorage.getItem(CONSTANTS.BUSINESS_USER);
    if (busUserExists) {
      setBusinessUserExists(true);
    }
  }, [data]);

  const openFTL = (e, ftlFile: File, metadata, isNew): void => {
    setFileName(ftlFile?.name);
    const reader = new FileReader();
    reader.onload = async (event) => {
      const metaInfo = data?.metaInfo ? data.metaInfo : {};

      uploadFileFn(e, ftlFile?.name, ftlFile, metaInfo, isNew);
    };
    reader.readAsText(ftlFile);
  };

  const uploadFileFn = async (e, file_name, file, metaInfo, isNew) => {
    dispatch(setLoader(true));
    const { success, data, message } = await uploadFileApi(
      file_name,
      file,
      documentPath ? documentPath : "/",
      metaInfo
    );
    if (success) {
      dispatch(
        pushNotification({
          isOpen: true,
          message: message,
          type: CONSTANTS.SUCCESS,
        })
      );

      if (onChange) {
        onChange(e, data, metaInfo, currentId);
        setCurrentId(data.id);
      }
      dispatch(setLoader(false));
    }
    if (!success) {
      dispatch(setLoader(false));
      dispatch(
        pushNotification({
          isOpen: true,
          message: message ? message : CONSTANTS.COULDNT_UPLOAD_DOC,
          type: CONSTANTS.ERROR,
        })
      );
    }
  };

  const downloadApi = async (fileName) => {
    if (campaignDataDocs && campaignDataDocs.length > 0) {
      let docObj = campaignDataDocs.find((item) => item.fileName === fileName);
      if (!docObj && currentId) {
        docObj = {};
        docObj["documentId"] = currentId;
      }
      if (docObj) {
        const { success, blobFile } = await downloadTemplateApi(
          docObj?.documentId
        );
        if (success) {
          // Get the blob file

          const blobUrl = URL.createObjectURL(blobFile);

          // Create a link element
          const link = document.createElement("a");

          // Set link's href to point to the Blob URL
          link.href = blobUrl;
          link.download = fileName;

          // Append link to the body
          document.body.appendChild(link);

          // Dispatch click event on the link
          // This is necessary as link.click() does not work on the latest firefox
          link.dispatchEvent(
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
              view: window,
            })
          );

          // Remove link from body
          document.body.removeChild(link);
        }
      }
    }
  };

  const onChangeValue = (e) => {
    const flag = fileName ? false : true;
    setFileName(e.target.files[0].name);
    openFTL(e, e.target.files[0], data, flag);
  };

  return (
    <div className="file-upload-wrapper">
      <Input
        inputLabelStyles={inputLabelStyles}
        size={size}
        label={label}
        required={required}
        className={classes.uploadInput}
        value={fileName ? "Attached" : ""}
        placeholder={placeholder}
        disabled={disabled}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={attach} alt={label} />
            </InputAdornment>
          ),
          endAdornment: (
            <>
              <InputAdornment position="end">
                <input
                  id={id}
                  color="primary"
                  accept="image/*"
                  type="file"
                  disabled={disabled}
                  readOnly
                  className={classes.readOnlyInput}
                  onChange={onChangeValue}
                  multiple
                />

                <IconButton>
                  <label htmlFor={id} className={classes.uploadIcon}>
                    <svg width={SIZE[18]} viewBox="0 0 32 32" fill="none">
                      <path d="M28 22 L28 30 4 30 4 22 M16 4 L16 24 M8 12 L16 4 24 12" />
                    </svg>
                  </label>
                </IconButton>
              </InputAdornment>
              {businessUserExists ? (
                fileName ? (
                  <IconButton onClick={() => downloadApi(fileName)}>
                    {" "}
                    <img
                      style={{ width: "25px" }}
                      src={DownloadIcon}
                      alt={"DOWNLOAD BUTTON"}
                    />
                  </IconButton>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </>
          ),
        }}
        {...other}
      />
    </div>
  );
};

export default FileUpload;
