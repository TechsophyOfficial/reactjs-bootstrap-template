import React, { useState, useEffect } from "react";
import CONSTANTS from "../../constants/constants";
import "./index.css";

const LoadSxpChat = () => {
  useEffect(() => {
    const token = sessionStorage.getItem(CONSTANTS.REACT_TOKEN);
    if (token) {
      loadIt(token);
    } else {
      console.error("User token not found in session storage");
    }
  }, []);

  const loadIt = (token) => {
    const {
      REACT_APP_SOCKET_URL,
      REACT_APP_SOCKET_PATH,
      REACT_APP_GET_SXP_PROJECT_ID,
      REACT_APP_CHAT_FILE_SERVER_URL,
    } = process.env;

    const mainObj = {
      socketUrl: REACT_APP_SOCKET_URL,
      socketPath: REACT_APP_SOCKET_PATH,
      SSL: true,
      accessToken: `Bearer ${token}`,
      currentProject: REACT_APP_GET_SXP_PROJECT_ID,
      fileServerUrl: REACT_APP_CHAT_FILE_SERVER_URL,
      mainTitle: CONSTANTS.SXP_TITLE,
      subTitle: CONSTANTS.SXP_SUBTITLE,
      chatRefresh: true,
      autoLaunch: false,
      lazyAutoLaunch: false,
      editChat: false,
      uploadDoc: true,
      defaultMessage: CONSTANTS.SXP_DEFAULT_MSG,
      languages: [],
      version: CONSTANTS.SETTINGS.VERSION_ID,
      journeyTray: false,
    };

    if (
      !REACT_APP_SOCKET_URL ||
      !REACT_APP_SOCKET_PATH ||
      !REACT_APP_GET_SXP_PROJECT_ID ||
      !REACT_APP_CHAT_FILE_SERVER_URL
    ) {
      console.error("Missing required environment variables for chat widget");
      return;
    }

    window.embedSXPChat(mainObj);
  };

  return null;
};

export default LoadSxpChat;
