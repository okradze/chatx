import {
    SET_CHATS,
    CREATE_CHAT,
    SET_SELECTED_CHAT_ID,
    SET_MESSAGES,
    ADD_MESSAGE,
} from './chatsTypes'

const initialState = {
    selectedChatId: '',
    chats: [],
    messages: {},
}

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHATS:
            return { ...state, chats: [...state.chats, ...action.payload] }
        case CREATE_CHAT:
            return { ...state, chats: [action.payload, ...state.chats] }
        case SET_SELECTED_CHAT_ID:
            return { ...state, selectedChatId: action.payload }
        case SET_MESSAGES:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedChatId]: action.payload,
                },
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chat]: [
                        ...state.messages[state.selectedChatId],
                        action.payload,
                    ],
                },
            }
        default:
            return state
    }
}

export default chatsReducer
