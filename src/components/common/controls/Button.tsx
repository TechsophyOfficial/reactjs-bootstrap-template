import React from 'react';
import { Button as MuiButton, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0.5),
        borderRadius: 5,
        borderWidth: 1.5,
    },
    label: {
        textTransform: 'none',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        fontWeight: 'bold',
    },
}));

const Button = (props) => {
    const { text, size, color, variant, onClick, disabled, startIcon, ...other } = props;
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <MuiButton
            variant={variant || 'contained'}
            size={size || 'large'}
            color={color || 'primary'}
            onClick={onClick}
            disabled={disabled}
            startIcon={startIcon || ''}
            classes={{ root: classes.root, label: classes.label }}
            {...other}>
            {t(text)}
        </MuiButton>
    );
};

export default Button;
