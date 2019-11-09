import React from 'react'

import { ReactComponent as SettingsIcon } from '../../assets/settings.svg'
import './ChatHeader.scss'

const ChatHeader = ({ chatName }) => (
    <div className='chat-header'>
        <div className='chat-header__content'>
            <h4 className='chat-header__name'>{chatName}</h4>
            <span className='chat-header__status'>Active Now</span>
        </div>
        <SettingsIcon className='settings-icon' />
    </div>
)

export default ChatHeader
