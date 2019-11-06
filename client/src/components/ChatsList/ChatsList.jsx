import React from 'react'

import ChatItem from '../ChatItem/ChatItem'
import './ChatsList.scss'

const ChatsList = () => {
    const chats = null
    return (
        <div className='chats-list'>
            {chats &&
                chats.map(({ id, ...otherChatItemProps }) => (
                    <ChatItem key={id} {...otherChatItemProps} />
                ))}
        </div>
    )
}

export default ChatsList
