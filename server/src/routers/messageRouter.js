import express from 'express'
import Message from '../models/Message'
import auth from '../middlewares/auth'

const router = express.Router()

// @route /api/messages
// @desc get messages
router.get('/', auth, async (req, res) => {
    try {
        const messages = await Message.find({ chat: req.query.chat })

        res.send(messages)
    } catch (error) {
        res.status(500).send({ error: 'Unable to get messages' })
    }
})

router.delete('/', auth, async (req, res) => {
    try {
        await Message.findByIdAndDelete(req.body.message)
        res.send()
    } catch (error) {
        res.status(500).send({ error: 'Unable to delete a message' })
    }
})

// @route /api/messages
// @desc send message
router.post('/', auth, async (req, res) => {
    try {
        const message = await new Message({
            user: req.userId,
            ...req.body,
        }).save()

        res.status(201).send(message)
    } catch (error) {
        res.status(500).send({ error: 'Unable to send a message' })
    }
})

export default router
