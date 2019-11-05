import React from 'react'

import ChatItem from '../ChatItem/ChatItem'
import './ChatsList.scss'

const ChatsList = () => (
    <div className='chats-list'>
        <ChatItem
            lastMessage='Heyyy'
            name='Mirian Okradze'
            imageUrl='https://api.adorable.io/avatars/128/abott@adorable.png'
        />
        <ChatItem
            lastMessage='How are you?'
            name='Mirian Okradze'
            imageUrl='https://api.adorable.io/avatars/128/abott@adorable.png'
        />
        <ChatItem
            lastMessage='Great, thank you'
            name='Mirian Okradze'
            imageUrl='https://api.adorable.io/avatars/128/abott@adorable.png'
        />
    </div>
)

export default ChatsList
