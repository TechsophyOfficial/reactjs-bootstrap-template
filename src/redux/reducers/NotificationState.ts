export type AlertType = "success" | "error" | "info" | "warning";

export interface NotifyAlert {
  enable: boolean;
  type: AlertType;
  message: string;
  duration: number;
}

export type NotifyEvent = {
  type: "SEND_ALERT";
  data: NotifyAlert;
};

export const initialAlertState: NotifyAlert = {
  enable: false,
  type: "success",
  message: "",
  duration: 0,
};

export default (
  state: NotifyAlert = initialAlertState,
  event: NotifyEvent
): NotifyAlert => {
  switch (event.type) {
    case "SEND_ALERT":
      return event.data;
    default:
      return state;
  }
};
