import React from 'react';
import PropTypes from 'prop-types';

const BackDrop = ({ children }) => (
    <div className="fixed w-screen h-screen bg-gray-500 bg-opacity-50 z-10 top-0 flex justify-center items-center mx-auto px-2" >
        {children}
    </div>
)

BackDrop.propTypes = {
    children: PropTypes.node.isRequired
}

export default BackDrop;