import axios from 'axios'
import {
    SET_CHATS,
    CREATE_CHAT,
    SET_SELECTED_CHAT_ID,
    SET_MESSAGES,
    ADD_MESSAGE,
} from './chatsTypes'

const setMessages = messages => ({
    type: SET_MESSAGES,
    payload: messages,
})

export const setSelectedChatId = chatId => ({
    type: SET_SELECTED_CHAT_ID,
    payload: chatId,
})

const setChats = chats => ({
    type: SET_CHATS,
    payload: chats,
})

const createChat = chat => ({
    type: CREATE_CHAT,
    payload: chat,
})

export const addMessage = message => ({
    type: ADD_MESSAGE,
    payload: message,
})

export const fetchChats = () => {
    return async dispatch => {
        const response = await axios.get('/chats')
        dispatch(setChats(response.data))
        if (response.data.length > 0) {
            dispatch(setSelectedChatId(response.data[0]._id))
        }
    }
}

export const startCreateChat = users => {
    return async dispatch => {
        const response = await axios.post('/chats', { users })
        dispatch(createChat(response.data))
    }
}

export const fetchMessages = selectedChat => {
    return async (dispatch, getState) => {
        if (selectedChat && !getState().chats.messages[selectedChat]) {
            const response = await axios.get(`messages?chat=${selectedChat}`)
            dispatch(setMessages(response.data))
        }
    }
}

export const startSendMessage = text => {
    return async (dispatch, getState) => {
        const chatId = getState().chats.selectedChatId
        const response = await axios.post('messages', { text, chat: chatId })
        dispatch(addMessage(response.data))
    }
}
