import React from 'react';
import { Radio as MuiCheckbox, FormControlLabel, FormGroup } from '@material-ui/core';
import { CheckBox, CheckBoxOutlineBlank, CheckCircle, RadioButtonUnchecked } from '@material-ui/icons';
import Label from './Label';

const RadioSingle = (props) => {
    const { label, color, onClick, view, ...other } = props;
    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <MuiCheckbox
                        color={color ? color : 'default'}
                        checkedIcon={view === 'circle' ? <CheckCircle /> : <CheckBox />}
                        icon={view === 'circle' ? <RadioButtonUnchecked /> : <CheckBoxOutlineBlank />}
                    />
                }
                label={<Label title={label} />}
                {...other}
            />
        </FormGroup>
    );
};

export default RadioSingle;
