import React from 'react'

import ProfilePreview from '../../components/ProfilePreview/ProfilePreview'
import ChatHeader from '../../components/ChatHeader/ChatHeader'
import ChatsList from '../../components/ChatsList/ChatsList'
import SearchBar from '../../components/SearchBar/SearchBar'
import MessagesList from '../../components/MessagesList/MessagesList'
import './HomePage.scss'

const HomePage = () => (
    <div className='homepage'>
        <div className='header'>
            <ProfilePreview />
            <ChatHeader />
        </div>
        <div className='sidebar'>
            <SearchBar />
            <ChatsList />
        </div>
        <MessagesList />
    </div>
)

export default HomePage
