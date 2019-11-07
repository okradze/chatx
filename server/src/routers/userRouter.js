import express from 'express'
import User from '../models/User'
import auth from '../middlewares/auth'

const router = express.Router()

// @route /api/users?search=
// @desc search users
router.get('/', auth, async (req, res) => {
    try {
        const users = await User.find({
            $text: { $search: req.query.search, $caseSensitive: false },
        })
        res.send(users)
    } catch (error) {
        res.status(500).send({ error: 'Unable to get users' })
    }
})

export default router
