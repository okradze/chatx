import React from 'react'

import './CustomButton.scss'

const CustomButton = ({ children, ...otherProps }) => (
    <button type='button' className='custom-button' {...otherProps}>
        {children}
    </button>
)

export default CustomButton
