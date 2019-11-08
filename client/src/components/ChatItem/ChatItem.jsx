import React from 'react'
import { connect } from 'react-redux'

import { setSelectedChat } from '../../redux/chats/chatsActions'
import Avatar from '../Avatar/Avatar'
import './ChatItem.scss'

const ChatItem = ({ _id, name, imageUrl, lastMessage, setSelectedChat }) => (
    <div onClick={() => setSelectedChat(_id)} className='chat-item'>
        <Avatar imageUrl={imageUrl} medium />
        <span className='chat-item__name'>{name}</span>
        <span className='chat-item__last-message'>{lastMessage}</span>
        <span className='chat-item__date'>13:34</span>
        <span className='chat-item__notifications'>2</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    setSelectedChat: id => dispatch(setSelectedChat(id)),
})

export default connect(
    null,
    mapDispatchToProps,
)(ChatItem)
