import React from 'react';
import '../../../index.scss';
import { useTranslation } from 'react-i18next';
const RadioButtonGroup = (props) => {
    const { amount } = props;
    const { t } = useTranslation();
    return (
        <label className="lablbtn">
            <input type="radio" name="radioname" value={amount} defaultChecked />
            <div className="radio-group">{t(amount)}</div>
        </label>
    );
};

export default RadioButtonGroup;
