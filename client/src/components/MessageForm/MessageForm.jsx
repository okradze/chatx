import React from 'react'
import './MessageForm.scss'

const MessageForm = () => (
    <form className='message-form'>
        <input
            className='message-form__input'
            placeholder='Send message'
            type='text'
        />
    </form>
)

export default MessageForm
