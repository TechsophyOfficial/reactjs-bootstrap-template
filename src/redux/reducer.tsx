import { PUSH_NOTIFICATION } from "../constants/actions";
import COMMON from "../constants/common";
import { ACCESS_TOEKN, LOADER } from "./actions";

// Reducer

export interface NotificationProps {
  isOpen: boolean;
  type?: "error" | "info" | "success" | "warning";
  message?: string;
  handleClose?: () => void;
}
const initialState = {
  isLoading: false,
  notification: {},
  isAnonymous: true,
  access_token: '',
};

export const loadingActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };

    case PUSH_NOTIFICATION:
      return { ...state, notification: action.payload };

    case COMMON.ANONYMOUS:
      return {
        ...state,
        isAnonymous: action.payload,
      };

    case ACCESS_TOEKN:
      return {
        ...state,
        access_token: action.payload
      };

    default:
      return state;
  }
};
