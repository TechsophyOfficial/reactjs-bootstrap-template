import React from 'react';
import Footer from "../footer";
import Header from "../header";
import { Spinner } from "../../common/Spinner";
import Notification from "../../common/notification";
import { useDispatch, useSelector } from "react-redux";
import { pushNotification } from "../../../redux/actions";

const Wrapper = (props) => {
  const dispatch = useDispatch();
  const { notification } = useSelector((state: any) => ({
    notification: state.notification,
  }));

  const closeNotification = () => {
    dispatch(
      pushNotification({
        ...notification,
        isOpen: false,
      })
    );
  };

  return window.location.href.indexOf("signup") <= -1 ? (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <div className="main-content-wrapper">{props.children}</div>
      <Spinner />
      <Notification
        isOpen={notification.isOpen}
        type={notification.type}
        message={notification.message}
        handleClose={closeNotification}
      />
      <Footer />
    </div>
  ) : (
    <div>
      <Notification
        isOpen={notification.isOpen}
        type={notification.type}
        message={notification.message}
        handleClose={closeNotification}
      />
      {props.children}
      <Spinner />
    </div>
  );
};

export default Wrapper;
