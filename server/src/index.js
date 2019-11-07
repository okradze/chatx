import express from 'express'
import compression from 'compression'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'

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

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
