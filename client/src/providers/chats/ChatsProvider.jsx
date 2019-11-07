import React, { useState, useCallback, createContext } from 'react'
import axios from 'axios'

export const ChatsContext = createContext()

const ChatProvider = ({ children }) => {
    const [chats, setChats] = useState(null)
    const [selectedChat, setSelectedChat] = useState(null)
    const [messages, setMessages] = useState({})

    const fetchChats = useCallback(async () => {
        const response = await axios.get('/chats')
        setChats(response.data)
    }, [])

    const fetchMessages = useCallback(async () => {
        if (selectedChat) {
            const response = await axios.get(`messages?chat=${selectedChat}`)

            const prevMessages = messages[selectedChat]
                ? messages[selectedChat]
                : []

            setMessages({
                ...messages,
                [selectedChat]: [...response.data, ...prevMessages],
            })
        }
    }, [selectedChat])

    return (
        <ChatsContext.Provider
            value={{
                messages: messages[selectedChat],
                chats,
                setSelectedChat,
                fetchMessages,
                fetchChats,
            }}
        >
            {children}
        </ChatsContext.Provider>
    )
}

export default ChatProvider
