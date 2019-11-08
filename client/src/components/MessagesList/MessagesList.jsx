import React, { useEffect } from 'react'

import MessageItem from '../MessageItem/MessageItem'
import MessageForm from '../MessageForm/MessageForm'
import './MessagesList.scss'

const MessagesList = () => {
    // useEffect(() => {
    //     fetchMessages()
    // }, [fetchMessages])

    return (
        <div className='chat-overview'>
            <div className='messages-list'>
                {/* {messages &&
                    messages.map(({ id, ...otherMessageProps }, idx) => (
                        <MessageItem key={id} {...otherMessageProps} />
                    ))} */}
            </div>
            <MessageForm />
        </div>
    )
}

export default MessagesList
