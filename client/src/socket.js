import socketClient from 'socket.io-client'

export const socket = socketClient('http://localhost:5000')
