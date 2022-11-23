import React from 'react';
import propTypes from 'prop-types';

const SwitchToggle = (props) => {
    const { disabled, switchProps } = props;
    const disabledStyle = disabled && { backgroundColor: 'blue' };
    return (
        <label className="switch">
            <input type="checkbox" style={{ ...switchProps, ...disabledStyle }} />
            <span className="slider round"></span>
        </label>
    );
};

SwitchToggle.defaultProps = {
    title: 'title',
    titleStyle: {},
    buttonContainerProps: {},
};

SwitchToggle.propTypes = {
    title: propTypes.string,
    titleStyle: propTypes.object,
    onClick: propTypes.func,
    disabled: propTypes.bool,
    buttonContainerProps: propTypes.object,
};

export default SwitchToggle;
