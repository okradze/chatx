import React from 'react'
import Avatar from '../Avatar/Avatar'

import './MessageItem.scss'

const MessageItem = ({ imageUrl, text, date }) => (
    <div className='message-item'>
        <Avatar imageUrl={imageUrl} />
        <div className='message-item__text'>{text}</div>
        <div className='message-item__date'>{date}</div>
    </div>
)

export default MessageItem
