import axios from 'axios'
import { SET_CHATS, CREATE_CHAT, SET_SELECTED_CHAT } from './chatsTypes'

const setChats = (chats) => ({
    type: SET_CHATS,
    payload: chats
})

const createChat = (chat) => ({
    type: CREATE_CHAT,
    payload: chat
})

export const setSelectedChat = (id) => ({
    type: SET_SELECTED_CHAT,
    payload: id
})

export const fetchChats = () => {
    return async dispatch => {
        const response = await axios.get('/chats')
        dispatch(setChats(response.data))
    }
}

export const startCreateChat = (users) => {
    return async dispatch => {
        const response = await axios.post('/chats', { users })
        dispatch(createChat(response.data))
    }
}