import React, { useState } from 'react'
import { connect } from 'react-redux'

import { startSendMessage } from '../../redux/chats/chatsActions'
import './MessageForm.scss'

const MessageForm = ({ sendMessage }) => {
    const [text, setText] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        sendMessage(text)
        setText('')
    }

    return (
        <form onSubmit={handleSubmit} className='message-form'>
            <input
                type='text'
                value={text}
                onChange={event => setText(event.target.value)}
                className='message-form__input'
                placeholder='Send message'
            />
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    sendMessage: text => dispatch(startSendMessage(text)),
})

export default connect(
    null,
    mapDispatchToProps,
)(MessageForm)
