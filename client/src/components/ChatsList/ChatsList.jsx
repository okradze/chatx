import React, { useEffect, useContext } from 'react'

import { ChatsContext } from '../../providers/chats/ChatsProvider'
import ChatItem from '../ChatItem/ChatItem'
import './ChatsList.scss'

const ChatsList = () => {
    const { fetchChats, setSelectedChat, chats } = useContext(ChatsContext)

    useEffect(() => {
        fetchChats()
    }, [fetchChats])

    return (
        <div className='chats-list'>
            {chats &&
                chats.map(chatItem => (
                    <ChatItem
                        key={chatItem._id}
                        setSelectedChat={setSelectedChat}
                        {...chatItem}
                    />
                ))}
        </div>
    )
}

export default ChatsList
