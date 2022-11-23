import { createTheme } from '@material-ui/core';
import SIZE from './font_size.json';

const primary = '#025e5e';
const primaryLight = '#95CBF7';
const secondary = '#fff';
const error = '#f17b7b';

export const INITIAL_THEME = createTheme({
    overrides: {
        MuiButton: {
            root: {
                borderRadius: SIZE[9],
            },
        },
        MuiTab: {
            root: {
                textTransform: 'capitalize',
            },
        },
        MuiOutlinedInput: {
            notchedOutline: {
                borderColor: primary,
                borderRadius: SIZE[9],
            },
        },
        MuiInputAdornment: {
            root: {
                color: primary,
                borderRight: '1px solid #ccc',
                paddingRight: '10px',
            },
        },
        MuiCheckbox: {
            root: {
                color: primary,
            },
        },
    },
    palette: {
        type: 'light',
        primary: {
            main: primary,
            light: primaryLight,
        },
        secondary: {
            main: secondary,
        },
        error: {
            main: error,
        },
    },
});
