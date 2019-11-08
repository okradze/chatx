import { SET_CHATS, CREATE_CHAT, SET_SELECTED_CHAT } from './chatsTypes'

const initialState = {
    selected: '',
    chats: []
}

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHATS:
            return { ...state, chats: action.payload }
        case CREATE_CHAT:
            return { ...state, chats: [action.payload, ...state.chats] }
        case SET_SELECTED_CHAT:
            return { ...state, selected: action.payload }
        default:
            return state
    }
}

export default chatsReducer