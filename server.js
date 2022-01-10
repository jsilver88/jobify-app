import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()

// DB and authenticate User
import connectDB from './db/connect.js'

// Routers
import authRouter from './routes/authRoutes.js'
import jobRouter from './routes/jobsRoutes.js'

// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome!')
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
