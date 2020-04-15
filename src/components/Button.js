import React from 'react';
import PropTypes from 'prop-types'

export default function Button( {children, onClick, type, style, className}) {
    return (
        <button 
        className={className}
        style={style}
        onClick={onClick}
        type={type}
        >
            {children}
        </button>
    )
}
Button.
