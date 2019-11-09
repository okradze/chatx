import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectUserId } from '../../redux/user/userSelectors'
import Avatar from '../Avatar/Avatar'
import './MessageItem.scss'

const MessageItem = ({ imageUrl, text, date, user, currentUserId }) => (
    <div
        className={`message-item ${user === currentUserId &&
            'message-item--right'}`}
    >
        <Avatar imageUrl={imageUrl} />
        <div className='message-item__text'>{text}</div>
        <div className='message-item__date'>{date}</div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUserId: selectUserId,
})

export default connect(mapStateToProps)(MessageItem)
