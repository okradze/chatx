import React from 'react'

import './Avatar.scss'

const Avatar = ({ imageUrl, medium }) => (
    <img
        className={`avatar ${medium ? 'avatar--medium' : 'avatar--small'}`}
        src={imageUrl}
        alt='Avatar'
    />
)

export default Avatar
