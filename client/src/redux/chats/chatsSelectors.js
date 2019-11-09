import { createSelector } from 'reselect'

const chats = state => state.chats

export const selectChats = createSelector(
    [chats],
    chats => chats.chats,
)

export const selectMessages = createSelector(
    [chats],
    chats => chats.messages[chats.selectedChatId],
)

export const selectSelectedChatId = createSelector(
    [chats],
    chats => chats.selectedChatId,
)
