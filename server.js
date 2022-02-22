import express from 'express'
const app = express()
import dotenv from 'dotenv'
import 'express-async-errors'
import morgan from 'morgan'
dotenv.config()

// DB and authenticate User
import connectDB from './db/connect.js'

// Routers
import authRouter from './routes/authRoutes.js'
import jobRouter from './routes/jobsRoutes.js'

// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}
app.use(express.json())

app.get('/api', (req, res) => {
  res.json({ msg: 'API!' })
})

app.use('/api/auth', authRouter)
app.use('/api/jobs', jobRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5500

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()
