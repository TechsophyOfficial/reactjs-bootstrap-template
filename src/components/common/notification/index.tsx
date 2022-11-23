import React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { NotificationProps } from './type';

const Notification = ({ className, isOpen, type, message, handleClose, ...rest }: NotificationProps) => {
    return (
        <Snackbar
            className={className}
            open={isOpen}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            {...rest}
            onClose={handleClose}>
            <Alert severity={type ? type : 'info'} variant="filled" onClose={handleClose}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Notification;
