import { combineReducers } from 'redux'

import userReducer from './user/userReducer'
import chatsReducer from './chats/chatsReducer'

const rootReducer = combineReducers({
    user: userReducer,
    chats: chatsReducer,
})

export default rootReducer
