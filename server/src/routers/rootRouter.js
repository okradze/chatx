import express from 'express'

import authRouter from './authRouter'
import userRouter from './userRouter'
import chatRouter from './chatRouter'
import messageRouter from './messageRouter'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/chats', chatRouter)
router.use('/messages', messageRouter)

export default router
