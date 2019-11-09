import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { addMessage } from '../../redux/chats/chatsActions'
import { fetchMessages } from '../../redux/chats/chatsActions'
import {
    selectMessages,
    selectSelectedChatId,
} from '../../redux/chats/chatsSelectors'
import Spinner from '../Spinner/Spinner'
import MessageItem from '../MessageItem/MessageItem'
import MessageForm from '../MessageForm/MessageForm'
import './MessagesList.scss'

const MessagesList = ({
    fetchMessages,
    messages,
    selectedChatId,
    addMessage,
}) => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        try {
            const fetchData = async () => {
                await fetchMessages(selectedChatId)
                setLoading(false)
            }
            fetchData()
        } catch (error) {}
    }, [fetchMessages, selectedChatId])

    return (
        <div className='chat-overview'>
            <div className='messages-list'>
                {messages &&
                    messages.map(messageItem => (
                        <MessageItem key={messageItem._id} {...messageItem} />
                    ))}
                {loading && <Spinner />}
            </div>
            <MessageForm />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    messages: selectMessages,
    selectedChatId: selectSelectedChatId,
})

const mapDispatchToProps = dispatch => ({
    fetchMessages: selectedChat => dispatch(fetchMessages(selectedChat)),
    addMessage: message => dispatch(addMessage(message)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MessagesList)
