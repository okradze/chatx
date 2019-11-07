import express from 'express'
import Chat from '../models/Chat'
import auth from '../middlewares/auth'

const router = express.Router()

// @route /api/chats
// @desc get chats
router.get('/', auth, async (req, res) => {
    try {
        const chats = await Chat.find({ users: req.userId }).populate('users')
        res.send(chats)
    } catch (error) {
        res.status(500).send({ error: 'Unable to get chats' })
    }
})

// @route /api/chats
// @desc create chat
router.post('/', auth, async (req, res) => {
    try {
        // remove duplicates from an users array
        const users = [...new Set([req.userId, ...req.body.users])]

        if (users.length < 2) {
            res.status(400).send({ error: 'No users' })
        }

        const chat = await new Chat({ users }).save()

        res.status(201).send(chat)
    } catch (error) {
        res.status(500).send({ error: 'Unable to create chat' })
    }
})

export default router
