import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    try {
        const token = req.cookies.token

        if (!token) {
            res.status(401).send()
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.userId = decoded.id
        next()
    } catch (error) {
        res.clearCookie('token')
        res.status(401).send({ error: 'no-auth' })
    }
}

export default auth
