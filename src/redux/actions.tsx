import { PUSH_NOTIFICATION } from '../constants/actions';

// Action Type
export const LOADER = 'LOADER';
export const ACCESS_TOEKN = 'ACCESS_TOEKN';

// Action
export const setLoader = (loading) => {
    return {
        type: LOADER,
        payload: loading,
    };
};

export const setAnonymousUser = (data) => {
    return {
        type: LOADER,
        payload: data,
    };
};

export const pushNotification = (data) => {
    return { type: PUSH_NOTIFICATION, payload: data };
};

export const setAccessToken = (token) => {
    return {
        type: ACCESS_TOEKN,
        payload: token
    }
}
