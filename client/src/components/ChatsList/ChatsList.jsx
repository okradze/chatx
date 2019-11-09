import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { fetchChats } from '../../redux/chats/chatsActions'
import { selectChats } from '../../redux/chats/chatsSelectors'
import Spinner from '../Spinner/Spinner'
import ChatItem from '../ChatItem/ChatItem'
import './ChatsList.scss'

const ChatsList = ({ fetchChats, chats }) => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            await fetchChats()
            setLoading(false)
        }
        fetchData()
    }, [fetchChats])

    return (
        <div className='chats-list'>
            {chats &&
                chats.map(chatItem => (
                    <ChatItem key={chatItem._id} {...chatItem} />
                ))}
            {loading && <Spinner />}
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
