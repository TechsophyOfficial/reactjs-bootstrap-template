import React from 'react';
import { Checkbox as MuiCheckbox, FormControlLabel, FormGroup } from '@material-ui/core';
import { CheckBox, CheckBoxOutlineBlank, CheckCircle, RadioButtonUnchecked } from '@material-ui/icons';
import Label from './Label';
import { useTranslation } from 'react-i18next';

const Checkbox = (props) => {
    const { label, color, checked, value, name, onChange, view, inputLabelStyles, ...other } = props;
    const { t } = useTranslation();

    return (
        <FormGroup>
            <FormControlLabel
                classes={{ label: 'MuiFormControlLabel-cust' }}
                control={
                    <MuiCheckbox
                        onChange={onChange}
                        color={color ? color : 'primary'}
                        checked={checked}
                        value={value}
                        name={name}
                        checkedIcon={view === 'circle' ? <CheckCircle /> : <CheckBox />}
                        icon={view === 'circle' ? <RadioButtonUnchecked /> : <CheckBoxOutlineBlank />}
                    />
                }
                label={<Label title={t(label)} inputLabelStyles={inputLabelStyles} />}
                {...other}
            />
        </FormGroup>
    );
};

export default Checkbox;
