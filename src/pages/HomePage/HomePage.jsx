import React from 'react'

import ChatsList from '../../components/ChatsList/ChatsList'
import MessagesList from '../../components/MessagesList/MessagesList'
import './HomePage.scss'

const HomePage = () => (
    <div className='homepage'>
        <ChatsList />
        <MessagesList />
    </div>
)

export default HomePage
