import express from 'express'
import compression from 'compression'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import socket from 'socket.io'

import './mongoose'
import rootRouter from './routers/rootRouter'

const app = express()
const port = process.env.PORT || 5000

app.use(compression())
app.use(helmet())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', rootRouter)

const server = app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const io = socket(server)

io.on('connection', socket => {
    socket.broadcast.emit('hello')
    global.socketio = socket
})
