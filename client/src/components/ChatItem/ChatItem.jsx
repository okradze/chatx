import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { addMessage } from '../../redux/chats/chatsActions'
import { socket } from '../../socket'
import { setSelectedChatId } from '../../redux/chats/chatsActions'
import Avatar from '../Avatar/Avatar'
import './ChatItem.scss'

const ChatItem = ({
    _id,
    name,
    imageUrl,
    lastMessage,
    setSelectedChatId,
    addMessage,
}) => {
    useEffect(() => {
        socket.on(`message:${_id}`, message => {
            addMessage(message)
        })
    }, [_id, addMessage])

    return (
        <div onClick={() => setSelectedChatId(_id)} className='chat-item'>
            <Avatar imageUrl={imageUrl} medium />
            <span className='chat-item__name'>{name}</span>
            <span className='chat-item__last-message'>{lastMessage}</span>
            <span className='chat-item__date'>13:34</span>
            <span className='chat-item__notifications'>2</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setSelectedChatId: id => dispatch(setSelectedChatId(id)),
    addMessage: message => dispatch(addMessage(message)),
})

export default connect(
    null,
    mapDispatchToProps,
)(ChatItem)
