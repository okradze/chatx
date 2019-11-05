import React from 'react'

import ChatItem from '../ChatItem/ChatItem'
import './ChatsList.scss'

const chats = [
    {
        name: 'Mario Santacrole',
        imageUrl:
            'https://robohash.org/quasiconsequaturdebitis.png?size=128x128&set=set1',
        lastMessage: 'Greenholt Group',
        id: 'fe62af2e-5758-43c7-b397-358bc44b289d',
    },
    {
        name: 'Bowie Paolozzi',
        imageUrl:
            'https://robohash.org/velitnumquamodio.jpg?size=128x128&set=set1',
        lastMessage: 'Dickens-Kertzmann',
        id: 'f3e833f1-9955-4217-94ed-9802af7d9204',
    },
    {
        name: 'Vail Braunton',
        imageUrl: 'https://robohash.org/quaefaceread.png?size=128x128&set=set1',
        lastMessage: 'Ritchie-Larkin',
        id: '11dcb823-eb58-4484-9c20-aa0c56c77cf2',
    },
    {
        name: 'Fraze Prestige',
        imageUrl: 'https://robohash.org/nisiquaea.bmp?size=128x128&set=set1',
        lastMessage: 'Cronin and Sons',
        id: 'f2dfd6e3-1705-4420-a2d6-c60297f7d5b7',
    },
    {
        name: 'Corette McGraffin',
        imageUrl:
            'https://robohash.org/temporesintreprehenderit.jpg?size=128x128&set=set1',
        lastMessage: 'Legros, Champlin and Kuhic',
        id: 'f404c440-3f45-49ef-ac31-19dfcbc8e2ec',
    },
    {
        name: 'Garold Ingolotti',
        imageUrl:
            'https://robohash.org/eatemporibusimpedit.png?size=128x128&set=set1',
        lastMessage: "Lockman, Rempel and D'Amore",
        id: '7d46e776-54de-4c55-8f01-6c3fa391a229',
    },
]

const ChatsList = () => (
    <div className='chats-list'>
        {chats.map(({ id, ...otherChatItemProps }) => (
            <ChatItem key={id} {...otherChatItemProps} />
        ))}
    </div>
)

export default ChatsList
