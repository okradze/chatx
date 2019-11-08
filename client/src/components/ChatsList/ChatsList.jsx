import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { fetchChats } from '../../redux/chats/chatsActions'
import { selectChats } from '../../redux/chats/chatsSelectors'
import ChatItem from '../ChatItem/ChatItem'
import './ChatsList.scss'

const ChatsList = ({ fetchChats, chats }) => {
    useEffect(() => {
        fetchChats()
    }, [fetchChats])

    return (
        <div className='chats-list'>
            {chats.length > 0 &&
                chats.map(chatItem => (
                    <ChatItem key={chatItem._id} {...chatItem} />
                ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    chats: selectChats,
})

const mapDispatchToProps = dispatch => ({
    fetchChats: () => dispatch(fetchChats()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ChatsList)
