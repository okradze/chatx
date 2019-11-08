import { createSelector } from 'reselect'

const chats = state => state.chats

export const selectChats = createSelector([chats], chats => chats.chats)
