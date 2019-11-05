import React from 'react'

import Avatar from '../Avatar/Avatar'
import './ChatItem.scss'

const ChatItem = ({ name, imageUrl, lastMessage }) => (
    <div className='chat-item'>
        <Avatar imageUrl={imageUrl} medium />
        <span className='chat-item__name'>{name}</span>
        <span className='chat-item__last-message'>{lastMessage}</span>
        <span className='chat-item__date'>13:34</span>
        <span className='chat-item__notifications'>2</span>
    </div>
)

export default ChatItem