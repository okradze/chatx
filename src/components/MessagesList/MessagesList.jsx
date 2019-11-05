import React from 'react'

import MessageItem from '../MessageItem/MessageItem'
import MessageForm from '../MessageForm/MessageForm'
import './MessagesList.scss'

const messages = [
    {
        date: '3/8/2019',
        text: 'Wiegand-Kuphal',
        imageUrl:
            'https://robohash.org/sitducimusfugit.png?size=128x128&set=set1',
    },
    {
        date: '7/26/2019',
        text: 'Friesen Group',
        imageUrl: 'https://robohash.org/aliasidin.png?size=128x128&set=set1',
    },
    {
        date: '5/25/2019',
        text: 'Parisian, Pfannerstill and Pfeffer',
        imageUrl: 'https://robohash.org/etlaborumcum.png?size=128x128&set=set1',
    },
    {
        date: '4/20/2019',
        text: 'Littel LLC',
        imageUrl: 'https://robohash.org/etexnemo.png?size=128x128&set=set1',
    },
    {
        date: '11/26/2018',
        text: 'Weissnat, Ryan and Bernier',
        imageUrl:
            'https://robohash.org/animieiusomnis.png?size=128x128&set=set1',
    },
    {
        date: '10/22/2019',
        text: 'Welch, Dickens and Swaniawski',
        imageUrl:
            'https://robohash.org/autemmaximeenim.png?size=128x128&set=set1',
    },
    {
        date: '10/25/2019',
        text: 'DuBuque, Parisian and Bergnaum',
        imageUrl:
            'https://robohash.org/mollitiadoloribusautem.png?size=128x128&set=set1',
    },
    {
        date: '6/29/2019',
        text: 'Wyman LLC',
        imageUrl:
            'https://robohash.org/possimusadipiscicumque.png?size=128x128&set=set1',
    },
    {
        date: '2/20/2019',
        text: 'Daniel, Abbott and Pollich',
        imageUrl:
            'https://robohash.org/possimusquisqui.png?size=128x128&set=set1',
    },
    {
        date: '4/22/2019',
        text: 'Baumbach Inc',
        imageUrl:
            'https://robohash.org/illosapienteet.png?size=128x128&set=set1',
    },
]

const MessagesList = () => (
    <div className='chat-overview'>
        <div className='messages-list'>
            {messages.map(({ key, ...otherMessageProps }) => (
                <MessageItem {...otherMessageProps} />
            ))}
        </div>
        <MessageForm />
    </div>
)

export default MessagesList
