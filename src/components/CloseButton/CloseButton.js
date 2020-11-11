import React from 'react';
import PropTypes from 'prop-types';

const CloseButton = ({ onClick }) => (
    <button data-testid="closeButton" type="button" className="px-2 font-bold text-2xl flex justify-center items-center" aria-label="Close"
        style={{ position: 'absolute', top: 10, right: 10, zIndex: 100 }}
        onClick={onClick}
    >
        &times;
    </button>
)


CloseButton.propTypes = {
    onClick: PropTypes.func
}

export default CloseButton;