import React from 'react';
import PropTypes from 'prop-types';

function Button({ type }) {
    return <button type={type}>Deploy</button>;
}

Button.propTypes = {
    type: PropTypes.oneOf([]).isRequired,
};

export default Button;
