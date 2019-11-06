import React, { useState, useEffect } from 'react'

import { fetchChats } from '../../firebase/chat'
import ChatItem from '../ChatItem/ChatItem'
import './ChatsList.scss'

const ChatsList = () => {
    const [chats, setChats] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        try {
            const startFetch = async () => {
                const data = await fetchChats()
                setChats(data)
            }

            startFetch()
        } catch (error) {}
        setLoading(false)
    }, [])

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
