import React, { Component } from 'react';
import "./index.scss"
import CONSTANTS from '../../constants/constants';
class LoadSxpChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userToken: '',
        };
    }

    componentDidMount = () => {
        this.getUserToken();
    };
    getUserToken = () => {
        const token = sessionStorage.getItem(CONSTANTS.REACT_TOKEN);
        this.setState({ userToken: token }, () => this.loadIt());
    };
    loadIt = () => {
        let mainObj = {
            socketUrl: process.env.REACT_APP_SOCKET_URL, //sxp URL
            socketPath: process.env.REACT_APP_SOCKET_PATH,
            SSL: true, //secure connection, true for https, false for http
            accessToken: `Bearer ${this.state.userToken}`,
            currentProject: process.env.REACT_APP_GET_SXP_PROJECT_ID, // name of the project / client you are working on / for
            fileServerUrl: process.env.REACT_APP_CHAT_FILE_SERVER_URL,
            mainTitle: CONSTANTS.SXP_TITLE,
            subTitle: CONSTANTS.SXP_SUBTITLE,
            chatRefresh: true,
            autoLaunch: false,
            lazyAutoLaunch: false,
            editChat: false,
            uploadDoc: true,
            defaultMessage: CONSTANTS.SXP_DEFAULT_MSG,
            languages: [],
            version: CONSTANTS.VERSION_ID,
            journeyTray: false,
        };
        window.embedSXPChat(mainObj);
    };
    render() {
        return <></>;
    }
}
export default LoadSxpChat;
