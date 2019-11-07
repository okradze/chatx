import React, { useContext, useEffect } from 'react'

import { ChatsContext } from '../../providers/chats/ChatsProvider'
import MessageItem from '../MessageItem/MessageItem'
import MessageForm from '../MessageForm/MessageForm'
import './MessagesList.scss'

const MessagesList = () => {
    const { fetchMessages, messages } = useContext(ChatsContext)

    useEffect(() => {
        fetchMessages()
    }, [fetchMessages])

    return (
        <div className='chat-overview'>
            <div className='messages-list'>
                {messages &&
                    messages.map(({ id, ...otherMessageProps }, idx) => (
                        <MessageItem key={id} {...otherMessageProps} />
                    ))}
            </div>
            <MessageForm />
        </div>
    )
}

export default MessagesList
