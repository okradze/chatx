import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/User'
import auth from '../middlewares/auth'

const router = express.Router()

const generateTokenAndSetCookie = (res, id) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '14d',
    })

    res.cookie('token', token, {
        maxAge: 3600000 * 24 * 14, // 14 days
        httpOnly: true,
        secure: process.env.NODE_ENV,
    })
}

// @route api/auth/check
// @desc check if users JWT is valid
router.post('/check', async (req, res) => {
    try {
        const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET)

        const user = await User.findById(decoded.id)

        res.send(user)
    } catch (error) {
        res.status(401).send({ error: 'invalid-token' })
    }
})

// @route api/auth/login
// @desc Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })

        if (!user) {
            res.status(400).send({ error: 'no-user' })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            res.status(400).send({ error: 'no-user' })
        }

        generateTokenAndSetCookie(res, user._id)
        res.send(user)
    } catch (error) {
        res.status(500).send({ error: 'Unable to login' })
    }
})

// @route api/auth/signup
// @desc Signup
router.post('/signup', async (req, res) => {
    try {
        // hash password and store the user in the db
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const user = await new User({
            ...req.body,
            password: hashedPassword,
        }).save()

        generateTokenAndSetCookie(res, user._id)
        res.status(201).send(user)
    } catch (error) {
        res.status(500).send({ error: 'Unable to signup' })
    }
})

// @route api/auth/logout
// @desc Logout
router.post('/logout', auth, (req, res) => {
    try {
        res.clearCookie('token')
        res.send()
    } catch (error) {
        res.status(500).send({ error: 'Unable to logout' })
    }
})

export default router
